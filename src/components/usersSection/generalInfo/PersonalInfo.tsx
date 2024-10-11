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
    <div className="py-5 border-b-2 personalInfo">
      {/* Title */}
      <h1 className="usertitle">Personal Information</h1>

      <div className="userGrid">
        {/* Fullname */}
        <div>
          <h1 className="userheading">Fullname</h1>
          <p className="userParagrapgh">{user.fullName}</p>
        </div>

        {/* Phone Number */}
        <div>
          <h1 className="userheading">Phone Number</h1>
          <p className="userParagrapgh">{user.phoneNumber}</p>
        </div>

        {/* Email */}
        <div>
          <h1 className="userheading">Email</h1>
          <p className="userParagrapgh">{user.emailAddress}</p>
        </div>

        {/* BVN */}
        <div>
          <h1 className="userheading">BVN</h1>
          <p className="userParagrapgh">{user.bvn}</p>
        </div>

        {/* Gender */}
        <div>
          <h1 className="userheading">Gender</h1>
          <p className="userParagrapgh">{user.gender}</p>
        </div>

        {/* Marital Status */}
        <div>
          <h1 className="userheading">Marital Status</h1>
          <p className="userParagrapgh">{user.maritalStatus}</p>
        </div>

        {/* Children */}
        <div>
          <h1 className="userheading">Children</h1>
          <p className="userParagrapgh">{user.children}</p>
        </div>

        {/* Type of Residence */}
        <div>
          <h1 className="userheading">Type of Residence</h1>
          <p className="userParagrapgh">{user.typeOfResidence}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
