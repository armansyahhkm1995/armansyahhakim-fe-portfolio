import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should load home page with hero section', async ({ page }) => {
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=I design experiences')).toBeVisible();
  });

  test('should have skip to main content link', async ({ page }) => {
    const skipLink = page.locator('a[href="#main"]');
    await expect(skipLink).toBeVisible();
  });

  test('Hero CTA "Explore Transformations" scrolls to transformations section', async ({ page }) => {
    const cta = page.locator('a[href="#transformations"]');
    await expect(cta).toBeVisible();
    await cta.click();
    await expect(page.locator('#transformations')).toBeInViewport();
  });

  test('Hero CTA "My Design Philosophy" scrolls to philosophy section', async ({ page }) => {
    const cta = page.locator('a[href="#philosophy"]');
    await expect(cta).toBeVisible();
    await cta.click();
    await expect(page.locator('#philosophy')).toBeInViewport();
  });

  test('should have transformation list section', async ({ page }) => {
    await expect(page.locator('#transformations')).toBeVisible();
    await expect(page.locator('text=Transformation Library')).toBeVisible();
  });

  test('should have design philosophy section', async ({ page }) => {
    await expect(page.locator('#philosophy')).toBeVisible();
    // The section heading has the text
    await expect(page.locator('#philosophy').locator('text=Design Philosophy')).toBeVisible();
  });

  test('should have project cards in transformation list', async ({ page }) => {
    const projectCards = page.locator('#transformations a[href^="/projects/"]');
    await expect(projectCards.first()).toBeVisible();
    // Should have 5 project cards
    await expect(projectCards).toHaveCount(5);
  });
});