export const ACCOUNTS_VIEWS = {
  ACCOUNT_LIST: 'account-list',
  ACCOUNT_SELECTED: 'account-selected',
  NEW_ACCOUNT: 'new-account',
}
export const BUDGETS_VIEWS = {
  BUDGET_LIST: 'budget-list',
  BUDGET_SELECTED: 'budget-selected',
  NEW_BUDGET: 'new-budget',
}
export const TRANSACTIONS_VIEWS = {
  TRANSACTION_LIST: 'transaction-list',
  TRANSACTION_SELECTED: 'transaction-selected',
  NEW_TRANSACTION: 'new-transaction',
}

import {
  AcademicCapIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  CakeIcon,
  DevicePhoneMobileIcon,
  FilmIcon,
  GiftIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  BuildingLibraryIcon,
  HashtagIcon,
  TruckIcon,
  LightBulbIcon,
  ShoppingBagIcon,
  ShieldCheckIcon,
  ScissorsIcon,
  ReceiptRefundIcon,
  GlobeAltIcon,
  FireIcon,
  UserGroupIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid'

export const ICONS_OPTIONS = [
  { value: 'AcademicCapIcon', icon: AcademicCapIcon },
  { value: 'CurrencyDollarIcon', icon: CurrencyDollarIcon },
  { value: 'CreditCardIcon', icon: CreditCardIcon },
  { value: 'BanknotesIcon', icon: BanknotesIcon },
  { value: 'ShoppingCartIcon', icon: ShoppingCartIcon },
  { value: 'CakeIcon', icon: CakeIcon },
  { value: 'DevicePhoneMobileIcon', icon: DevicePhoneMobileIcon },
  { value: 'FilmIcon', icon: FilmIcon },
  { value: 'GiftIcon', icon: GiftIcon },
  { value: 'HomeIcon', icon: HomeIcon },
  { value: 'BuildingStorefrontIcon', icon: BuildingStorefrontIcon },
  { value: 'BuildingLibraryIcon', icon: BuildingLibraryIcon },
  { value: 'HashtagIcon', icon: HashtagIcon },
  { value: 'TruckIcon', icon: TruckIcon },
  { value: 'LightBulbIcon', icon: LightBulbIcon },
  { value: 'ShoppingBagIcon', icon: ShoppingBagIcon },
  { value: 'ShieldCheckIcon', icon: ShieldCheckIcon },
  { value: 'ScissorsIcon', icon: ScissorsIcon },
  { value: 'ReceiptRefundIcon', icon: ReceiptRefundIcon },
  { value: 'GlobeAltIcon', icon: GlobeAltIcon },
  { value: 'FireIcon', icon: FireIcon },
  { value: 'SparklesIcon', icon: SparklesIcon },
  { value: 'UserGroupIcon', icon: UserGroupIcon },
]
export const ROUTES = {
  DASHBOARD: '/dashboard',
  BUDGETS: '/budgets',
  TRANSACTIONS: '/transactions',
  ACCOUNTS: '/accounts',
}

export const TRANSACTION_TYPES = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  TRANSFER: 'TRANSFER',
  SAVING: 'SAVING',
}

export const TRANSACTION_TYPES_OPTIONS = [
  { name: 'Income', id: TRANSACTION_TYPES.INCOME },
  { name: 'Expense', id: TRANSACTION_TYPES.EXPENSE },
  { name: 'Saving', id: TRANSACTION_TYPES.SAVING },
  { name: 'Transfer', id: TRANSACTION_TYPES.TRANSFER },
]

export const ACCOUNT_TYPES = [
  { name: 'Ahorros', id: 'Ahorros' },
  { name: 'Tarjeta de credito', id: 'Tarjeta de credito' },
  { name: 'Inversiones', id: 'Inversiones' },
  { name: 'Efectivo', id: 'Efectivo' },
  { name: 'Billetera Digital', id: 'Billetera Digital' },
]
