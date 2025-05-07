import React from "react";
import { render, screen } from "@testing-library/react";
import BalanceSheet from "../BalanceSheet";
import type { BalanceSheetReport } from "../../types/balanceSheet";
import "@testing-library/jest-dom";

const mockReport: BalanceSheetReport = {
  ReportID: "BalanceSheet",
  ReportName: "Balance Sheet",
  ReportType: "BalanceSheet",
  ReportTitles: ["Balance Sheet", "Demo Org", "As at 07 May 2025"],
  ReportDate: "07 May 2025",
  UpdatedDateUTC: "/Date(1746624528497)/",
  Fields: "",
  Rows: [
    {
      RowType: "Header",
      Cells: [
        { Value: "" },
        { Value: "07 May 2025" },
        { Value: "08 May 2024" },
      ],
    },
    {
      RowType: "Section",
      Title: "Bank",
      Rows: [
        {
          RowType: "Row",
          Cells: [
            { Value: "My Bank Account" },
            { Value: "126.70" },
            { Value: "99.60" },
          ],
        },
        {
          RowType: "SummaryRow",
          Cells: [
            { Value: "Total Bank" },
            { Value: "104076.70" },
            { Value: "104049.60" },
          ],
        },
      ],
    },
  ],
};

describe("BalanceSheet", () => {
  it("renders the header with correct dates", () => {
    render(<BalanceSheet report={mockReport} />);
    expect(screen.getByText("08 May 2024")).toBeInTheDocument();
  });

  it("renders section title", () => {
    render(<BalanceSheet report={mockReport} />);
    expect(screen.getByText("Bank")).toBeInTheDocument();
  });

  it("renders account rows", () => {
    render(<BalanceSheet report={mockReport} />);
    expect(screen.getByText("My Bank Account")).toBeInTheDocument();
    expect(screen.getByText("126.70")).toBeInTheDocument();
    expect(screen.getByText("99.60")).toBeInTheDocument();
  });

  it("renders summary row", () => {
    render(<BalanceSheet report={mockReport} />);
    expect(screen.getByText("Total Bank")).toBeInTheDocument();
    expect(screen.getByText("104076.70")).toBeInTheDocument();
    expect(screen.getByText("104049.60")).toBeInTheDocument();
  });
});
