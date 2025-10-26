import { api } from "./api";
import { Transaction } from "../types";

export const getTransactions = async (): Promise<Transaction[]> => {
  const res = await api.getTransactions();
  return res;
};

export const createTransaction = async (transaction: Omit<Transaction, "id" | "userId">): Promise<Transaction> => {
  const res = await api.addTransaction(transaction);
  return res;
};

export const deleteTransaction = async (id: string): Promise<void> => {
  await api.deleteTransaction(`/transactions/${id}`);
};
