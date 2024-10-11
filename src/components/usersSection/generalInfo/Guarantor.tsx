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
    <div className="py-5">
      <h1 className="text-md font-semibold text-primary mb-6">Guarantor</h1>
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
          <p className="text-md font-medium text-light_gray">{user.email}</p>
        </div>

        {/* Relationship */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Relationship
          </h1>
          <p className="text-md font-medium text-light_gray">
            {user.relationship}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guarantor;
