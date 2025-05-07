import React from "react";
import { createUseStyles } from "react-jss";

type Props = {
  reportTitles: string[];
  reportDate: string;
};

const BalanceSheetHeader: React.FC<Props> = ({ reportTitles, reportDate }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <h2>{reportTitles[0]}</h2>
        <h4>{reportTitles[1]}</h4>
      </div>
      <p className={classes.date}>{reportDate}</p>
    </>
  );
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  date: {
    marginTop: "0px",
  },
});
export default BalanceSheetHeader;
