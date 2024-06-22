"use client";

import { useState, useEffect } from "react";
import apiClient from "@/libs/api";
import { Spinner } from '@radix-ui/themes';
import { useSession } from "next-auth/react";
import {toast} from 'react-hot-toast';
// This component is used to create Lemon Squeezy Checkout Sessions
// It calls the /api/lemonsqueezy/create-checkout route with the variantId and redirectUrl
const ButtonCheckout = () => {
  const [credits, setCredits] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const session = useSession();

  const getCredits = async () => {
    if (!session?.data) {
      // 未登陆，跳转登陆
      console.log('1111');
      toast.error('please login first');
      return;
    }
    setIsLoading(true);

    try {
      const ret: any = await apiClient.post(
        "/get-credits",
      );
      setCredits(ret.data);
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getCredits();
  }, []);

  return (
    <div className="flex">
      <div className="text-3xl md:text-4xl font-extrabold mr-5">credits: </div>
      <Spinner loading={isLoading} >
        <div className="text-3xl md:text-4xl font-extrabold">{credits}</div>
      </Spinner>
    </div>
  );
};

export default ButtonCheckout;