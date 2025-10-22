const { test, expect } = require('@playwright/test');

test.describe('Friend Request Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto('/login');
    await page.fill('input[id="username"]', 'testuser');
    await page.fill('input[id="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/profiles');
  });

  test('should display friend request button on profile detail', async ({ page }) => {
    // Navigate to a profile detail page
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Should see the friend request button
    await expect(page.locator('button:has-text("Make Friend Request")')).toBeVisible();
  });

  test('should send friend request successfully', async ({ page }) => {
    // Navigate to Alex Johnson's profile (first profile)
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Click the friend request button
    await page.click('button:has-text("Make Friend Request")');
    
    // Should show success message
    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page.locator('.alert-success')).toContainText('Friend request sent successfully!');
    await expect(page.locator('.alert-success')).toContainText('Alex Johnson will be notified.');
    
    // Button should be disabled and text should change
    await expect(page.locator('button:has-text("Friend Request Sent")')).toBeVisible();
    await expect(page.locator('button:has-text("Friend Request Sent")')).toBeDisabled();
  });

  test('should send friend request to Sarah Chen', async ({ page }) => {
    // Navigate to Sarah Chen's profile (second profile)
    await page.click('.profile-card:nth-child(2)');
    await expect(page).toHaveURL('/profile/2');
    
    // Click the friend request button
    await page.click('button:has-text("Make Friend Request")');
    
    // Should show success message with correct name
    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page.locator('.alert-success')).toContainText('Sarah Chen will be notified.');
    
    // Button should be disabled
    await expect(page.locator('button:has-text("Friend Request Sent")')).toBeDisabled();
  });

  test('should send friend request to Mike Rodriguez', async ({ page }) => {
    // Navigate to Mike Rodriguez's profile (third profile)
    await page.click('.profile-card:nth-child(3)');
    await expect(page).toHaveURL('/profile/3');
    
    // Click the friend request button
    await page.click('button:has-text("Make Friend Request")');
    
    // Should show success message with correct name
    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page.locator('.alert-success')).toContainText('Mike Rodriguez will be notified.');
  });

  test('should send friend request to Emma Wilson', async ({ page }) => {
    // Navigate to Emma Wilson's profile (fourth profile)
    await page.click('.profile-card:nth-child(4)');
    await expect(page).toHaveURL('/profile/4');
    
    // Click the friend request button
    await page.click('button:has-text("Make Friend Request")');
    
    // Should show success message with correct name
    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page.locator('.alert-success')).toContainText('Emma Wilson will be notified.');
  });

  test('should send friend request to David Kim', async ({ page }) => {
    // Navigate to David Kim's profile (fifth profile)
    await page.click('.profile-card:nth-child(5)');
    await expect(page).toHaveURL('/profile/5');
    
    // Click the friend request button
    await page.click('button:has-text("Make Friend Request")');
    
    // Should show success message with correct name
    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page.locator('.alert-success')).toContainText('David Kim will be notified.');
  });

  test('should send friend request to Lisa Thompson', async ({ page }) => {
    // Navigate to Lisa Thompson's profile (sixth profile)
    await page.click('.profile-card:nth-child(6)');
    await expect(page).toHaveURL('/profile/6');
    
    // Click the friend request button
    await page.click('button:has-text("Make Friend Request")');
    
    // Should show success message with correct name
    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page.locator('.alert-success')).toContainText('Lisa Thompson will be notified.');
  });

  test('should not allow sending multiple friend requests to same person', async ({ page }) => {
    // Navigate to a profile detail page
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Send first friend request
    await page.click('button:has-text("Make Friend Request")');
    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page.locator('button:has-text("Friend Request Sent")')).toBeDisabled();
    
    // Try to send another request (button should be disabled)
    await expect(page.locator('button:has-text("Friend Request Sent")')).toBeDisabled();
  });

  test('should hide success message after timeout', async ({ page }) => {
    // Navigate to a profile detail page
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Send friend request
    await page.click('button:has-text("Make Friend Request")');
    await expect(page.locator('.alert-success')).toBeVisible();
    
    // Wait for message to disappear (5 seconds timeout)
    await expect(page.locator('.alert-success')).not.toBeVisible({ timeout: 6000 });
  });

  test('should maintain friend request state when navigating back and forth', async ({ page }) => {
    // Navigate to a profile detail page
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Send friend request
    await page.click('button:has-text("Make Friend Request")');
    await expect(page.locator('button:has-text("Friend Request Sent")')).toBeDisabled();
    
    // Navigate back to profiles
    await page.click('button:has-text("← Back to Profiles")');
    await expect(page).toHaveURL('/profiles');
    
    // Navigate back to the same profile
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Friend request should still be sent (button should be disabled)
    await expect(page.locator('button:has-text("Friend Request Sent")')).toBeDisabled();
  });

  test('should work with filtered profiles', async ({ page }) => {
    // Apply a filter to show only Sarah Chen
    await page.fill('.filter-input', 'yoga');
    await expect(page.locator('.profile-card')).toHaveCount(1);
    
    // Navigate to Sarah Chen's profile
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/2');
    
    // Send friend request
    await page.click('button:has-text("Make Friend Request")');
    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page.locator('.alert-success')).toContainText('Sarah Chen will be notified.');
  });
});
