import { test, expect } from '@playwright/test';

test.describe('Projects Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');
  });

  test('should load projects page with all projects', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Projects');
    const projectCards = page.locator('article a[href^="/projects/"]');
    await expect(projectCards).toHaveCount(5);
  });

  test('should navigate to corteva case study', async ({ page }) => {
    const cortevaCard = page.locator('article a[href="/projects/corteva"]');
    await expect(cortevaCard).toBeVisible();
    await cortevaCard.click();
    await expect(page).toHaveURL('/projects/corteva');
    // Just verify page loads
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to amase case study', async ({ page }) => {
    const amaseCard = page.locator('article a[href="/projects/amase"]');
    await expect(amaseCard).toBeVisible();
    await amaseCard.click();
    await expect(page).toHaveURL('/projects/amase');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to ems case study', async ({ page }) => {
    const emsCard = page.locator('article a[href="/projects/ems"]');
    await expect(emsCard).toBeVisible();
    await emsCard.click();
    await expect(page).toHaveURL('/projects/ems');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to falahOne case study', async ({ page }) => {
    const falahOneCard = page.locator('article a[href="/projects/falahOne"]');
    await expect(falahOneCard).toBeVisible();
    await falahOneCard.click();
    await expect(page).toHaveURL('/projects/falahOne');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to vts case study', async ({ page }) => {
    const vtsCard = page.locator('article a[href="/projects/vts"]');
    await expect(vtsCard).toBeVisible();
    await vtsCard.click();
    await expect(page).toHaveURL('/projects/vts');
    await expect(page.locator('body')).toBeVisible();
  });
});