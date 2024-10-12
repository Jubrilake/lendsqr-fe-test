import {
  BriefCase,
  AuditLogs,
  Dashboard,
  Decisions,
  FeesAndCharges,
  Karma,
  LoanRequest,
  Loans,
  Preferences,
  Reports,
  SavingProducts,
  Savings,
  ServiceAccount,
  Services,
  Settlement,
  Transaction,
  Users,
  WhiteList,
  Guarantors,
  FeesAndPricing,
} from "@/assets";
// import { User } from "lucide-react";

// export interface SidebarLink {
//   to: string;
//   label: string;
//   icon: any;
// }

// export interface SidebarCategory {
//   title?: string;
//   links: SidebarLink[];
// }

const sidebarLinks = [
  {
    links: [{ to: "/", label: "Dashboard", icon: Dashboard  }],
  },
  {
    title: "Customer",
    links: [
      { to: "/users", label: "Users", icon: Users },
      { to: "/guarantors", label: "Guarantors", icon: Guarantors },
      { to: "/loans", label: "Loans", icon: Loans },
      { to: "/decision-models", label: "Decision Models", icon: Decisions },
      { to: "/savings", label: "Savings", icon: Savings },
      { to: "/loan-request", label: "Loan Request", icon: LoanRequest },
      { to: "/whitelist", label: "Whitelist", icon: WhiteList },
      { to: "/karma", label: "Karma", icon: Karma },
    ],
  },
  {
    title: "Business",
    links: [
      { to: "/organization", label: "Organization", icon: BriefCase },
      { to: "/loan-products", label: "Loan Products", icon: LoanRequest },
      {
        to: "/savings-products",
        label: "Savings Products",
        icon: SavingProducts,
      },
      {
        to: "/fees-and-charges",
        label: "Fees and Charges",
        icon: FeesAndCharges,
      },
      { to: "/transactions", label: "Transactions", icon: Transaction },
      { to: "/services", label: "Services", icon: Services },
      {
        to: "/service-account",
        label: "Service Account",
        icon: ServiceAccount,
      },
      { to: "/settlements", label: "Settlements", icon: Settlement },
      { to: "/reports", label: "Reports", icon: Reports },
    ],
  },
  {
    title: "Settings",
    links: [
      { to: "/preferences", label: "Preferences", icon: Preferences },
      {
        to: "/fees-and-pricing",
        label: "Fees and Pricing",
        icon: FeesAndPricing,
      },
      { to: "/audit-logs", label: "Audit Logs", icon: AuditLogs },
    ],
  },
];

export default sidebarLinks;
