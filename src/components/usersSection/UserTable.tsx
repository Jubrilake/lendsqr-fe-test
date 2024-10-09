import { columns } from "../tables/users/column";
import { DataTable } from "../tables/users/data-table";
import { useGetAllUsers } from "@/services/users";

const UserTable = () => {
  const { data: userData, isLoading } = useGetAllUsers();

  console.log(userData);

  return (
    <div className="container mx-auto py-10">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DataTable columns={columns} data={userData || []} />
      )}
    </div>
  );
};

export default UserTable;
