import { useQuery } from "@tanstack/react-query";
import { fetchBalanceSheetData } from "../api/balanceSheet";
import type { BalanceSheetResponse } from "../types/balanceSheet";

export const useBalanceSheet = () =>
  useQuery<BalanceSheetResponse>({
    queryKey: ["balanceSheet"],
    queryFn: async () => {
      const res = await fetchBalanceSheetData();
      return res;
    },
  });
