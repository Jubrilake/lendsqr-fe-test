Project: User Management App

1. Overview
   This project is an assessment to build a user manangement app consisting of four pages: Login, Dashboard, User Page, and User Details Page.
   The app pulls data from a hosted API using Tansack queries to retrieve 500 user records. The app is built with Vite, TypeScript,
   TailwindCSS, ShadCN, SCSS, and Playwright for testing. The pages are fully mobile responsive.

2. Features
   Login Page: A form where users authenticate.
   User Page: Displays a list of users fetched from the hosted API and allows navigation to individual user details.
   User Details Page: Displays detailed information about a selected user.

3. Technologies Used
   Vite: Fast development server and build tool.
   TypeScript: Strongly typed language for better developer experience.
   TailwindCSS: Utility-first CSS framework for rapid UI development.
   ShadCN: Component library for UI elements.
   SCSS: SASS syntax for styling with nesting, variables, and more.
   Playwright: End-to-end testing framework for automated UI tests.
   Tansack Query: Used for querying the hosted API to fetch user data.

Setup Instructions

1. Clone the Repository:
   git clone <https://github.com/Jubrilake/lendsqr-fe-test.git>

2. Install Dependencies:
   Make sure you have Node.js and npm/yarn installed. Then run: npm install

3. Run the Development Server:
   npm run dev

This will start the development server at http://localhost:5173.

Pages

1. Login Page
   The login page is the entry point to the app. Users need to enter valid credentials to access the dashboard.

Route: /login
Features:
User authentication form.
Validation for input fields.
Basic error handling for incorrect login credentials.

2. Dashboard
   Once logged in, the user is redirected to the dashboard, which displays a list of users fetched from the hosted API.

Route: /dashboard
Features:
Displays a list of users fetched using Tansack queries.
Links to each user’s details page.
Basic sorting and filtering options (if implemented).

3.  User Page
    This page lists all users, allowing you to view or search for a specific user.

Route: /users
Features:
A list of users fetched from the API.
Pagination and filtering options using Tansack queries.
A clickable link to navigate to the user details page.

4. User Details Page
   This page displays detailed information about a selected user.

Route: /user/:id
Features:
Displays user details retrieved from the API.
Fetches user data using Tansack queries.
Shows relevant information about the selected user.

The app uses Tansack queries to interact with the hosted API, allowing efficient querying and filtering of user records. Here’s an example of how a query might be structured:

import { createQuery } from 'tansack-query';

const query = createQuery({
filter: { name: 'John Doe' },
sort: { field: 'created_at', direction: 'desc' },
});

const fetchUsers = async () => {
const response = await apiClient.get('/users', { params: query });
return response.data;
};

This approach allows for efficient querying, filtering, and sorting of user data from the backend API.

4. Mobile Responsiveness
   The app is fully responsive using TailwindCSS's utility-first classes. All pages are designed to adapt to different screen sizes, making the app mobile-friendly.

5. Testing
   Playwright is used for end-to-end testing to ensure the functionality of the app. You can run the tests with the following command:
