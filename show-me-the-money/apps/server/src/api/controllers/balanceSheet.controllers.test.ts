import request from "supertest";
import app from "../../index";
import * as balanceSheetService from "../services/balanceSheet.services";
import { XeroBalanceSheetResponse } from "../../types/report";

describe("GET /api/balance-sheet", () => {
  const mockData: XeroBalanceSheetResponse = {
    Reports: [
      {
        ReportID: "BalanceSheet",
        ReportName: "Balance Sheet",
        Rows: [],
      },
    ],
  };

  beforeEach(() => {
    jest
      .spyOn(balanceSheetService, "fetchBalanceSheet")
      .mockResolvedValue(mockData);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return 200 and balance sheet data", async () => {
    const response = await request(app).get("/api/balance-sheet");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData);
    expect(balanceSheetService.fetchBalanceSheet).toHaveBeenCalledTimes(1);
  });

  it("should return 500 when service throws error", async () => {
    jest
      .spyOn(balanceSheetService, "fetchBalanceSheet")
      .mockRejectedValueOnce(new Error("Failed to fetch"));

    const response = await request(app).get("/api/balance-sheet");

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("message", "Failed to fetch");
  });
});
