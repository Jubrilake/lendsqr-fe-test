// // usersTable.spec.ts
// import { test, expect } from "@playwright/test";

// test.describe("Users Table", () => {
//   test.beforeEach(async ({ page }) => {
//     // Navigate to the page where the DataTable is rendered
//     await page.goto("/users"); // Adjust the URL based on your app's routing
//     await page.waitForLoadState("networkidle"); // Wait for network requests to settle
//   });

//   test("renders the table headers correctly", async ({ page }) => {
//     // Check if the headers are rendered correctly
//     const headers = [
//       "ORGANIZATION",
//       "USERNAME",
//       "EMAIL",
//       "PHONE NUMBER",
//       "DATE",
//       "STATUS",
//     ];

//     for (const header of headers) {
//       // Target the h1 element within the table header
//       const headerLocator = page.locator(`h1:text("${header}")`);
//       await expect(headerLocator).toBeVisible({
//         timeout: 60000,
//       }); // Wait up to 60 seconds for each header
//     }
//   });

//   test("sorts data when clicking column headers", async ({ page }) => {
//     // Target the ORGANIZATION column header specifically inside the table
//     const orgHeader = page.locator('th:has(h1:text("ORGANIZATION"))');

//     // Click on the "ORGANIZATION" column header to sort ascending
//     await orgHeader.click();

//     // Click again to reverse the sorting
//     await orgHeader.click();
//   });
//   // test("displays action dropdown and options", async ({ page }) => {
//   //   // Locate the button that contains the "MoreHorizontal" icon in the first row (adjust selector as needed)
//   //   const actionButton = page.locator(
//   //     'tr:nth-of-type(1) button:has(svg[aria-hidden="true"])' // Targets button containing the icon
//   //   );

//   //   // Ensure the action button is visible
//   //   await expect(actionButton).toBeVisible();

//   //   // Click the icon button to open the dropdown menu
//   //   await actionButton.click();

//   //   // Check if the dropdown menu is visible after clicking the action button
//   //   const dropdownMenu = page.locator('[role="menu"]');
//   //   await expect(dropdownMenu).toBeVisible(); // Assert that the dropdown is visible

//   //   // Verify the presence of specific items within the dropdown (View Details, Blacklist User, Activate User)
//   //   const viewDetails = page.locator('[role="menuitem"]', {
//   //     hasText: "View Details",
//   //   });
//   //   const blacklistUser = page.locator('[role="menuitem"]', {
//   //     hasText: "Blacklist User",
//   //   });
//   //   const activateUser = page.locator('[role="menuitem"]', {
//   //     hasText: "Activate User",
//   //   });

//   //   // Check that each item in the dropdown is visible
//   //   await expect(viewDetails).toBeVisible();
//   //   await expect(blacklistUser).toBeVisible();
//   //   await expect(activateUser).toBeVisible();
//   // });
//   test("renders dropdown menu and handles interactions", async ({ page }) => {
//     // Check if the dropdown trigger button is rendered
//     const triggerButton = page.locator(".moreIcon").first();
//     await expect(triggerButton).toBeVisible();

//     // Open the dropdown menu
//     await triggerButton.click();

//   // Check if all menu items are present
//   const viewDetailsItem = page.locator('p:has-text("View Details")');
//   const blacklistUserItem = page.locator('p:has-text("Blacklist User")');
//   const activateUserItem = page.locator('p:has-text("Activate User")');

//     await expect(viewDetailsItem).toBeVisible();
//     await expect(blacklistUserItem).toBeVisible();
//     await expect(activateUserItem).toBeVisible();

//     // Test navigation when clicking "View Details"
//     await viewDetailsItem.click();
//     await expect(page).toHaveURL("/users/123");

//     // Go back to the initial page
//     await page.goBack();

//     // Reopen the dropdown
//     await triggerButton.click();

//     // Test that other menu items are clickable
//     await blacklistUserItem.click();
//     await activateUserItem.click();
//   });

//   // Additional test for verifying row data rendering correctly
//   test("displays user data correctly in each row", async ({ page }) => {
//     const firstRow = page.locator('[role="rowgroup"] >> nth=0'); // First row in the table
//     await expect(firstRow.locator("text=Company A")).toBeVisible();
//     await expect(firstRow.locator("text=john_doe")).toBeVisible();
//     await expect(firstRow.locator("text=john@example.com")).toBeVisible();
//     await expect(firstRow.locator("text=+1234567890")).toBeVisible();
//     await expect(firstRow.locator("text=2023-09-10")).toBeVisible();
//     await expect(firstRow.locator("text=Active")).toBeVisible();
//   });
// });

import { test, expect } from "@playwright/test";

