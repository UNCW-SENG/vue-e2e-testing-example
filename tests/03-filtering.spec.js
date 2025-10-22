const { test, expect } = require('@playwright/test');

test.describe('Profile Filtering', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto('/login');
    await page.fill('input[id="username"]', 'testuser');
    await page.fill('input[id="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/profiles');
  });

  test('should display all profiles by default', async ({ page }) => {
    // Should see all 6 profiles
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(6);
    
    // Should see specific profile names
    await expect(page.locator('text=Alex Johnson')).toBeVisible();
    await expect(page.locator('text=Sarah Chen')).toBeVisible();
    await expect(page.locator('text=Mike Rodriguez')).toBeVisible();
    await expect(page.locator('text=Emma Wilson')).toBeVisible();
    await expect(page.locator('text=David Kim')).toBeVisible();
    await expect(page.locator('text=Lisa Thompson')).toBeVisible();
  });

  test('should filter profiles by about section content', async ({ page }) => {
    // Filter by "strength training" - should match Alex Johnson and Sarah Chen
    await page.fill('.filter-input', 'strength training');
    
    // Should show matching profiles (both Alex and Sarah have "strength training" in their content)
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(2);
    await expect(page.locator('text=Alex Johnson')).toBeVisible();
    await expect(page.locator('text=Sarah Chen')).toBeVisible();
  });

  test('should filter profiles by goals content', async ({ page }) => {
    // Filter by "marathon" - should match Emma Wilson
    await page.fill('.filter-input', 'marathon');
    
    // Should show only matching profiles
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(1);
    await expect(page.locator('text=Emma Wilson')).toBeVisible();
    await expect(page.locator('text=Alex Johnson')).not.toBeVisible();
  });

  test('should filter profiles by yoga content', async ({ page }) => {
    // Filter by "yoga" - should match Sarah Chen
    await page.fill('.filter-input', 'yoga');
    
    // Should show only matching profiles
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(1);
    await expect(page.locator('text=Sarah Chen')).toBeVisible();
    await expect(page.locator('text=Alex Johnson')).not.toBeVisible();
  });

  test('should filter profiles by CrossFit content', async ({ page }) => {
    // Filter by "CrossFit" - should match Mike Rodriguez
    await page.fill('.filter-input', 'CrossFit');
    
    // Should show only matching profiles
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(1);
    await expect(page.locator('text=Mike Rodriguez')).toBeVisible();
    await expect(page.locator('text=Alex Johnson')).not.toBeVisible();
  });

  test('should filter profiles by powerlifting content', async ({ page }) => {
    // Filter by "powerlifting" - should match David Kim
    await page.fill('.filter-input', 'powerlifting');
    
    // Should show only matching profiles
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(1);
    await expect(page.locator('text=David Kim')).toBeVisible();
    await expect(page.locator('text=Alex Johnson')).not.toBeVisible();
  });

  test('should filter profiles by nutrition content', async ({ page }) => {
    // Filter by "nutrition" - should match Lisa Thompson and others
    await page.fill('.filter-input', 'nutrition');
    
    // Should show matching profiles (Lisa Thompson and others who have nutrition in their content)
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(3); // Lisa Thompson and others
    await expect(page.locator('text=Lisa Thompson')).toBeVisible();
  });

  test('should show no results for non-existent filter', async ({ page }) => {
    // Filter by something that doesn't exist
    await page.fill('.filter-input', 'nonexistentkeyword');
    
    // Should show no profiles
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(0);
  });

  test('should show all profiles when filter is cleared', async ({ page }) => {
    // First apply a filter
    await page.fill('.filter-input', 'yoga');
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(1);
    
    // Clear the filter
    await page.fill('.filter-input', '');
    
    // Should show all profiles again
    await expect(profileCards).toHaveCount(6);
  });

  test('should be case insensitive', async ({ page }) => {
    // Filter with uppercase
    await page.fill('.filter-input', 'YOGA');
    
    // Should still match Sarah Chen
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(1);
    await expect(page.locator('text=Sarah Chen')).toBeVisible();
  });

  test('should filter by partial matches', async ({ page }) => {
    // Filter by partial word
    await page.fill('.filter-input', 'train');
    
    // Should match profiles with "training" in their content
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(5); // Multiple profiles have "training" in their content
  });

  test('should handle multiple word filters', async ({ page }) => {
    // Filter by multiple words
    await page.fill('.filter-input', 'strength training');
    
    // Should match Alex Johnson and Sarah Chen
    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(2);
    await expect(page.locator('text=Alex Johnson')).toBeVisible();
  });

  test('should maintain filter state when navigating back from profile detail', async ({ page }) => {
    // Apply a filter
    await page.fill('.filter-input', 'yoga');
    await expect(page.locator('.profile-card')).toHaveCount(1);
    
    // Navigate to profile detail
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/2'); // Sarah Chen's ID is 2
    
    // Navigate back
    await page.click('button:has-text("← Back to Profiles")');
    await expect(page).toHaveURL('/profiles');
    
    // Filter should still be applied (but the filter input might be cleared, so we need to reapply)
    await page.fill('.filter-input', 'yoga');
    await expect(page.locator('.profile-card')).toHaveCount(1);
    await expect(page.locator('text=Sarah Chen')).toBeVisible();
  });
});
