const { test, expect } = require('@playwright/test');

test.describe('Login Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.clear();
    });
  });

  test('should display login page with correct elements', async ({ page }) => {
    await page.goto('/login');
    
    // Check page title and main heading
    await expect(page.locator('h1')).toContainText('GymBuddies');
    await expect(page.locator('p').first()).toContainText('Find your perfect workout partner');
    
    // Check form elements
    await expect(page.locator('input[id="username"]')).toBeVisible();
    await expect(page.locator('input[id="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    
    // Check test credentials are displayed
    await expect(page.locator('text=Test credentials:')).toBeVisible();
    await expect(page.locator('text=Username: testuser')).toBeVisible();
    await expect(page.locator('text=Password: password123')).toBeVisible();
  });

  test('should successfully login with valid credentials', async ({ page }) => {
    await page.goto('/login');
    
    // Fill in valid credentials
    await page.fill('input[id="username"]', 'testuser');
    await page.fill('input[id="password"]', 'password123');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Should redirect to profiles page
    await expect(page).toHaveURL('/profiles');
    
    // Should see the profiles page content
    await expect(page.locator('h1')).toContainText('GymBuddies');
    await expect(page.locator('h2')).toContainText('Find Your Workout Partners');
    
    // Should have logout button
    await expect(page.locator('button:has-text("Logout")')).toBeVisible();
  });

  test('should show error message for invalid credentials', async ({ page }) => {
    await page.goto('/login');
    
    // Fill in invalid credentials
    await page.fill('input[id="username"]', 'wronguser');
    await page.fill('input[id="password"]', 'wrongpass');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Should stay on login page
    await expect(page).toHaveURL('/login');
    
    // Should show error message
    await expect(page.locator('.alert')).toBeVisible();
    await expect(page.locator('.alert')).toContainText('Invalid username or password');
  });

  test('should show error message for empty credentials', async ({ page }) => {
    await page.goto('/login');
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Should stay on login page due to HTML5 validation
    await expect(page).toHaveURL('/login');
  });

  test('should show error message for wrong username only', async ({ page }) => {
    await page.goto('/login');
    
    // Fill in wrong username but correct password
    await page.fill('input[id="username"]', 'wronguser');
    await page.fill('input[id="password"]', 'password123');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Should show error message
    await expect(page.locator('.alert')).toBeVisible();
    await expect(page.locator('.alert')).toContainText('Invalid username or password');
  });

  test('should show error message for wrong password only', async ({ page }) => {
    await page.goto('/login');
    
    // Fill in correct username but wrong password
    await page.fill('input[id="username"]', 'testuser');
    await page.fill('input[id="password"]', 'wrongpass');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Should show error message
    await expect(page.locator('.alert')).toBeVisible();
    await expect(page.locator('.alert')).toContainText('Invalid username or password');
  });

  test('should redirect to profiles if already logged in', async ({ page }) => {
    // Set login state in localStorage
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', 'testuser');
    });
    
    // Navigate to login page
    await page.goto('/login');
    
    // Should redirect to profiles page
    await expect(page).toHaveURL('/profiles');
  });
});
