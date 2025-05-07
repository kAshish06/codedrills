import React from "react";
import { createUseStyles } from "react-jss";
import type { Row } from "../types/balanceSheet";

type Props = {
  row: Row;
  depth: number;
};
const LEFT_INDENT = 16;
const CELL_GAP = 30;

const RenderRow: React.FC<Props> = ({ row, depth = 0 }) => {
  const classes = useStyles();
  if (row.RowType === "Section" && row.Rows) {
    return (
      <React.Fragment key={row.Title}>
        <tr className={classes.sectionRow}>
          <td
            colSpan={3}
            className={classes.bold}
            style={{ paddingLeft: (depth || 1) * LEFT_INDENT }}
          >
            {row.Title}
          </td>
        </tr>
        {row.Rows.map((childRow, index) => (
          <React.Fragment key={index}>
            <RenderRow row={childRow} depth={depth + 1} />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }

  if (
    (row.RowType === "Row" || row.RowType === "SummaryRow") &&
    Array.isArray(row.Cells)
  ) {
    const rowClass = row.RowType === "SummaryRow" ? classes.summaryRow : "";
    return (
      <tr key={JSON.stringify(row.Cells)} className={rowClass}>
        {row.Cells.map((cell, idx) => {
          if (row.Cells && row.Cells.length) {
            const isSecondLast = idx === row.Cells.length - 2;
            const isLast = idx === row.Cells.length - 1;
            return (
              <td
                key={idx}
                className={`${classes.cell} ${
                  isLast ? classes.spacedCell : ""
                }`}
                style={isSecondLast ? { paddingRight: 30 } : {}}
              >
                {cell.Value}
              </td>
            );
          }
          return null;
        })}
      </tr>
    );
  }

  return null;
};

export default RenderRow;

const useStyles = createUseStyles({
  cell: {
    padding: "8px",
  },
  spacedCell: {
    paddingLeft: CELL_GAP,
  },
  bold: {
    fontWeight: "bold",
  },
  summaryRow: {
    fontWeight: "bold",
    borderTop: "1px solid #ccc",
  },
  sectionRow: {
    backgroundColor: "#f0f4f8",
    borderLeft: "4px solid #007acc",
    fontWeight: "bold",
  },
});
