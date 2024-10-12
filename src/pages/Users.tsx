import UsersCard from "@/components/usersSection/UsersCard";
import UserTable from "@/components/usersSection/UserTable";

const Users = () => {
  return (
    <main className="grid grid-cols-[100%] flex-1 -z-10 flex-col lg:ml-60 ml:0 sm:pt-32 gap-4 p-4 md:gap-8 sm:px-14 bg-muted-foreground/5">
      <h1 className="text-primary font-semibold text-2xl">Users</h1>
      <UsersCard />
      <UserTable />
    </main>
  );
};

export default Users;
