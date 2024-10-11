import React from "react";

const Guarantor: React.FC = () => {
  return (
    <div className="py-5">
      {/* Title */}
      <h1 className="text-md font-semibold text-primary mb-6">Guarantor</h1>

      {/* Grid layout for guarantor details */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Fullname */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Fullname</h1>
          <p className="text-md font-medium text-light_gray">John Doe</p>
        </div>

        {/* Phone Number */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Phone Number</h1>
          <p className="text-md font-medium text-light_gray">+234 9876 543 210</p>
        </div>

        {/* Email */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Email</h1>
          <p className="text-md font-medium text-light_gray">john.doe@example.com</p>
        </div>

        {/* Relationship */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Relationship</h1>
          <p className="text-md font-medium text-light_gray">Cousin</p>
        </div>

        {/* Address */}
        <div>
          <h1 className="text-sm font-semibold text-primary">Address</h1>
          <p className="text-md font-medium text-light_gray">123, Maple Street, Lagos</p>
        </div>
      </div>
    </div>
  );
};

export default Guarantor;
