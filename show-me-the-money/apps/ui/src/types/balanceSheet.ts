export type Cell = {
  Value: string;
  Attributes?: { Value: string; Id: string }[];
};

export type Row = {
  RowType: string;
  Title?: string;
  Cells?: Cell[];
  Rows?: Row[];
};

export type BalanceSheetReport = {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: string[];
  ReportDate: string;
  UpdatedDateUTC: string;
  Fields: string;
  Rows: Row[];
};

export type BalanceSheetResponse = {
  Status: string;
  Reports: BalanceSheetReport[];
};
