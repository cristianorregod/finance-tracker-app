class TransactionAnalyzer {
  static getIncomes(transactions, accountId) {
    return this.calculateTotal(transactions, "INCOME", accountId);
  }

  static getExpenses(transactions, accountId) {
    return this.calculateTotal(transactions, "EXPENSE", accountId);
  }

  static getTransfers(transactions, accountId) {
    return this.calculateTotal(transactions, "TRANSFER", accountId);
  }

  static calculateTotal(transactions, type, accountId) {
    switch (type) {
      case "EXPENSE":
        return transactions
          .filter(
            (t) => t.type === "EXPENSE" && t.from_account?.id === accountId
          )
          .reduce((sum, t) => sum + t.amount, 0);
      case "INCOME":
        return transactions
          .filter((t) => t.to_account?.id === accountId)
          .reduce((sum, t) => sum + t.amount, 0);
      case "TRANSFER":
        return transactions
          .filter(
            (t) =>
              t.type === "TRANSFER" &&
              t.from_account?.id === accountId &&
              t.to_account !== null
          )
          .reduce((sum, t) => sum + t.amount, 0);
      default:
        return 0;
    }
  }
}

export { TransactionAnalyzer };
