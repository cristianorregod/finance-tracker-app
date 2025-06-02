import { useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setViewState } from "../slice";
import useAccount from "../hooks";
import { RenderIcon } from "@/shared/components/RenderIcon";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  CardBody,
  Card,
} from "@material-tailwind/react";
import { formatCurrencyCOP } from "@/shared/helpers/currencyTools";
import { ACCOUNTS_VIEWS } from "@/shared/helpers/constants";
import { TransactionAnalyzer } from "../utils";
import { TransactionListTable } from "@/shared/components/TransactionList";
const TABLE_HEAD = [
  { label: "Description", width: "max-w-64" },
  { label: "Date", width: "max-w-48" },
  { label: "Amount", width: "max-w-48" },
  { label: "Account", width: "max-w-64" },
  { label: "Type", width: "max-w-32" },
  { label: "Actions", width: "max-w-32" },
];
export const AccountDetails = () => {
  const dispatch = useDispatch();
  const { getAccountById } = useAccount();
  const { accountSelected, accountDetails } = useSelector(
    (state) => state.accounts
  );
  console.log("accountSelected", accountSelected);
  useEffect(() => {
    getAccountById(accountSelected.id);
  }, []);
  return (
    <div className="pb-20">
      <Button
        variant="outlined"
        size="sm"
        className="flex items-center gap-2 rounded-full"
        onClick={() => dispatch(setViewState(ACCOUNTS_VIEWS.ACCOUNT_LIST))}
      >
        <ChevronLeftIcon strokeWidth={4} className="size-4" /> Back
      </Button>
      {accountDetails && (
        <article className="mt-10">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex items-center gap-4">
              <div className=" bg-blue-gray-50 p-2 rounded-full text-blue-gray-700">
                <RenderIcon iconName={accountDetails?.icon} />
              </div>
              <div>
                <Typography variant="h1" color="blue-gray" className="text-2xl">
                  {accountDetails?.name}
                </Typography>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-md font-normal"
                >
                  {accountDetails?.account_type}
                </Typography>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Typography variant="h1" color="blue-gray" className="text-2xl">
                {formatCurrencyCOP(accountDetails.current_balance)}
              </Typography>
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-md font-normal text-right"
              >
                Current balance
              </Typography>
            </div>
          </header>

          <Tabs value={"resume"} onChange={() => console.log("change")}>
            <TabsHeader>
              <Tab value="resume">Resume</Tab>
              <Tab value="transactions">Transactions</Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="resume" className="px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardBody className="p-6">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-md font-normal mb-2"
                      >
                        Incomes
                      </Typography>
                      <Typography
                        variant="h1"
                        className="text-2xl text-green-500"
                      >
                        {formatCurrencyCOP(
                          TransactionAnalyzer.getIncomes(
                            accountDetails?.transactions,
                            accountDetails?.id
                          )
                        )}
                      </Typography>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody className="p-6">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-md font-normal mb-2"
                      >
                        Expenses
                      </Typography>
                      <Typography
                        variant="h1"
                        className="text-2xl text-red-500"
                      >
                        {formatCurrencyCOP(
                          TransactionAnalyzer.getExpenses(
                            accountDetails?.transactions,
                            accountDetails?.id
                          )
                        )}
                      </Typography>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody className="p-6">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-md font-normal mb-2"
                      >
                        Tranfers
                      </Typography>
                      <Typography
                        variant="h1"
                        className="text-2xl text-orange-600"
                      >
                        {formatCurrencyCOP(
                          TransactionAnalyzer.getTransfers(
                            accountDetails?.transactions,
                            accountDetails?.id
                          )
                        )}
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </TabPanel>
              <TabPanel value="transactions" className="px-0">
                <TransactionListTable
                  transactions={accountDetails?.transactions}
                  tableHeaders={TABLE_HEAD}
                />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </article>
      )}
    </div>
  );
};
