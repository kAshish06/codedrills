import axios from "axios";
import type { BalanceSheetResponse } from "../types/balanceSheet";

const apiUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export const fetchBalanceSheetData =
  async (): Promise<BalanceSheetResponse> => {
    try {
      const response = await axios.get(`${apiUrl}/api/balance-sheet`);
      return response.data;
    } catch {
      throw new Error("Failed to fetch balance sheet data");
    }
  };
