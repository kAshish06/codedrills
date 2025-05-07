// src/api/controllers/balanceSheet.controller.ts
import { Request, Response, NextFunction } from "express";
import { fetchBalanceSheet } from "../services/balanceSheet.services";
import { XeroBalanceSheetResponse } from "../../types/report";

export async function getBalanceSheetController(
  _req: Request,
  res: Response<XeroBalanceSheetResponse>,
  next: NextFunction
): Promise<void> {
  try {
    const data = await fetchBalanceSheet();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}
