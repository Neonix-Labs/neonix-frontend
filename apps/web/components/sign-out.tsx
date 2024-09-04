"use client";

import { signOutAction } from "@/actions/auth";
import { DropdownMenuItem } from "@repo/ui/dropdown-menu";
import { useState } from "react";

export function SignOut() {
  const [isLoading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    signOutAction();
  };

  return (
    <DropdownMenuItem onClick={handleSignOut}>
      {isLoading ? "Loading..." : "Sign out"}
    </DropdownMenuItem>
  );
}
