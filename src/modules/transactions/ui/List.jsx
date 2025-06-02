import { useSelector } from "react-redux";
import { TransactionListTable } from "@/shared/components/TransactionList";

const TABLE_HEAD = [
  { label: "Description", width: "max-w-64" },
  { label: "Date", width: "max-w-48" },
  { label: "Amount", width: "max-w-48" },
  { label: "Account", width: "max-w-64" },
  { label: "Type", width: "max-w-32" },
  { label: "Actions", width: "max-w-32" },
];

export const TransactionList = () => {
  const { transactions } = useSelector((state) => state.transactions);

  return (
    <TransactionListTable
      transactions={transactions}
      tableHeaders={TABLE_HEAD}
    />
  );
};
