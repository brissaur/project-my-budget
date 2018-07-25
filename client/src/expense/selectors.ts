import { Moment } from "moment";
import { createSelector } from "reselect";
import { IExpense } from "./types";

const getExpenses = (state: any) => state.expenses;

const sortMomentDesc = (m1: Moment, m2: Moment) =>
  m1.isAfter(m2) ? (m2.isAfter(m1) ? -1 : 0) : 1;

const sortExpenseByMomentDesc = (expense1: IExpense, expense2: IExpense) =>
  sortMomentDesc(expense1.date, expense2.date);

export const getOrderedExpenses = createSelector(getExpenses, expenses =>
  expenses.sort(sortExpenseByMomentDesc)
);
