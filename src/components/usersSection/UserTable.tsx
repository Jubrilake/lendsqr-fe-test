import { columns } from "../tables/users/column";
import { DataTable } from "../tables/users/data-table";
import { useGetAllUsers } from "@/services/users";
import { UserDataType } from "@/components/tables/users/users.model";
import Preloader from "../shared/PreLoader";

const UserTable = () => {
  const { data: userData, isLoading } = useGetAllUsers();

  const filteredUserData =
    userData?.map((user: UserDataType) => ({
      id: user.id,
      organization: user.organization,
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      date: user.date,
      status: user.status,
    })) || [];

  return (
    <div className="container mx-auto py-10">
      {isLoading ? (
        <Preloader />
      ) : (
        <DataTable columns={columns} data={filteredUserData} />
      )}
    </div>
  );
};

export default UserTable;
