import * as React from "react";
import { Expenses } from "./component";
import { IExpense, IExpenseForm, createFunction } from "./types";
import { fetchExpenses, deleteExpenses, postExpenses } from "./thunk";
import { getOrderedExpenses } from "./selectors";

interface IState {
  expenses: IExpense[];
}

// eslint-disable next-line
type IProps = object;

export default class ExpensesContainer extends React.Component {
  public state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      expenses: []
    };
  }

  public deleteExpense = (expense: IExpense) => {
    // Optimistic UI
    this.setState({
      expenses: this.state.expenses.filter(({ id }) => id !== expense.id)
    });

    deleteExpenses(expense).catch(() =>
      this.setState({ expenses: this.state.expenses.concat([expense]) })
    );
  };

  public addExpense: createFunction = async (expenseForm: IExpenseForm) => {
    // missing ID for optimistic UI... @todo: optimistic with fake id
    const expense = await postExpenses(expenseForm);
    this.setState({ expenses: this.state.expenses.concat([expense]) });

    return expense;
  };

  public render() {
    return (
      <div className="ExpensesContainer">
        <Expenses
          expenses={getOrderedExpenses(this.state)}
          onDelete={this.deleteExpense}
          onCreate={this.addExpense}
        />
      </div>
    );
  }

  public componentDidMount() {
    fetchExpenses().then(expenses => this.setState({ expenses }));
  }
}
