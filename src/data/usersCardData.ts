import { activeUsers, alleUsers, usersLoan, usersSaving } from "@/assets";
import { formatNumberWithCommas } from "@/lib/utils";

export interface CardData {
  title: string;
  value: number | string;
  icon: string;
}

export const cardData: CardData[] = [
  {
    title: "Users",
    value: formatNumberWithCommas(2453),
    icon: alleUsers,
  },
  {
    title: "Active Users",
    value: formatNumberWithCommas(2453),
    icon: activeUsers,
  },
  {
    title: "Users With Loans",
    value: formatNumberWithCommas(12453),
    icon: usersLoan,
  },
  {
    title: "Users With Savings",
    value: formatNumberWithCommas(12453),
    icon: usersSaving,
  },
];
