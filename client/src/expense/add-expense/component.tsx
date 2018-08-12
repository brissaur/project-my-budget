import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import * as moment from "moment";
import * as React from "react";

import { createFunction, IExpenseForm } from "../types";
import RadioTypes from "./components/radio-types";
import { formatDecimalNumberFromEvent } from "./services";
import "./styles.css";

interface IProps {
  onCreate: createFunction;
}

type func<T> = (...params: any[]) => T;

function gof<G = any, F = any>(g: func<G>, f: func<F>) {
  return (...params: any[]) => g(f(...params));
}

class AddExpense extends React.Component {
  public state: {
    value: number | undefined;
    type: string | undefined;
    description: string | undefined;
  };
  public props: IProps;
  constructor(props: IProps) {
    super(props);
    this.state = {
      description: undefined,
      type: undefined,
      value: undefined
    };
  }

  public onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    this.props.onCreate({
      ...this.state,
      date: moment().format()
    } as IExpenseForm);
  };

  public handleChange = (fieldName: string) => {
    return (value: any) => this.setState({ [fieldName]: value });
  };

  public handleEventChange = (fieldName: string) => {
    return (e: any) => this.setState({ [fieldName]: e.target.value });
  };
  public render() {
    return (
      <form className="expense-form" onSubmit={this.onSubmit}>
        <h2>New expense</h2>
        <TextField
          className="text-field"
          required={true}
          id="value"
          label="value"
          type="number"
          onChange={gof(
            this.handleChange("value"),
            formatDecimalNumberFromEvent
          )}
          value={this.state.value}
          autoFocus={true}
        />

        <RadioTypes
          onChange={this.handleChange("type")}
          value={this.state.type}
        />
        <TextField
          className="text-field"
          required={true}
          id="description"
          label="description"
          onChange={this.handleEventChange("description")}
          value={this.state.description}
        />
        <Button
          variant="contained"
          color="primary"
          className="submit-button"
          onClick={this.onSubmit}
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default AddExpense;
