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
    <div className="py-5 border-b-2 socials">
      <h1 className="usertitle">Socials</h1>

      <div className="userGrid">
        {/* Twitter */}
        <div>
          <h1 className="userheading">Twitter</h1>
          <p className="userParagrapgh">{user.twitter}</p>
        </div>

        {/* Facebook */}
        <div>
          <h1 className="userheading">Facebook</h1>
          <p className="userParagrapgh">{user.facebook}</p>
        </div>

        {/* LinkedIn */}
        <div>
          <h1 className="userheading">Linkedin</h1>
          <p className="userParagrapgh">{user.linkedin}</p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
