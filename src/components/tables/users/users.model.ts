export type UserDataType = {
  id: string;
  organization: string;
  userName: string;
  email: string;
  phoneNumber: string;
  date: string;
  status: "Pending" | "Active" | "Inactive" | "Blacklisted";
};
