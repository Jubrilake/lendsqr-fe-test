import { useQuery } from "@tanstack/react-query";
import { UserFullDataType } from "@/components/tables/users/users.model";
import axios from "axios";

export const useGetAllUsers = () => {
  return useQuery<UserFullDataType[]>({
    queryKey: ["getAllUsers"],
    queryFn: async () => {
      const response = await axios.get("/src/userData.json");
      return response.data;
    },
  });
};
