"use client";
import React from "react";
import LandingPage from "./landingpage/page";
import { useRouter } from "next/navigation";

const App: React.FC = () => {
  const router = useRouter(); 
  router.push("/landingpage"); 
  return <></>;
};

export default App;
