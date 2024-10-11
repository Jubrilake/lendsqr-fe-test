import { useParams, useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { Button } from "@/ui/button";
import UserDetailTabs from "@/components/usersSection/UserDetailTabs";

const UserDetail = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-16 bg-muted-foreground/5">
      <button
        onClick={handleBack}
        className="flex items-center space-x-2 w-fit text-light_gray font-medium"
      >
        <MoveLeft className="h-4 w-4" />
        <span className="text-[16px]">Back to users</span>
      </button>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-primary font-semibold text-2xl">User Details</h1>
        <div className="flex gap-x-3 flex-row">
          <Button
            className="w-full md:w-auto"
            style={{ borderColor: "red", background: "none", color: "red" }}
            variant="outline"
          >
            BLACKLIST USER
          </Button>
          <Button
            className="w-full md:w-auto"
            style={{
              borderColor: "#39CDCC",
              background: "none",
              color: "#39CDCC",
            }}
            variant="outline"
          >
            ACTIVATE USER
          </Button>
        </div>
      </div>
      <UserDetailTabs userId={userId} />
    </main>
  );
};

export default UserDetail;
