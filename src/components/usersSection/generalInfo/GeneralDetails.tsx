// import React from "react";
import { Card, CardContent } from "@/ui/card";
import PersonalInfo from "./PersonalInfo";
import EducationAndEmployment from "./EducationAndEmployment";
import Socials from "./Socials";
import Guarantor from "./Guarantor";
const GeneralDetails = () => {
  return (
    <Card className="p-5">
      <CardContent>
        <PersonalInfo />
        <EducationAndEmployment />
        <Socials />
        <Guarantor />
      </CardContent>
    </Card>
  );
};

export default GeneralDetails;
