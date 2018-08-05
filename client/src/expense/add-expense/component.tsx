import * as React from "react";
import "./styles.css";
// import TextField from "@material-ui/core/TextField";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { createFunction, IExpenseForm } from "../types";
import TextField from "@material-ui/core/TextField";
import * as moment from "moment";
import { Button } from "@material-ui/core";

const now = moment().format("YYYY-MM-DD");
global.console.log("Date.now()", now);

interface IProps {
  onCreate: createFunction;
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
      description: "not defined",
      type: "?",
      value: 1
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
          onChange={this.handleChange("value")}
          value={this.state.value}
        />
        <TextField
          className="text-field"
          required={true}
          id="type"
          label="type"
          onChange={this.handleChange("type")}
          value={this.state.type}
        />
        <TextField
          className="text-field"
          required={true}
          id="description"
          label="description"
          onChange={this.handleChange("description")}
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
