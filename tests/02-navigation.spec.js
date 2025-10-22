const { test, expect } = require('@playwright/test');

test.describe('Navigation and Routing', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto('/login');
    await page.fill('input[id="username"]', 'testuser');
    await page.fill('input[id="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/profiles');
  });

  test('should redirect to login when accessing root path', async ({ page }) => {
    // Clear localStorage first
    await page.evaluate(() => {
      localStorage.clear();
    });
    await page.goto('/');
    await expect(page).toHaveURL('/login');
  });

  test('should redirect to login when accessing profiles without authentication', async ({ page }) => {
    // Clear localStorage to simulate not being logged in
    await page.evaluate(() => {
      localStorage.clear();
    });
    
    await page.goto('/profiles');
    await expect(page).toHaveURL('/login');
  });

  test('should redirect to login when accessing profile detail without authentication', async ({ page }) => {
    // Clear localStorage to simulate not being logged in
    await page.evaluate(() => {
      localStorage.clear();
    });
    
    await page.goto('/profile/1');
    await expect(page).toHaveURL('/login');
  });

  test('should navigate to profile detail when clicking on a profile card', async ({ page }) => {
    // Click on the first profile card
    await page.click('.profile-card:first-child');
    
    // Should navigate to profile detail page
    await expect(page).toHaveURL('/profile/1');
    
    // Should see profile detail content
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.detail-avatar')).toBeVisible();
  });

  test('should navigate back to profiles from profile detail', async ({ page }) => {
    // Navigate to profile detail
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Click back button
    await page.click('button:has-text("← Back to Profiles")');
    
    // Should return to profiles page
    await expect(page).toHaveURL('/profiles');
  });

  test('should logout and redirect to login', async ({ page }) => {
    // Click logout button
    await page.click('button:has-text("Logout")');
    
    // Should redirect to login page
    await expect(page).toHaveURL('/login');
    
    // Should not be able to access profiles without logging in again
    await page.goto('/profiles');
    await expect(page).toHaveURL('/login');
  });

  test('should logout from profile detail page', async ({ page }) => {
    // Navigate to profile detail
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Click logout button
    await page.click('button:has-text("Logout")');
    
    // Should redirect to login page
    await expect(page).toHaveURL('/login');
  });

  test('should handle invalid profile ID gracefully', async ({ page }) => {
    // Try to access a profile with invalid ID
    await page.goto('/profile/999');
    
    // Should redirect back to profiles page
    await expect(page).toHaveURL('/profiles');
  });

  test('should maintain login state across page refreshes', async ({ page }) => {
    // Refresh the page
    await page.reload();
    
    // Should still be on profiles page
    await expect(page).toHaveURL('/profiles');
    await expect(page.locator('h2')).toContainText('Find Your Workout Partners');
  });
});
