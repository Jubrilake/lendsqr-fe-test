import { test, expect } from "@playwright/test";

const mockUsers = [
  {
    id: "6708e88355d72b9eb892b3ad",
    organization: "Netagy",
    userName: "LeticiaBerger",
    email: "leticiaberger@netagy.com",
    phoneNumber: "+234 (851) 584-2353",
    date: "2020-07-21T11:27:06-01:00",
    status: "Blacklisted",
    personalInformation: {
      fullName: "Horn Jenkins",
      phoneNumber: "+234 (860) 501-2897",
      emailAddress: "hornjenkins@netagy.com",
      bvn: 99999999999,
      gender: "Prefer not to say",
      maritalStatus: "Married",
      children: 5,
      typeOfResidence: "Shared",
    },
    educationEmployment: {
      levelOfEducation: "Associate",
      employmentStatus: "Unemployed",
      sectorOfEmployment: "Finance",
      durationOfEmployment: "1 years",
      officeEmail: "hornjenkins@netagy.com",
      monthlyIncomeRange: "₦600,001 - ₦800,000",
      loanRepayment: "₦200,000",
    },
    bankDetails: {
      bankName: "Acruex Bank",
      accountBalance: "₦1000000",
      accountNumber: 1000000000,
    },
    socials: {
      facebook: "https://facebook.com/RamirezBuchanan",
      twitter: "https://twitter.com/HamptonCarver",
      linkedin: "https://linkedin.com/in/JoyceAlvarez",
    },
    guarantor: {
      fullName: "Welch Christian",
      relationship: "Friend",
      phoneNumber: "+234 (970) 486-2915",
      email: "welchchristian@acruex.com",
    },
  },
];

test.describe("UserDetail Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.route(
      "https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93",
      async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await route.fulfill({ json: mockUsers });
      }
    );

    // Navigate to the user detail page
    await page.goto("/users/6708e88355d72b9eb892b3ad");

    // Wait for the page to be fully loaded
    await page.waitForLoadState("networkidle");
  });

  test("displays user details when user is found", async ({ page }) => {
    // Check if the loading state is displayed
    await expect(page.locator("text=Loading...")).toBeVisible({
      timeout: 100000,
    });

    // Wait for the content to be visible
    await expect(page.locator("body")).toBeVisible({ timeout: 10000 });

    // Check if UserDetailsHeaderAction is rendered
    await expect(page.locator('text="Back to users"')).toBeVisible({
      timeout: 10000,
    });

    // Use a more specific selector for "User Details" and increase timeout
    await expect(page.locator('h2:has-text("User Details")')).toBeVisible({
      timeout: 10000,
    });

    await expect(page.locator('text="BLACKLIST USER"')).toBeVisible();
    await expect(page.locator('text="ACTIVATE USER"')).toBeVisible();

    // Check if UserDetailsHeader is rendered
    //   await expect(page.locator('h3:text("Horn Jenkins")')).toBeVisible();

    await expect(page.locator('text="6708e88355d72b9eb892b3ad"')).toBeVisible();
    await expect(page.locator('text="₦1,000,000"')).toBeVisible();
    await expect(page.locator('text="1000000000/Acruex Bank"')).toBeVisible();

    // Check if GeneralDetails is rendered
    await expect(page.locator('text="Personal Information"')).toBeVisible();
    await expect(page.locator('text="Education and Employment"')).toBeVisible();
    await expect(page.locator('text="Socials"')).toBeVisible();
    await expect(page.locator('text="Guarantor"')).toBeVisible();
  });

  test("displays correct personal information", async ({ page }) => {
    // await expect(page.locator('text="Horn Jenkins"').nth(1)).toBeVisible();
    await expect(page.locator('text="+234 (860) 501-2897"')).toBeVisible();
    // await expect(page.locator('text="hornjenkins@netagy.com"')).toBeVisible();
    // await expect(page.locator("data-testid=office-email")).toHaveText("hornjenkins@netagy.com");
    await expect(page.locator('text="99999999999"')).toBeVisible();
    await expect(page.locator('text="Prefer not to say"')).toBeVisible();
    await expect(page.locator('text="Married"')).toBeVisible();
    await expect(page.locator('text="5"')).toBeVisible();
    await expect(page.locator('text="Shared"')).toBeVisible();
  });

  test("displays correct education and employment information", async ({
    page,
  }) => {
    // Wait for the Education and Employment section to be visible
    await expect(
      page.locator('h3:text("Education and Employment")')
    ).toBeVisible({ timeout: 10000 });

    // Check for the specific fields
    await expect(page.locator('text="Associate"')).toBeVisible();
    await expect(page.locator('text="Unemployed"')).toBeVisible();
    await expect(page.locator('text="Finance"')).toBeVisible();
    await expect(page.locator('text="1 years"')).toBeVisible();
    // await expect(page.locator('text="hornjenkins@netagy.com"')).toBeVisible();
    await expect(page.locator('text="₦600,001 - ₦800,000"')).toBeVisible();
    await expect(page.locator('text="₦200,000"')).toBeVisible();
  });

  test("displays correct social information", async ({ page }) => {
    await expect(
      page.locator('text="https://facebook.com/RamirezBuchanan"')
    ).toBeVisible();
    await expect(
      page.locator('text="https://twitter.com/HamptonCarver"')
    ).toBeVisible();
    await expect(
      page.locator('text="https://linkedin.com/in/JoyceAlvarez"')
    ).toBeVisible();
  });

  test("displays correct guarantor information", async ({ page }) => {
    await expect(page.locator('text="Welch Christian"')).toBeVisible();
    await expect(page.locator('text="+234 (970) 486-2915"')).toBeVisible();
    await expect(
      page.locator('text="welchchristian@acruex.com"')
    ).toBeVisible();
    await expect(page.locator('text="Friend"')).toBeVisible();
  });

  test('navigates back to users page when "Back to Users" is clicked', async ({
    page,
  }) => {
    await page.click('text="Back to users"');
    await expect(page).toHaveURL("/users");
  });

  test("displays UserNotFound component when user is not found", async ({
    page,
  }) => {
    // Clear localStorage before navigation
    await page.evaluate(() => {
      window.localStorage.clear();
    });

    // Navigate to a non-existent user page
    await page.goto("/users/nonexistent-id");

    // Check if UserNotFound component is rendered
    await expect(
      page.locator('text="No User found with the given ID"')
    ).toBeVisible();
  });
});
