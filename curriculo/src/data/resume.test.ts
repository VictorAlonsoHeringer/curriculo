import { describe, expect, it } from 'vitest';

import { en, pt } from './portfolio';
import {
  buildResumeData,
  formatResumePeriod,
  getResumeFileName,
  selectFeaturedProjects,
} from './resume';

describe('resume data', () => {
  it('builds localized data from the matching portfolio source', () => {
    const portuguese = buildResumeData(pt);
    const english = buildResumeData(en);

    expect(portuguese.locale).toBe('pt');
    expect(portuguese.labels.experience).toBe('Experiência profissional');
    expect(english.locale).toBe('en');
    expect(english.labels.experience).toBe('Professional experience');
    expect(english.experience[0]?.company).toBe(en.experience.items[0]?.company);
  });

  it('generates standardized PDF file names', () => {
    expect(getResumeFileName('pt')).toBe('Victor-Alonso-Heringer-Curriculo-PT.pdf');
    expect(getResumeFileName('en')).toBe('Victor-Alonso-Heringer-Resume-EN.pdf');
  });

  it('keeps optional contact fields absent when they are not registered', () => {
    const { personal } = buildResumeData(pt);

    expect(personal.phone).toBeUndefined();
    expect(personal.github).toBeUndefined();
  });

  it('normalizes periods without changing their localized meaning', () => {
    expect(formatResumePeriod('  Desde   abril de 2023  ')).toBe('Desde abril de 2023');
    expect(formatResumePeriod(' 2025 — Present ')).toBe('2025 — Present');
  });

  it('preserves the source ordering of professional experience', () => {
    expect(buildResumeData(pt).experience.map(({ company }) => company)).toEqual(
      pt.experience.items.map(({ company }) => company),
    );
  });

  it('prioritizes the data platform before the backend and AI projects', () => {
    expect(selectFeaturedProjects(pt).map(({ slug }) => slug)).toEqual([
      'las-monolith',
      'hss-monolith',
      'nexus',
    ]);
  });

  it('positions the printable resume around backend and data engineering', () => {
    const resume = buildResumeData(en);

    expect(resume.personal.role).toBe('Backend Software Engineer | Data & Cloud');
    expect(resume.skills.map(({ title }) => title)).toEqual([
      'Backend Engineering',
      'Databases & Data',
      'Data Engineering & Analytics',
      'Cloud & Infrastructure',
      'Architecture & Engineering',
      'AI & Automation',
      'Complementary Frontend',
    ]);
    expect(resume.experience[1]?.role).toBe('Full Stack Software Developer');
    expect(resume.projects[0]?.technologies).toContain('Polars');
  });

  it('separates degrees, coursework, and languages by typed category', () => {
    const resume = buildResumeData(pt);

    expect(resume.education).toHaveLength(2);
    expect(resume.courses).toHaveLength(1);
    expect(resume.languages).toHaveLength(1);
  });
});
