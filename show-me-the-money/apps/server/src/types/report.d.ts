export interface XeroCellAttribute {
  Type?: string;
  Value?: string | number | boolean;
  Link?: string;
}

export interface XeroCell {
  Value?: string;
  Attributes?: Record<string, XeroCellAttribute>;
}

export interface XeroReportRow {
  RowType: string;
  Title?: string;
  Rows?: XeroReportRow[];
  Cells?: XeroCell[];
}

export interface XeroReport {
  ReportID: string;
  ReportName: string;
  ReportType?: string;
  Date?: string;
  UpdatedDateUTC?: string;
  Rows: XeroReportRow[];
  Summary?: string;
}

export interface XeroBalanceSheetResponse {
  Reports: XeroReport[];
}
