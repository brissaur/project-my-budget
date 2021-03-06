import { IExpense, IExpenseForm } from "./types";
import * as moment from "moment";
import axios from "axios";
import config from "../config";

global.console.log(config);
// axios.defaults.baseURL = config.baseUrl;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/json";

const formatExpense = ({
  _id,
  date,
  ...rest
}: {
  _id: string;
  date: number;
}): IExpense =>
  ({
    ...rest,
    date: moment(date),
    id: _id
  } as IExpense);

const BASE_API_URL = process.env.REACT_APP_API_HOST || "";
const computeUrl = (path: string) => `${BASE_API_URL}${path}`;

export async function fetchExpenses() {
  const response = await axios.get(computeUrl("/expense"));

  return response.data.map(formatExpense);
}

export async function postExpenses(expense: IExpenseForm): Promise<IExpense> {
  try {
    const response = await axios.post(computeUrl("/expense"), expense);
    global.console.log(response);
    return formatExpense(response.data);
  } catch (e) {
    global.console.error(e);
    throw e;
  }
}

export async function deleteExpenses(expense: IExpense) {
  try {
    const response = await axios.delete(computeUrl("/expense/" + expense.id));
    global.console.log(response);
  } catch (e) {
    global.console.error(e);
    throw e;
  }
}
