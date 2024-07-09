"use client";

import { useState, useEffect, useContext } from "react";
import apiClient from "@/libs/api";
import { Spinner } from '@radix-ui/themes';
import { useSession } from "next-auth/react";
import {toast} from 'react-hot-toast';
import { AppContext } from "@/contexts/AppContext";
// This component is used to create Lemon Squeezy Checkout Sessions
// It calls the /api/lemonsqueezy/create-checkout route with the variantId and redirectUrl
const ButtonCheckout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { credits } = useContext(AppContext);

  return (
    <div className="flex">
      <div className="text-3xl md:text-4xl font-extrabold mr-5">credits: </div>
      <Spinner loading={isLoading} >
        <div className="text-3xl md:text-4xl font-extrabold">{credits > 1000 ? 'Unlimited': (credits)}</div>
        {/* <div className="text-3xl md:text-4xl font-extrabold">{(credits)}</div> */}
      </Spinner>
    </div>
  );
};

export default ButtonCheckout;