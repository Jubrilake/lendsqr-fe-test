import React from "react";

type User = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  bvn: string;
  gender: "Male" | "Female" | "Non-binary" | "Prefer not to say";
  maritalStatus: "Single" | "Married" | "Divorced" | "Widowed";
  children: number;
  typeOfResidence: "Apartment" | "House" | "Condo" | "Shared" | "Dormitory";
};

interface PersonalInfoProps {
  user: User;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ user }) => {
  return (
    <div className="py-5 border-b-2">
      {/* Title */}
      <h1 className="text-md font-semibold text-primary mb-6">
        Personal Information
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Fullname */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Fullname
          </h1>
          <p className="text-md font-medium text-light_gray">{user.fullName}</p>
        </div>

        {/* Phone Number */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Phone Number
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.phoneNumber}
          </p>
        </div>

        {/* Email */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Email
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.emailAddress}
          </p>
        </div>

        {/* BVN */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">BVN</h1>
          <p className="text-md font-medium text-light_gray">{user.bvn}</p>
        </div>

        {/* Gender */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Gender
          </h1>
          <p className="text-md font-medium text-light_gray">{user.gender}</p>
        </div>

        {/* Marital Status */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Marital Status
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.maritalStatus}
          </p>
        </div>

        {/* Children */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Children
          </h1>
          <p className="text-md font-medium text-light_gray">{user.children}</p>
        </div>

        {/* Type of Residence */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Type of Residence
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.typeOfResidence}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
