import { IExpense } from "./types";
import { Moment } from "moment";

export interface IExpense {
  id: string;
  type: string;
  date: Moment;
  description?: string;
  value: number;
}

export interface IExpenseForm {
  type: string;
  value: number;
}

export type deleteFunction = (expense: IExpense) => void;
export type createFunction = (expense: IExpenseForm) => Promise<IExpense>;
