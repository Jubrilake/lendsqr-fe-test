import React from "react";

type User = {
  fullName: string;
  relationship: "Friend" | "Family" | "Colleague" | "Other";
  phoneNumber: string;
  email: string;
};

interface GuarantorProps {
  user: User;
}

const Guarantor: React.FC<GuarantorProps> = ({ user }) => {
  return (
    <div className="py-5 guarantor">
      <h1 className="usertitle">Guarantor</h1>
      <div className="userGrid">
        {/* Fullname */}
        <div>
          <h1 className="userheading">
            Fullname
          </h1>
          <p className="userParagraph">{user.fullName}</p>
        </div>

        {/* Phone Number */}
        <div>
          <h1 className="userheading">
            Phone Number
          </h1>
          <p className="userParagraph">
            {user.phoneNumber}
          </p>
        </div>

        {/* Email */}
        <div>
          <h1 className="userheading">
            Email
          </h1>
          <p className="userParagraph">{user.email}</p>
        </div>

        {/* Relationship */}
        <div>
          <h1 className="userheading">
            Relationship
          </h1>
          <p className="userParagraph">
            {user.relationship}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guarantor;
