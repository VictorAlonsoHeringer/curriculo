import { expect, test } from '@playwright/test';

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

  await expect(page.locator('astro-island[component-export="CommandPalette"]')).not.toHaveAttribute(
    'ssr',
    '',
  );
  await page.keyboard.press('Control+k');
  await expect(page.getByRole('dialog', { name: 'Abrir busca e comandos' })).toBeVisible();
  await page.getByPlaceholder('Navegue pelo portfólio…').fill('Projetos');
  await expect(page.getByRole('button', { name: /Projetos/ })).toBeVisible();
});

test('serves the English version as a real route', async ({ page }) => {
  await page.goto('/en/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('I build systems');
});
