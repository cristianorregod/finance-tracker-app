// @material-tailwind/react
import { Typography } from "@material-tailwind/react";
import { BudgetCard } from "@/shared/components/BudgetCard";
import { DefaultSkeleton } from "@/shared/components/DefaulSkeleton";
import { useSelector } from "react-redux";
import { Card } from "@material-tailwind/react";
import { useEffect } from "react";
import useDasboardProvider from "./hooks";
import { Chart } from "@/shared/components/Chart";

export const HomeView = () => {
  const { accounts } = useSelector((state) => state.accounts);
  const { budgets } = useSelector((state) => state.budgets);
  const { isLoading } = useSelector((state) => state.dashboard);
  const { transactions } = useSelector((state) => state.transactions);
  const { fetchInitialData, isMobileScreen } = useDasboardProvider();
  const charts = [
    { id: "monthly-income-expense", name: "Incomes vs Expenses by month" },
    {
      id: "expense-by-category",
      name: "Expense by category current month",
    },
  ];
  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <div>
      <section className=" pb-4 gap-4 grid lg:grid-cols-2 lg:auto-rows-auto w-full ">
        {charts.map((chart) => (
          <Chart key={chart.id} chartId={chart.id} title={chart.name} />
        ))}
      </section>
      <section className=" w-full ">
        <Card className="px-4 py-6 col-span-1 row-span-1 bg-blue-gray-50/15">
          <Typography variant="h5" color="blue-gray" className="mb-4">
            Budgets
          </Typography>
          {isLoading && <DefaultSkeleton />}

          <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center md:gap-2.5 gap-4">
            {budgets.map((props, key) => (
              <BudgetCard key={key} budget={props} />
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};
