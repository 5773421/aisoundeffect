import { createContext, useEffect, useState } from "react";
import apiClient from "@/libs/api";
import { useSession } from "next-auth/react";
export const AppContext = createContext({} as any);

export const AppContextProvider = ({ children }: any) => {
  const [credits, setCredits] = useState<any | null | undefined>(undefined);
  const session = useSession();
  const fetchUserCredits = async function () {
    try {
      if (session.status !== 'authenticated') {
        // 未登陆，跳转登陆
        return;
      }
      const ret: any = await apiClient.get(
        "/get-credits",
      );
      setCredits(ret.data);
    } catch (e) {
      setCredits(null);
      console.log("get user credits failed: ", e);
    }
  };

  useEffect(() => {
    fetchUserCredits();
  }, []);

  return (
    <AppContext.Provider value={{ credits, fetchUserCredits }}>
      {children}
    </AppContext.Provider>
  );
};
