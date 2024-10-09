import { useQuery } from "@tanstack/react-query";
import { UserDataType } from "@/components/tables/users/users.model";
import axios from "axios";

export const useGetAllUsers = () => {
  return useQuery<UserDataType[]>({
    queryKey: ["getAllUsers"],
    queryFn: async () => {
      const response = await axios.get("/src/userData.json");
      return response.data;
    },
  });
};
