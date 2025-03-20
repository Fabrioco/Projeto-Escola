"use client";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import React from "react";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, fetchUser } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
      }
      fetchUser();
    }
    console.log(user);
  }, [user, router, fetchUser]);
  return user ? children : null;
};

export default ProtectedRoute;
