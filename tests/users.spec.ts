import { test, expect } from '@playwright/test';
import { cardData } from "../src/data/usersCardData";// Assuming this is accessible

test.describe('Users Page with UsersCard', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the "/users" page where the UsersCard component is rendered
    await page.goto('/users'); // Adjust the route if necessary
  });

  test('renders the UsersCard component with the correct number of cards', async ({ page }) => {
    // Get the number of cards rendered on the page
    const cards = await page.locator('[x-chunk^="dashboard-01-chunk"]');
    await expect(cards).toHaveCount(cardData.length);
  });

  test('displays each card with the correct title, value, and icon', async ({ page }) => {
    for (let i = 0; i < cardData.length; i++) {
      const card = cardData[i];

      // Check the icon is displayed correctly
      const icon = await page.locator(`[x-chunk="dashboard-01-chunk-${i}"] img`);
      await expect(icon).toHaveAttribute('src', card.icon);

      // Check the title is displayed correctly
      const title = await page.locator(`[x-chunk="dashboard-01-chunk-${i}"] .CardTitle`);
      await expect(title).toHaveText(card.title);

      // Check the value is displayed correctly
      const value = await page.locator(`[x-chunk="dashboard-01-chunk-${i}"] .CardContent .text-primary`);
      await expect(value).toHaveText(card.value.toString());
    }
  });
});
