import { test, expect } from "@playwright/test";

test.describe("PageNotFound Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/non-existent-page");
    await page.waitForLoadState("networkidle");
  });

  test("should display correct elements", async ({ page }) => {
    // Check for the container
    const container = page.locator('div[class^="notfound-container"]');
    await expect(container).toBeVisible({ timeout: 10000 });

    // Check for the alert box
    const alertBox = page.locator('div[class^="alertBox"]');
    await expect(alertBox).toBeVisible({ timeout: 10000 });

    // Check for the alert content
    const alertContent = page.locator('div[class^="alertContent"]');
    await expect(alertContent).toBeVisible();

    // Check for the CircleAlert icon (assuming it's an SVG)
    const alertIcon = alertContent.locator("svg");
    await expect(alertIcon).toBeVisible();

    // Check for the alert text
    const alertText = page.getByText("Page not found:", { exact: false });
    await expect(alertText).toBeVisible();

    // Check for the GoBack button
    const goBackButton = page.getByRole("button", { name: "GoBack" });
    await expect(goBackButton).toBeVisible();

    // Verify the text content
    const pageContent = await page.textContent("body");
    expect(pageContent).toContain("Page not found: /non-exist");
    expect(pageContent).toContain("GoBack");
  });

  test("should handle different path lengths correctly", async ({ page }) => {
    // Test with a short path
    await page.goto("/short");
    await expect(page.getByText("Page not found: /short")).toBeVisible();
  });

  test("navigation functionality of GoBack button", async ({ page }) => {
    const goBackButton = page.getByRole("button", { name: "GoBack" });
    await goBackButton.click();

    // Check if it navigates to the signin page
    await expect(page).toHaveURL("/");
  });
});
