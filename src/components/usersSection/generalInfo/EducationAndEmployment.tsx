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
    <div className="py-5 border-b-2 edu_Employ">
      {/* Title */}
      <h1 className="usertitle">Education and Employment</h1>

      <div className="userGrid">
        {/* Level of Education */}
        <div>
          <h1 className="userheading">Level of Education</h1>
          <p className="userParagrapgh">{user.levelOfEducation}</p>
        </div>

        {/* Employment Status */}
        <div>
          <h1 className="userheading">Employment Status</h1>
          <p className="userParagrapgh">{user.employmentStatus}</p>
        </div>

        {/* Sector of Employment */}
        <div>
          <h1 className="userheading">Sector of Employment</h1>
          <p className="userParagrapgh">{user.sectorOfEmployment}</p>
        </div>

        {/* Duration of Employment */}
        <div>
          <h1 className="userheading">Duration of Employment</h1>
          <p className="userParagrapgh">{user.durationOfEmployment}</p>
        </div>
        {/* Office Email */}
        <div>
          <h1 className="userheading">Office Email</h1>
          <p className="userParagrapgh">{user.officeEmail}</p>
        </div>

        {/* Monthly Income */}
        <div>
          <h1 className="userheading">Monthly Income</h1>
          <p className="userParagrapgh">{user.monthlyIncomeRange}</p>
        </div>
        {/* Loan Repayment */}
        <div>
          <h1 className="userheading">Loan Repayent</h1>
          <p className="userParagrapgh">{user.loanRepayment}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationAndEmployment;
