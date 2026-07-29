import { describe, expect, it } from 'vitest';

import { en, pt } from './portfolio';

describe('portfolio content', () => {
  it('keeps the same project slugs in both languages', () => {
    expect(en.projects.items.map(({ slug }) => slug)).toEqual(
      pt.projects.items.map(({ slug }) => slug),
    );
  });

  it('does not publish duplicate project slugs', () => {
    const slugs = pt.projects.items.map(({ slug }) => slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('publishes all five selected projects', () => {
    expect(pt.projects.items).toHaveLength(5);
    expect(pt.projects.items.map(({ title }) => title)).toEqual(
      expect.arrayContaining([
        'Horizon Sales System',
        'League Analysis System',
        'Nexus',
        'Web Horizon',
        'Agah Arquitetura',
      ]),
    );
  });
});
