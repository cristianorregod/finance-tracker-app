import { setLoading, setError, logout } from "@/modules/dashboard/slice";
import { useDispatch } from "react-redux";
import TransactionApi from "../api";
import { addTransaction, setTransactions, setTransactionView } from "../slice";
import { toast } from "sonner";
import { TRANSACTIONS_VIEWS } from "@/shared/helpers/constants";

const useTransaction = () => {
  const dispatch = useDispatch();
  const getTransactions = async (filter = "all") => {
    dispatch(setLoading(true));
    try {
      const transactions = await TransactionApi.get(filter);
      dispatch(setTransactions(transactions));
      dispatch(setLoading(false));
    } catch (error) {
      console.log("error", error);
      toast.error("Failed to get transactions");
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const createTransaction = async (transaction) => {
    dispatch(setLoading(true));
    try {
      const transactionCreated = await TransactionApi.create(transaction);
      dispatch(addTransaction(transactionCreated.transaction));
      toast.error(transactionCreated.message);
      dispatch(setLoading(false));
      dispatch(setTransactionView(TRANSACTIONS_VIEWS.TRANSACTION_LIST));
    } catch (error) {
      console.log("error", error);
      toast.error("Failed to create transaction");
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
  return { createTransaction, getTransactions };
};

export default useTransaction;
