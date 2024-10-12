import { ActiveUsers, AlleUsers, UsersLoan, UsersSaving } from "@/assets";
import { formatNumberWithCommas } from "@/lib/utils";

// export interface CardData {
//   title: string;
//   value: number | string;
//   icon: string;
// }

export const cardData = [
  {
    title: "Users",
    value: formatNumberWithCommas(2453),
    icon: AlleUsers,
  },
  {
    title: "Active Users",
    value: formatNumberWithCommas(2453),
    icon: ActiveUsers,
  },
  {
    title: "Users With Loans",
    value: formatNumberWithCommas(12453),
    icon: UsersLoan,
  },
  {
    title: "Users With Savings",
    value: formatNumberWithCommas(12453),
    icon: UsersSaving,
  },
];
