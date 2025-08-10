import { useDispatch, useSelector } from "react-redux";
import { setCategories, setError, setLoading } from "../slice";
import { setAccounts } from "@/modules/accounts/slice";
import { toast } from "sonner";
import { setBudgets } from "@/modules/budgets/slice";
import { setTransactions } from "@/modules/transactions/slice";

const { VITE_API_URL } = import.meta.env;

const useDasboardProvider = () => {
  const dispatch = useDispatch();
  const { accounts } = useSelector((state) => state.accounts);

  const fetchInitialData = async () => {
    // if (accounts.length > 0) return

    dispatch(setLoading(true));
    try {
      const response = await fetch(`${VITE_API_URL}/parameters/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(setAccounts(data.accounts));
      dispatch(setBudgets(data.budgets));
      dispatch(setTransactions(data.transactions));
      dispatch(setCategories(data.categories));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setAccounts([]));
      console.log("error", error);
      toast.error("Failed to load data");
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };

  return { fetchInitialData };
};

export default useDasboardProvider;
