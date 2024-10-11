import React from "react";

type User = {
  levelOfEducation: "High School" | "Associate" | "Bachelor" | "Master" | "PhD";
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

interface PersonalInfoProps {
  user: User; // Define the prop type for user
}

const EducationAndEmployment: React.FC<PersonalInfoProps> = ({ user }) => {
  return (
    <div className="py-5 border-b-2">
      {/* Title */}
      <h1 className="text-md font-semibold text-primary mb-6">
        Education and Employment
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Level of Education */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Level of Education
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.levelOfEducation}
          </p>
        </div>

        {/* Employment Status */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Employment Status
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.employmentStatus}
          </p>
        </div>

        {/* Sector of Employment */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Sector of Employment
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.sectorOfEmployment}
          </p>
        </div>

        {/* Duration of Employment */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Duration of Employment
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.durationOfEmployment}
          </p>
        </div>
        {/* Office Email */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Office Email
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.officeEmail}
          </p>
        </div>

        {/* Monthly Income */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Monthly Income
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.monthlyIncomeRange}
          </p>
        </div>
        {/* Loan Repayment */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Loan Repayent
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.loanRepayment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationAndEmployment;
