// import React from "react";
import { Card, CardContent } from "@/ui/card";
import PersonalInfo from "./PersonalInfo";
import EducationAndEmployment from "./EducationAndEmployment";
import Socials from "./Socials";
import Guarantor from "./Guarantor";
import { UserFullDataType } from "@/components/tables/users/users.model";

interface GeneralDetailsProps {
  user: UserFullDataType ; // Define the prop type for user
}
const GeneralDetails: React.FC<GeneralDetailsProps> = ({user}) => {
  return (
    <Card className="p-5">
      <CardContent>
        <PersonalInfo user={user.personalInformation} />
        <EducationAndEmployment user={user.educationEmployment} />
        <Socials user={user.socials} />
        <Guarantor user={user.guarantor} />
      </CardContent>
    </Card>

  );
};

export default GeneralDetails;
