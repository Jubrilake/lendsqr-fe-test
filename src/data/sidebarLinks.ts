import {
  briefCase,
  auditLogs,
  dashboard,
  decisions,
  feesAndCharges,
  karma,
  loanRequest,
  loans,
  preferences,
  reports,
  savingProducts,
  savings,
  serviceAccount,
  services,
  settlement,
  transaction,
  users,
  whiteList,
  guarantors,
  feesAndPricing,
} from "@/assets";

export interface SidebarLink {
  to: string;
  label: string;
  icon: string; // Use ComponentType for the icon
  badge?: number; // Optional badge number
}

export interface SidebarCategory {
  title?: string; // Optional title for categories
  links: SidebarLink[];
}

const sidebarLinks: SidebarCategory[] = [
  {
    links: [
      { to: "/", label: "Dashboard", icon: dashboard }, // Dashboard without a category title
    ],
  },
  {
    title: "Customer",
    links: [
      { to: "/users", label: "Users", icon: users },
      { to: "/guarantors", label: "Guarantors", icon: guarantors },
      { to: "/loans", label: "Loans", icon: loans },
      { to: "/decision-models", label: "Decision Models", icon: decisions },
      { to: "/savings", label: "Savings", icon: savings },
      { to: "/loan-request", label: "Loan Request", icon: loanRequest },
      { to: "/whitelist", label: "Whitelist", icon: whiteList },
      { to: "/karma", label: "Karma", icon: karma },
    ],
  },
  {
    title: "Business",
    links: [
      { to: "/organization", label: "Organization", icon: briefCase },
      { to: "/loan-products", label: "Loan Products", icon: loanRequest },
      {
        to: "/savings-products",
        label: "Savings Products",
        icon: savingProducts,
      },
      {
        to: "/fees-and-charges",
        label: "Fees and Charges",
        icon: feesAndCharges,
      },
      { to: "/transactions", label: "Transactions", icon: transaction },
      { to: "/services", label: "Services", icon: services },
      {
        to: "/service-account",
        label: "Service Account",
        icon: serviceAccount,
      },
      { to: "/settlements", label: "Settlements", icon: settlement },
      { to: "/reports", label: "Reports", icon: reports },
    ],
  },
  {
    title: "Settings",
    links: [
      { to: "/preferences", label: "Preferences", icon: preferences },
      {
        to: "/fees-and-pricing",
        label: "Fees and Pricing",
        icon: feesAndPricing,
      },
      { to: "/audit-logs", label: "Audit Logs", icon: auditLogs },
    ],
  },
];

export default sidebarLinks;
