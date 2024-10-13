import { useState, MouseEventHandler, ReactNode } from "react";
import { Card, CardContent } from "@/ui/card";
import { cn } from "@/lib/utils";
import { Avatar, SolidStar, StrokeStar } from "@/assets";
import { Button } from "@/ui/button";
import GeneralDetails from "./generalInfo/GeneralDetails";

import { useGetAllUsers } from "@/services/users";
import { UserFullDataType } from "@/components/tables/users/users.model";
import { formatNumberWithCommas } from "@/lib/utils";
import Preloader from "../shared/PreLoader";

interface UserDetailTabsProps {
  userId?: string;
}

type SinglUserDetailsTabsType = {
  tab: number;
  name: string;
};

const UserDetailTabs: React.FC<UserDetailTabsProps> = ({ userId }) => {
  const [tab, setTab] = useState(1);
  const { data: userData, isLoading } = useGetAllUsers();

  // Function to find the user by ID
  const findUserById = (id: string): UserFullDataType | undefined => {
    return userData?.find((user: UserFullDataType) => user.id === id);
  };

  const user = userId ? findUserById(userId) : undefined;

  if (isLoading) {
    return <Preloader />;
  }

  if (!user) {
    return <div>No User found with the given ID</div>;
  }

  const SinglUserDetailsTabs: Array<SinglUserDetailsTabsType> = [
    { tab: 1, name: "General Details" },
    { tab: 2, name: "Documents" },
    { tab: 3, name: "Bank Details" },
    { tab: 4, name: "Loans" },
    { tab: 5, name: "Savings" },
    { tab: 6, name: "App and System" },
  ];

  const toggleTab =
    (tab: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      setTab(tab);
    };

  const TabComponent = (): ReactNode => {
    switch (tab) {
      case 1:
        return <GeneralDetails user={user} />;
      case 2:
        return <h1>Documents</h1>;
      case 3:
        return <h1>Bank Details</h1>;
      case 4:
        return <h1>Loans</h1>;
      case 5:
        return <h1>Savings</h1>;
      case 6:
        return <h1>App and System</h1>;
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="px-5 pt-5 pb-0 border-0">
        <CardContent>
          <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-32">
            {/* First Section - Avatar and User Info */}
            <div className="flex lg:flex-row flex-col items-center gap-x-5 border-b-2 lg:border-b-0 lg:py-0 py-4">
              {/* Increase avatar size here */}
              <Avatar />
              <div>
                <h1 className="text-primary font-semibold text-center lg:text-start text-xl leading-10">
                  {user.personalInformation.fullName}
                </h1>
                <p className="text-light_gray text-sm">{userId}</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-x-8 w-full border-b-2 lg:border-b-0 lg:py-0 py-4">
              <div className="flex flex-col justify-center items-center lg:items-start lg:px-6 lg:border-l-2 lg:border-r-2 mb-4 lg:mb-0 w-full lg:w-auto">
                <h1 className="text-primary text-md font-semibold">
                  User's Tier
                </h1>
                <div className="flex gap-x-1">
                  <SolidStar />
                  <StrokeStar />
                  <StrokeStar />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-auto">
                <h1 className="text-xl font-semibold text-primary leading-10 flex items-center">
                  ₦
                  {formatNumberWithCommas(
                    user.bankDetails.accountBalance.slice(1) || "0"
                  )}
                </h1>
                <p className="text-xs font-normal text-primary">
                  {user.bankDetails.accountNumber}/{user.bankDetails.bankName}
                </p>
              </div>
            </div>
          </div>
        </CardContent>

        <div className="flex overflow-x-auto justify-between pt-6">
          {SinglUserDetailsTabs.map((data) => (
            <Button
              key={data.tab}
              onClick={toggleTab(data.tab)}
              className={cn(
                "rounded-none px-5 py-2 border-b-[3px] bg-transparent border-transparent hover:bg-transparent font-normal text-[16px] text-black transition-all ease-in-out delay-150",
                {
                  "border-b-[3px] border-secondary text-secondary":
                    tab === data.tab,
                  "hover:border-b-[3px] hover:border-secondary hover:text-secondary":
                    tab !== data.tab,
                }
              )}
            >
              {data.name}
            </Button>
          ))}
        </div>
      </Card>

      <section>{TabComponent()}</section>
    </>
  );
};

export default UserDetailTabs;
