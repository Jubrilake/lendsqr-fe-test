import { test, expect } from "@playwright/test";

test("Login form shows validation errors when fields are empty", async ({
  page,
}) => {
  // Navigate to the login page
  await page.goto("/");

  // Submit the form with empty fields
  await page.click('button[type="submit"]');

  // Check that validation error messages appear
  await expect(page.locator("text=Invalid email address")).toBeVisible();
  await expect(
    page.locator("text=Password must be at least 6 characters long")
  ).toBeVisible();
});

test("Login form submits and navigates to /users", async ({ page }) => {
  // Navigate to the login page
  await page.goto("/");

  // Ensure the form is visible
  await expect(page.locator("text=Welcome!")).toBeVisible();

  // Fill in the form fields
  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('input[name="password"]', "password123");

  // Click the submit button (Login button)
  await page.click('button[type="submit"]');

  // Wait for the page to navigate to '/users'
  await expect(page).toHaveURL("/users");
});
