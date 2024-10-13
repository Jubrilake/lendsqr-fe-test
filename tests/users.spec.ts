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
