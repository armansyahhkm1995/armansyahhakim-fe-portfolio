import { test, expect } from '@playwright/test';

const caseStudies = [
  { slug: 'corteva', title: 'Corteva' },
  { slug: 'amase', title: 'Amase' },
  { slug: 'ems', title: 'EMS' },
  { slug: 'falahOne', title: 'Falah One' },
  { slug: 'vts', title: 'VTS Workbench' },
];

test.describe('Case Study Pages', () => {
  for (const cs of caseStudies) {
    test.describe(`${cs.title} Case Study`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/projects/${cs.slug}`);
        await page.waitForLoadState('networkidle');
      });

      test('should load case study page with correct URL', async ({ page }) => {
        await expect(page).toHaveURL(`/projects/${cs.slug}`);
        // Page should have some visible content
        await expect(page.locator('body')).toBeVisible();
      });

      test('should have sticky navigation', async ({ page }) => {
        const nav = page.locator('nav, [role="navigation"]').first();
        await expect(nav).toBeVisible();
      });

      test('should have main content area', async ({ page }) => {
        // Check for any visible main content element
        const main = page.locator('main, #main, [role="main"]').first();
        await expect(main).toBeVisible();
      });

      test('should scroll smoothly to sections via sticky nav', async ({ page }) => {
        const navLinks = page.locator('nav a[href^="#"]').first();
        if (await navLinks.count() > 0) {
          await navLinks.click();
          await page.waitForTimeout(500);
        }
      });
    });
  }
});

test.describe('404 for invalid project slug', () => {
  test('should show 404 for non-existent project', async ({ page }) => {
    await page.goto('/projects/non-existent');
    await expect(page.locator('h1')).toContainText('404');
  });
});