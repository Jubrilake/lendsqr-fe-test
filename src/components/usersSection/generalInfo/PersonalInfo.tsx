import React from "react";

const PersonalInfo: React.FC = () => {
  return (
    <div className="py-5 border-b-2">
      {/* Title */}
      <h1 className="text-md font-semibold text-primary mb-6">
        Personal Information
      </h1>

      {/* Grid layout for personal details */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Fullname */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Fullname</h1>
          <p className="text-md font-medium text-light_gray">Grace Effiom</p>
        </div>

        {/* Phone Number */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Phone Number</h1>
          <p className="text-md font-medium text-light_gray">
            +234 1234 567 890
          </p>
        </div>

        {/* Email */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Email</h1>
          <p className="text-md font-medium text-light_gray">
        effiom@example.com
          </p>
        </div>

        {/* BVN */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">BVN</h1>
          <p className="text-md font-medium text-light_gray">12345678901</p>
        </div>

        {/* Gender */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Gender</h1>
          <p className="text-md font-medium text-light_gray">Female</p>
        </div>

        {/* Marital Status */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">
            Marital Status
          </h1>
          <p className="text-md font-medium text-light_gray">Married</p>
        </div>

        {/* Children */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Children</h1>
          <p className="text-md font-medium text-light_gray">2</p>
        </div>

        {/* Type of Residence */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">
            Type of Residence
          </h1>
          <p className="text-md font-medium text-light_gray">Owned</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
