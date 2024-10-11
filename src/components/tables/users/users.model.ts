export type UserDataType = {
  id: string;
  organization: string;
  userName: string;
  email: string;
  phoneNumber: string;
  date: string;
  status: "Pending" | "Active" | "Inactive" | "Blacklisted";
};

export type UserFullDataType = {
  id: string;
  organization: string;
  userName: string;
  email: string;
  phoneNumber: string;
  date: string;
  status: "Pending" | "Active" | "Inactive" | "Blacklisted";
  personalInformation: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    bvn: string;
    gender: "Male" | "Female" | "Non-binary" | "Prefer not to say";
    maritalStatus: "Single" | "Married" | "Divorced" | "Widowed";
    children: number;
    typeOfResidence: "Apartment" | "House" | "Condo" | "Shared" | "Dormitory";
  };
  educationEmployment: {
    levelOfEducation:
      | "High School"
      | "Associate"
      | "Bachelor"
      | "Master"
      | "PhD";
    employmentStatus: "Employed" | "Unemployed" | "Self-employed" | "Student";
    sectorOfEmployment:
      | "Technology"
      | "Finance"
      | "Healthcare"
      | "Education"
      | "Retail";
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncomeRange: string;
    loanRepayment: string;
  };
  bankDetails: {
    bankName: string;
    accountBalance: string; // You can use 'number' if you want to represent it as a numerical value
    accountNumber: string; // Use 'string' to accommodate leading zeros or specific formatting
  };
  socials: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  guarantor: {
    fullName: string;
    relationship: "Friend" | "Family" | "Colleague" | "Other";
    phoneNumber: string;
    email: string;
  };
};


