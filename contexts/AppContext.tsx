import { createContext, useEffect, useState } from "react";
import apiClient from "@/libs/api";
export const AppContext = createContext({} as any);

export const AppContextProvider = ({ children }: any) => {
  const [credits, setCredits] = useState<any | null | undefined>(undefined);
  const fetchUserCredits = async function () {
    try {
      const ret1: any = await apiClient.get('/auth/session');
      if (JSON.stringify(ret1) === '{}') {
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
