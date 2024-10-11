import React from "react";

const Socials: React.FC = () => {
  return (
    <div className="py-5 border-b-2">
      {/* Title */}
      <h1 className="text-md font-semibold text-primary mb-6">Socials</h1>

      {/* Grid layout for social links */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Twitter */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Twitter</h1>
          <p className="text-md font-medium text-light_gray">@graceeffiom</p>
        </div>

        {/* Facebook */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Facebook</h1>
          <p className="text-md font-medium text-light_gray">facebook.com/grace.effiom</p>
        </div>

        {/* Instagram */}
        <div>
          <h1 className="text-sm font-normal text-light_gray">Instagram</h1>
          <p className="text-md font-medium text-light_gray">@grace_insta</p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
