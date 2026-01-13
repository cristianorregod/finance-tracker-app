import { useDispatch, useSelector } from "react-redux";
import { setCategories, setError, setLoading } from "../slice";
import { setAccounts } from "@/modules/accounts/slice";
import { toast } from "sonner";
import { setBudgets } from "@/modules/budgets/slice";
import { setTransactions } from "@/modules/transactions/slice";
import { apiFetch } from "@/shared/api/apiFetch";


const useDasboardProvider = () => {
  const dispatch = useDispatch();
  const { accounts } = useSelector((state) => state.accounts);

  const fetchInitialData = async () => {
    dispatch(setLoading(true));
    try {
      const data = await apiFetch("/parameters/");
      dispatch(setAccounts(data.accounts));
      dispatch(setBudgets(data.budgets));
      dispatch(setTransactions(data.transactions));
      dispatch(setCategories(data.categories));
    } catch (error) {
      dispatch(setAccounts([]));
      console.log("error", error);
      toast.error("Failed to load data");
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { fetchInitialData };
};

export default useDasboardProvider;
