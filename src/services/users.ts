import { useQuery } from "@tanstack/react-query";
import { UserFullDataType } from "@/components/tables/users/users.model";
import axios from "axios";

export const useGetAllUsers = () => {
  return useQuery<UserFullDataType[]>({
    queryKey: ["getAllUsers"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93"
      );
      return response.data;
    },
  });
};
