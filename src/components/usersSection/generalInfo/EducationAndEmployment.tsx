import React from "react";

const EducationAndEmployment: React.FC = () => {
  return (
    <div className="py-5 border-b-2">
      {/* Title */}
      <h1 className="text-md font-semibold text-primary mb-6">
        Education and Employment
      </h1>

      {/* Grid layout for education and employment details */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Level of Education */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">
            Level of Education
          </h1>
          <p className="text-md font-medium text-light_gray">B.Sc</p>
        </div>

        {/* Employment Status */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">
            Employment Status
          </h1>
          <p className="text-md font-medium text-light_gray">Employed</p>
        </div>

        {/* Sector of Employment */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">
            Sector of Employment
          </h1>
          <p className="text-md font-medium text-light_gray">Fintech</p>
        </div>

        {/* Duration of Employment */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">
            Duration of Employment
          </h1>
          <p className="text-md font-medium text-light_gray">2 years</p>
        </div>
        {/* Office Email */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Office Email</h1>
          <p className="text-md font-medium text-light_gray">
            grace@techcompany.com
          </p>
        </div>

        {/* Monthly Income */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">
            Monthly Income
          </h1>
          <p className="text-md font-medium text-light_gray">
            N150,000 - N200,000
          </p>
        </div>
        {/* Loan Repayment */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Loan Repayent</h1>
          <p className="text-md font-medium text-light_gray">
            40,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationAndEmployment;
