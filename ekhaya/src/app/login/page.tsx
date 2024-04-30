"use client";
import React, { useState } from "react";
import Login from "@/component/login/page";
import {RegisterProvider} from "@/provider/register";
import {AuthProvider} from "@/provider/auth";

const loginpages: React.FC = () => {
  return(
    <AuthProvider>
    <RegisterProvider>
  <Login>

  </Login>
  </RegisterProvider>
  </AuthProvider>
  ) 
};

export default loginpages;
