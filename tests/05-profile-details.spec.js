const { test, expect } = require('@playwright/test');

test.describe('Profile Details Display', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto('/login');
    await page.fill('input[id="username"]', 'testuser');
    await page.fill('input[id="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/profiles');
  });

  test('should display Alex Johnson profile details correctly', async ({ page }) => {
    // Navigate to Alex Johnson's profile (first profile)
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Check profile header
    await expect(page.locator('h1')).toContainText('Alex Johnson');
    await expect(page.locator('.detail-title')).toContainText('Personal Trainer & Bodybuilder');
    await expect(page.locator('.detail-bio')).toContainText('Passionate about helping others achieve their fitness goals');
    
    // Check avatar
    await expect(page.locator('.detail-avatar')).toBeVisible();
    
    // Check stats
    await expect(page.locator('.stat-card:has-text("156")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("89")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("5Years Experience")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("12")')).toBeVisible();
    
    // Check about section
    await expect(page.locator('h3:has-text("About Alex Johnson")')).toBeVisible();
    await expect(page.locator('text=Alex has been in the fitness industry for over 5 years')).toBeVisible();
    
    // Check goals section
    await expect(page.locator('h3:has-text("Fitness Goals")')).toBeVisible();
    await expect(page.locator('text=Help 1000+ people achieve their fitness goals')).toBeVisible();
    await expect(page.locator('text=Compete in natural bodybuilding competitions')).toBeVisible();
    
    // Check workout times
    await expect(page.locator('h3:has-text("Preferred Workout Times")')).toBeVisible();
    await expect(page.locator('text=Early morning (6:00 AM - 8:00 AM) and evening (6:00 PM - 8:00 PM)')).toBeVisible();
  });

  test('should display Sarah Chen profile details correctly', async ({ page }) => {
    // Navigate to Sarah Chen's profile (second profile)
    await page.click('.profile-card:nth-child(2)');
    await expect(page).toHaveURL('/profile/2');
    
    // Check profile header
    await expect(page.locator('h1')).toContainText('Sarah Chen');
    await expect(page.locator('.detail-title')).toContainText('Yoga Instructor & Wellness Coach');
    await expect(page.locator('.detail-bio')).toContainText('Love combining yoga with strength training');
    
    // Check stats
    await expect(page.locator('.stat-card:has-text("203")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("124")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("7")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("18")')).toBeVisible();
    
    // Check about section
    await expect(page.locator('h3:has-text("About Sarah Chen")')).toBeVisible();
    await expect(page.locator('text=certified yoga instructor and wellness coach')).toBeVisible();
    
    // Check goals
    await expect(page.locator('text=Complete advanced yoga teacher training')).toBeVisible();
    await expect(page.locator('text=Develop a wellness retreat program')).toBeVisible();
  });

  test('should display Mike Rodriguez profile details correctly', async ({ page }) => {
    // Navigate to Mike Rodriguez's profile (third profile)
    await page.click('.profile-card:nth-child(3)');
    await expect(page).toHaveURL('/profile/3');
    
    // Check profile header
    await expect(page.locator('h1')).toContainText('Mike Rodriguez');
    await expect(page.locator('.detail-title')).toContainText('CrossFit Athlete');
    await expect(page.locator('.detail-bio')).toContainText('CrossFit enthusiast looking for training partners');
    
    // Check stats
    await expect(page.locator('.stat-card:has-text("189")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("67")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("4Years Experience")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("8Achievements")')).toBeVisible();
    
    // Check goals
    await expect(page.locator('text=Qualify for CrossFit Games')).toBeVisible();
    await expect(page.locator('text=Become a CrossFit Level 2 trainer')).toBeVisible();
  });

  test('should display Emma Wilson profile details correctly', async ({ page }) => {
    // Navigate to Emma Wilson's profile (fourth profile)
    await page.click('.profile-card:nth-child(4)');
    await expect(page).toHaveURL('/profile/4');
    
    // Check profile header
    await expect(page.locator('h1')).toContainText('Emma Wilson');
    await expect(page.locator('.detail-title')).toContainText('Marathon Runner & Cardio Specialist');
    await expect(page.locator('.detail-bio')).toContainText('Long-distance runner who loves cardio and endurance training');
    
    // Check stats
    await expect(page.locator('.stat-card:has-text("234")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("156")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("6Years Experience")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("15")')).toBeVisible();
    
    // Check goals
    await expect(page.locator('text=Complete a sub-3 hour marathon')).toBeVisible();
    await expect(page.locator('text=Run marathons on all 7 continents')).toBeVisible();
  });

  test('should display David Kim profile details correctly', async ({ page }) => {
    // Navigate to David Kim's profile (fifth profile)
    await page.click('.profile-card:nth-child(5)');
    await expect(page).toHaveURL('/profile/5');
    
    // Check profile header
    await expect(page.locator('h1')).toContainText('David Kim');
    await expect(page.locator('.detail-title')).toContainText('Powerlifter & Strength Coach');
    await expect(page.locator('.detail-bio')).toContainText('Competitive powerlifter with a focus on raw strength');
    
    // Check stats
    await expect(page.locator('.stat-card:has-text("178")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("92")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("8Years Experience")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("22")')).toBeVisible();
    
    // Check goals
    await expect(page.locator('text=Set a new state deadlift record')).toBeVisible();
    await expect(page.locator('text=Compete at national powerlifting championships')).toBeVisible();
  });

  test('should display Lisa Thompson profile details correctly', async ({ page }) => {
    // Navigate to Lisa Thompson's profile (sixth profile)
    await page.click('.profile-card:nth-child(6)');
    await expect(page).toHaveURL('/profile/6');
    
    // Check profile header
    await expect(page.locator('h1')).toContainText('Lisa Thompson');
    await expect(page.locator('.detail-title')).toContainText('Fitness Model & Nutrition Expert');
    await expect(page.locator('.detail-bio')).toContainText('Balancing fitness with nutrition for optimal health');
    
    // Check stats
    await expect(page.locator('.stat-card:has-text("167")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("203")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("5")')).toBeVisible();
    await expect(page.locator('.stat-card:has-text("14")')).toBeVisible();
    
    // Check goals
    await expect(page.locator('text=Launch a nutrition coaching business')).toBeVisible();
    await expect(page.locator('text=Develop a meal prep service')).toBeVisible();
  });

  test('should display all profile sections for any profile', async ({ page }) => {
    // Navigate to any profile
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Check that all main sections are present
    await expect(page.locator('.detail-header')).toBeVisible();
    await expect(page.locator('.detail-stats')).toBeVisible();
    await expect(page.locator('h3:has-text("About")')).toBeVisible();
    await expect(page.locator('h3:has-text("Fitness Goals")')).toBeVisible();
    await expect(page.locator('h3:has-text("Preferred Workout Times")')).toBeVisible();
    
    // Check that friend request button is present
    await expect(page.locator('button:has-text("Make Friend Request")')).toBeVisible();
  });

  test('should display profile stats in correct format', async ({ page }) => {
    // Navigate to any profile
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Check that stats are displayed with proper labels
    await expect(page.locator('.stat-label:has-text("Total Workouts")')).toBeVisible();
    await expect(page.locator('.stat-label:has-text("Friends")')).toBeVisible();
    await expect(page.locator('.stat-label:has-text("Years Experience")')).toBeVisible();
    await expect(page.locator('.stat-label:has-text("Achievements")')).toBeVisible();
  });

  test('should display goals as a list', async ({ page }) => {
    // Navigate to any profile
    await page.click('.profile-card:first-child');
    await expect(page).toHaveURL('/profile/1');
    
    // Check that goals are displayed as list items
    const goalsList = page.locator('ul li');
    await expect(goalsList).toHaveCount(4); // Alex Johnson has 4 goals
    
    // Check that goals are clickable/visible
    await expect(goalsList.first()).toBeVisible();
  });
});
