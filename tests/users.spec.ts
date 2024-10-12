// usersTable.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Users Table", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the DataTable is rendered
    await page.goto("/users"); // Adjust the URL based on your app's routing
    await page.waitForLoadState("networkidle"); // Wait for network requests to settle
  });

  test("renders the table headers correctly", async ({ page }) => {
    // Check if the headers are rendered correctly
    const headers = [
      "ORGANIZATION",
      "USERNAME",
      "EMAIL",
      "PHONE NUMBER",
      "DATE",
      "STATUS",
    ];

    for (const header of headers) {
      await expect(page.locator(`text=${header}`)).toBeVisible({
        timeout: 60000,
      }); // Wait up to 60 seconds for each header
    }
  });

  test("sorts data when clicking column headers", async ({ page }) => {
    // Click on the "ORGANIZATION" column header to sort
    const orgHeader = page.locator("text=ORGANIZATION");
    await orgHeader.click();

    // Ensure sorting is applied (we can check the sorting order via aria-sort or a visual change)
    await expect(orgHeader).toHaveAttribute("aria-sort", "ascending");

    // Click again to reverse the sorting
    await orgHeader.click();
    await expect(orgHeader).toHaveAttribute("aria-sort", "descending");
  });

  test("displays formatted date correctly", async ({ page }) => {
    // Check the first row for the formatted date
    const firstRowDate = page.locator(
      '[role="rowgroup"] >> nth=0 [aria-colindex="5"]'
    ); // Adjust for the correct column index
    await expect(firstRowDate).toHaveText(/2023-09-10/); // Verify that the date is formatted correctly (adjust to actual format)
  });

  test("displays status with correct styles", async ({ page }) => {
    // Check for the "Active" status and verify the style
    const activeStatusCell = page.locator(
      '[role="rowgroup"] >> nth=0 [aria-colindex="6"]'
    ); // Adjust for status column index
    await expect(activeStatusCell).toHaveText("Active");
    await expect(activeStatusCell).toHaveClass(/bg-green-500/); // Check if it has the correct background color (you may need to adjust the class based on your CSS)

    // Check for the "Inactive" status and verify the style
    const inactiveStatusCell = page.locator(
      '[role="rowgroup"] >> nth=1 [aria-colindex="6"]'
    );
    await expect(inactiveStatusCell).toHaveText("Inactive");
    await expect(inactiveStatusCell).toHaveClass(/bg-red-500/); // Check for the correct background color
  });

  test("displays action dropdown", async ({ page }) => {
    // Check if the actions dropdown is rendered for the first user
    const actionButton = page.locator(
      '[role="rowgroup"] >> nth=0 [aria-colindex="7"]'
    ); // Adjust to the actions column
    await expect(actionButton).toBeVisible();

    // Click the action button to open the dropdown (you may need to adjust the selector)
    await actionButton.click();
    const dropdownMenu = page.locator('[role="menu"]');
    await expect(dropdownMenu).toBeVisible(); // Check if the dropdown menu opens
  });

  // Additional test for verifying row data rendering correctly
  test("displays user data correctly in each row", async ({ page }) => {
    const firstRow = page.locator('[role="rowgroup"] >> nth=0'); // First row in the table
    await expect(firstRow.locator("text=Company A")).toBeVisible();
    await expect(firstRow.locator("text=john_doe")).toBeVisible();
    await expect(firstRow.locator("text=john@example.com")).toBeVisible();
    await expect(firstRow.locator("text=+1234567890")).toBeVisible();
    await expect(firstRow.locator("text=2023-09-10")).toBeVisible();
    await expect(firstRow.locator("text=Active")).toBeVisible();
  });
});
