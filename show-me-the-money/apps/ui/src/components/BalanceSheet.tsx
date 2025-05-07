import React from "react";
import { createUseStyles } from "react-jss";
import type { BalanceSheetReport } from "../types/balanceSheet";
import BalanceSheetHeader from "./BalanceSheetHeader";
import RenderRow from "./BalanceSheetRow";

type Props = {
  report: BalanceSheetReport;
};

const BalanceSheet: React.FC<Props> = ({ report }) => {
  const classes = useStyles();

  const headerRow = React.useMemo(
    () => report.Rows.find((r) => r.RowType === "Header"),
    [report]
  );
  const headerCells = headerRow?.Cells ?? [];

  const nonHeaderRows = React.useMemo(() => {
    return report.Rows.filter((r) => r.RowType !== "Header");
  }, [report]);

  return (
    <div className={classes.container}>
      <BalanceSheetHeader
        reportTitles={report.ReportTitles}
        reportDate={report.ReportDate}
      />
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.cell}>Account</th>
            <th className={`${classes.cell}`}>{headerCells[1]?.Value}</th>
            <th className={classes.cell}>{headerCells[2]?.Value}</th>
          </tr>
        </thead>
        <tbody>
          {nonHeaderRows.map((row, index) => (
            <React.Fragment key={index}>
              <RenderRow row={row} depth={0} />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BalanceSheet;

const useStyles = createUseStyles({
  container: {
    width: "100%",
    margin: "20px 30px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  cell: {
    padding: "8px",
  },
  bold: {
    fontWeight: "bold",
  },
});
