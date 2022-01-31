import { Changes } from "./components/Changes";
import { Table } from "./components/Table";
import { useTickersPageHook } from "./useTickersPageHook";

const TickersPage = () => {
  const { tickers, changes } = useTickersPageHook();

  return (
    <>
      <Changes changes={changes} />

      <Table tickers={tickers} />
    </>
  );
};

export default TickersPage;
