"use client";

import {
  BadgeCheck,
  ChevronsUpDown,
  CreditCard,
  LogOut,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function NavUser() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    profileImage: string;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/users");
        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
        toast("Error fetching user data.");
      }
    }
    fetchUser();
  }, [user]);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/login");
        toast("Logged out successfully");
      } else {
        console.error("Failed to logout");
        toast("Failed to logout. Please try again.");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-1 cursor-pointer">
          <Avatar className="h-8 w-8 rounded-full">
            <AvatarImage src={user?.profileImage} alt="Rahul Verma" />
            <AvatarFallback className="rounded-lg">RV</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{user?.name}</span>
            {/* <span className="truncate text-xs">{user.email}</span> */}
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side="bottom"
        align="start"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user?.profileImage} alt="Rahul Verma" />
              <AvatarFallback className="rounded-lg">{user?.name}</AvatarFallback>
            </Avatar>
            <Link
              href="/profile"
              className="grid flex-1 text-left text-sm leading-tight"
            >
              <span className="truncate font-semibold">{user?.name}</span>
              <span className="truncate text-xs">
                {user?.email}
              </span>
            </Link>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem>
              <BadgeCheck />
              Account
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <CreditCard />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
