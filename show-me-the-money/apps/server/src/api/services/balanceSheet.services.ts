import apiClient from "../../utils/httpClient";
import { XeroBalanceSheetResponse } from "../../types/report";

export async function fetchBalanceSheet(): Promise<XeroBalanceSheetResponse> {
  try {
    const response = await apiClient.get<XeroBalanceSheetResponse>(
      "/api.xro/2.0/Reports/BalanceSheet"
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Error occurred while trying to get balance sheet");
  }
}
