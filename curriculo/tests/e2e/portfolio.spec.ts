import { expect, test, type Locator } from '@playwright/test';

async function waitForHydration(island: Locator) {
  await expect.poll(() => island.evaluate((element) => element.hasAttribute('ssr'))).toBe(false);
}

test('presents the core portfolio content', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Victor Heringer.*Backend Developer/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Construo sistemas');
  await expect(page.getByRole('heading', { name: 'Horizon Sales System' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'League Analysis System' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Nexus' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Web Horizon' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Agah Arquitetura' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'MBA em Data Science e Analytics' }),
  ).toBeVisible();
  await expect(page.getByAltText('Retrato profissional de Victor Heringer')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'victor.heringer@webhorizon.com.br' }),
  ).toHaveAttribute('href', 'mailto:victor.heringer@webhorizon.com.br');
});

test('has no horizontal overflow', async ({ page }) => {
  await page.goto('/');

  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));

  expect(dimensions.content).toBe(dimensions.viewport);
});

test('supports theme and command palette interactions', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Alternar tema' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', /light|dark/);

  await waitForHydration(page.locator('astro-island[component-export="CommandPalette"]'));
  await page.keyboard.press('Control+k');
  await expect(page.getByRole('dialog', { name: 'Abrir busca e comandos' })).toBeVisible();
  await page.getByPlaceholder('Navegue pelo portfólio…').fill('Projetos');
  await expect(page.getByRole('button', { name: /Projetos/ })).toBeVisible();
});

test('serves the English version as a real route', async ({ page }) => {
  await page.goto('/en/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('I build systems');
  await expect(
    page.getByRole('button', { name: 'Download professional résumé as PDF' }).first(),
  ).toContainText('Download résumé');
});

test('opens the localized printable resume from the export button', async ({ page }) => {
  await page.goto('/');

  const exportButton = page
    .getByRole('button', { name: 'Exportar currículo profissional em PDF' })
    .first();
  await waitForHydration(
    page.locator('astro-island[component-export="ExportResumeButton"]').first(),
  );
  const popupPromise = page.waitForEvent('popup');

  await exportButton.click();
  await expect(exportButton).toContainText('Preparando currículo…');

  const resumePage = await popupPromise;
  await resumePage.waitForURL(/\/resume\/\?print=1$/);
  await expect(resumePage).toHaveTitle('Victor-Alonso-Heringer-Curriculo-PT.pdf');
  await resumePage.close();
});

test('shows accessible feedback when resume export cannot open', async ({ page }) => {
  await page.addInitScript(() => {
    window.open = () => null;
  });
  await page.goto('/');

  const exportButton = page
    .getByRole('button', { name: 'Exportar currículo profissional em PDF' })
    .first();
  await waitForHydration(
    page.locator('astro-island[component-export="ExportResumeButton"]').first(),
  );
  await exportButton.focus();
  await page.keyboard.press('Enter');

  await expect(
    page.getByRole('status').filter({ hasText: 'Não foi possível gerar' }),
  ).toBeVisible();
});

test('renders an ATS-oriented bilingual resume route', async ({ page }) => {
  await page.goto('/resume/');

  await expect(
    page.getByRole('heading', { level: 1, name: 'Victor Alonso Heringer' }),
  ).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Experiência profissional' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Projetos em destaque' })).toBeVisible();
  await expect(page.getByText('victor.heringer@webhorizon.com.br')).toBeVisible();
  const languageLink = page.getByRole('link', { name: 'EN' });
  await expect(languageLink).toHaveAttribute('href', /\/en\/resume\/$/);
  await languageLink.click();
  await expect(page).toHaveURL(/\/en\/resume\/$/);
  await expect(page.getByRole('heading', { name: 'Professional experience' })).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));
  expect(dimensions.content).toBe(dimensions.viewport);

  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('.resume-toolbar')).toBeHidden();
});

test('invokes the browser print interface from the resume page', async ({ page }) => {
  await page.addInitScript(() => {
    window.print = () => {
      document.body.dataset.printInvoked = 'true';
    };
  });
  await page.goto('/en/resume/');

  const printButton = page.getByRole('button', { name: 'Print or save PDF' });
  await printButton.click();

  await expect(page.locator('body')).toHaveAttribute('data-print-invoked', 'true');
  await expect(printButton).not.toHaveAttribute('aria-busy');
});

test('generates a real text-based PDF document', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'mobile', 'One PDF artifact validation is sufficient.');
  await page.goto('/resume/');
  await page.emulateMedia({ media: 'print' });

  const pdf = await page.pdf({ format: 'A4', printBackground: true });
  const pdfSource = pdf.toString('latin1');

  expect(pdf.subarray(0, 4).toString()).toBe('%PDF');
  expect(pdf.byteLength).toBeGreaterThan(20_000);
  expect(pdfSource.match(/\/Type\s*\/Page\b/g)).toHaveLength(2);
  expect(pdfSource.match(/\/Subtype\s*\/Link\b/g)?.length).toBeGreaterThanOrEqual(3);
  expect(pdfSource).toContain('/ToUnicode');
});
