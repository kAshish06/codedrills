import { Router } from "express";
import { getBalanceSheetController } from "../controllers/balanceSheet.controllers";

const router = Router();

router.get("/", getBalanceSheetController);

export default router;
