// UserActionsDropdown.tsx

"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/ui/dropdown-menu";
import { Button } from "@/ui/button";
import { MoreHorizontal, Eye, UserRoundPlus, UserRoundX } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserActionsDropdownProps {
  userId: string;
}

const UserActionsDropdown: React.FC<UserActionsDropdownProps> = ({
  userId,
}) => {
  const navigate = useNavigate();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4 moreIcon" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => navigate(`/users/${userId}`)}>
          <div className="flex gap-3 text-light_gray font-semibold text-sm">
            <Eye className="m-auto h-4 w-4" /> <p>View Details</p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <div className="flex gap-3 text-light_gray font-semibold text-sm">
            <UserRoundX className="m-auto h-4 w-4" /> <p>Blacklist User</p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <div className="flex gap-3 text-light_gray font-semibold text-sm">
            <UserRoundPlus className="m-auto h-4 w-4" /> <p>Activate User</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserActionsDropdown;
