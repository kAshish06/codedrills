import React from "react";
import BalanceSheet from "./components/BalanceSheet";
import { useBalanceSheet } from "./query/useBalanceSheet";

const App: React.FC = () => {
  const { data, isLoading, error } = useBalanceSheet();

  return (
    <div>
      {error && (
        <p>
          We were not able load data for your balance sheet. Please try after
          sometime.
        </p>
      )}
      {isLoading && <p>Loading...</p>}
      {data && <BalanceSheet report={data.Reports[0]} />}
    </div>
  );
};

export default App;
