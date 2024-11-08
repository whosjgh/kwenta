"use client";

import LeftPanel from "@/components/left-panel";
import { useSession } from "next-auth/react";

export default function Expenses() {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>Access Denied</div>;
  }

  return (
    <div className="flex">
      <LeftPanel />
      
      <div className="main-content">
        <h1>Welcome to Kwenta</h1>
        <p>Your intro text goes here.</p>
        <button className="btn">Get Started Now</button>
      </div>
    </div>
  );
}