const mockUsers = [
  {
    id: "6708e8832a8f2129866e0d3e",
    organization: "Kegular",
    userName: "ChristianSims",
    email: "christiansims@kegular.com",
    phoneNumber: "+234 (970) 538-2384",
    date: "2022-04-13T01:46:49-01:00",
    status: "Inactive",
    personalInformation: {
      fullName: "Cherry Kane",
      phoneNumber: "+234 (902) 543-3600",
      emailAddress: "cherrykane@kegular.com",
      bvn: 99999999999,
      gender: "Female",
      maritalStatus: "Married",
      children: 5,
      typeOfResidence: "Apartment",
    },
    educationEmployment: {
      levelOfEducation: "Associate",
      employmentStatus: "Student",
      sectorOfEmployment: "Retail",
      durationOfEmployment: "1 years",
      officeEmail: "cherrykane@kegular.com",
      monthlyIncomeRange: "₦600,001 - ₦800,000",
      loanRepayment: "₦150,000",
    },
    bankDetails: {
      bankName: "Eternis Bank",
      accountBalance: "₦1000000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/GoodwinHughes",
      twitter: "https://twitter.com/VangOneill",
      linkedin: "https://linkedin.com/in/CombsLove",
    },
    guarantor: {
      fullName: "Cash Kennedy",
      relationship: "Friend",
      phoneNumber: "+234 (955) 422-2916",
      email: "cashkennedy@eternis.com",
    },
  },
  {
    id: "6708e883b0dc0219119af347",
    organization: "Crustatia",
    userName: "LeonaCantrell",
    email: "leonacantrell@crustatia.com",
    phoneNumber: "+234 (875) 566-3826",
    date: "2020-05-14T06:50:14-01:00",
    status: "Active",
    personalInformation: {
      fullName: "Harper Bryant",
      phoneNumber: "+234 (903) 418-3609",
      emailAddress: "harperbryant@crustatia.com",
      bvn: 10000000000,
      gender: "Non-binary",
      maritalStatus: "Divorced",
      children: 0,
      typeOfResidence: "Condo",
    },
    educationEmployment: {
      levelOfEducation: "High School",
      employmentStatus: "Student",
      sectorOfEmployment: "Retail",
      durationOfEmployment: "30 years",
      officeEmail: "harperbryant@crustatia.com",
      monthlyIncomeRange: "₦400,001 - ₦600,000",
      loanRepayment: "₦100,000",
    },
    bankDetails: {
      bankName: "Magnina Bank",
      accountBalance: "₦1000000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/AbbyGilbert",
      twitter: "https://twitter.com/FranklinWolfe",
      linkedin: "https://linkedin.com/in/SpenceWagner",
    },
    guarantor: {
      fullName: "Dunlap Parrish",
      relationship: "Friend",
      phoneNumber: "+234 (971) 487-2830",
      email: "dunlapparrish@magnina.com",
    },
  },
];

test.describe("Users Component", () => {
  test.beforeEach(async ({ page }) => {
    // Mock the API call to return our mock data
    await page.route(
      "https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93",
      async (route) => {
        await route.fulfill({ json: mockUsers });
      }
    );

    // Navigate to the Users page
    await page.goto("/users");
  });

  test("should render the Users component correctly", async ({ page }) => {
    // Check if the main title is present
    await expect(page.locator("h2")).toHaveText("Users");

    // Check if the UsersCard component is rendered
    await expect(page.locator("data-testid=userdata-summary")).toBeVisible();

    // Check if all four cards are present
    // const cards = page.locator(".card");
    // await expect(cards).toHaveCount(4);

    // Check the content of each card
    const cardData = [
      { title: "Users", value: "2,453" },
      { title: "Active Users", value: "2,453" },
      { title: "Users With Loans", value: "12,453" },
      { title: "Users With Savings", value: "12,453" },
    ];

    for (let i = 0; i < cardData.length; i++) {
      const card = page.locator(`data-testid=summary-card-${i}`);
      await expect(card.locator(`data-testid=card-title-${i}`)).toHaveText(
        cardData[i].title
      );
      await expect(card.locator(`data-testid=card-value-${i}`)).toHaveText(
        cardData[i].value
      );
    }

    // Check if the UserTable component is rendered
    await expect(page.locator(".container")).toBeVisible();
  });

  test("should display loading state initially", async ({ page }) => {
    // Intercept the API call and delay the response
    await page.route(
      "https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93",
      async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await route.fulfill({ json: mockUsers });
      }
    );

    // Reload the page to trigger the loading state
    await page.reload();

    // Check if the loading state is displayed
    await expect(page.locator("text=Loading...")).toBeVisible();

    // Wait for the table to be visible
    await expect(page.locator("table")).toBeVisible();
  });

  test("should render the user table with correct data", async ({ page }) => {
    // Wait for the table to be visible
    await expect(page.locator("table")).toBeVisible();

    // Check if the table headers are correct
    const headers = [
      "Organization",
      "Username",
      "Email",
      "Phone Number",
      "Date",
      "Status",
    ];
    for (const header of headers) {
      await expect(page.locator("th", { hasText: header })).toBeVisible();
    }

    // Check if the correct number of rows are displayed
    const rows = page.locator("tbody tr");
    await expect(rows).toHaveCount(mockUsers.length);

    // Check the content of the first row
    const firstRow = rows.first();
    await expect(firstRow.locator("td").nth(0)).toHaveText(
      mockUsers[0].organization
    );
    await expect(firstRow.locator("td").nth(1)).toHaveText(
      mockUsers[0].userName
    );
    await expect(firstRow.locator("td").nth(2)).toHaveText(mockUsers[0].email);
    await expect(firstRow.locator("td").nth(3)).toHaveText(
      mockUsers[0].phoneNumber
    );
    await expect(firstRow.locator("td").nth(4)).toContainText("Apr 13, 2022");
    await expect(firstRow.locator("td").nth(5)).toHaveText(mockUsers[0].status);
  });

  test("should handle empty state", async ({ page }) => {
    // Mock the API call to return an empty array
    await page.route(
      "https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93",
      async (route) => {
        await route.fulfill({ json: [] });
      }
    );

    // Reload the page to trigger the empty state
    await page.reload();

    // Check if the empty state message is displayed
    await expect(page.locator("text=No results.")).toBeVisible();
  });
});
