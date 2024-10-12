// src/__tests__/Login.spec.ts

import { test, expect } from "@playwright/test";

test("Login form submits and navigates to /users", async ({ page }) => {
  // Navigate to the login page
  await page.goto("/"); // Replace with your app's URL if different

  // Ensure the form is visible
  await expect(page.locator("text=Welcome!")).toBeVisible();

  // Fill in the form fields
  await page.fill('input[name="email"]', "test@example.com"); // Replace with the actual name or ID of the email field
  await page.fill('input[name="password"]', "password123"); // Replace with the actual name or ID of the password field

  // Click the submit button (Login button)
  await page.click('button[type="submit"]'); // Adjust the selector if needed

  // Wait for the page to navigate to '/users'
  await expect(page).toHaveURL("/users"); // Replace with the URL you expect after successful login
});

test("Login form shows validation errors when fields are empty", async ({
  page,
}) => {
  // Navigate to the login page
  await page.goto("/"); // Replace with your app's URL

  // Submit the form with empty fields
  await page.click('button[type="submit"]');

  // Check that validation error messages appear
  await expect(page.locator("text=Invalid email address")).toBeVisible();
  await expect(
    page.locator("text=Password must be at least 6 characters long")
  ).toBeVisible();
});
