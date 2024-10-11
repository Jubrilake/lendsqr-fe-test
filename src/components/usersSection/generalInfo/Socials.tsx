import React from "react";

type User = {
  facebook: string;
  twitter: string;
  linkedin: string;
};

interface SocialsProps {
  user: User;
}

const Socials: React.FC<SocialsProps> = ({ user }) => {
  return (
    <div className="py-5 border-b-2">
      <h1 className="text-md font-semibold text-primary mb-6">Socials</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Twitter */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Twitter
          </h1>
          <p className="text-md font-medium text-light_gray">{user.twitter}</p>
        </div>

        {/* Facebook */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Facebook
          </h1>
          <p className="text-md font-medium text-light_gray">{user.facebook}</p>
        </div>

        {/* LinkedIn */}
        <div>
          <h1 className="text-sm font-normal text-light_gray uppercase">
            Linkedin
          </h1>
          <p className="text-md font-medium text-light_gray">{user.linkedin}</p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
