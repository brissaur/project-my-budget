import * as React from "react";

import Grid from "@material-ui/core/Grid";

import * as styles from "./styles.css";
global.console.log("styles", styles);

import {
  IExpense,
  deleteFunction,
  createFunction,
  IExpenseForm
} from "./types";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { formatCurrency } from "./services";

import * as moment from "moment";
import { Button } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import ModalWrapper from "./modal/component";
import AddExpense from "./add-expense/component";

const now = moment().format("YYYY-MM-DD");
global.console.log("Date.now()", now);

export function Expense({
  expense,
  onDelete
}: {
  expense: IExpense;
  onDelete: deleteFunction;
}) {
  const onDeletePress = () => onDelete(expense);

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={expense.description || "Some expense"}
        secondary={expense.date.calendar()}
      />
      <ListItemSecondaryAction>
        {formatCurrency(expense.value)}
        <IconButton onClick={onDeletePress} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export const Expenses: React.SFC<{
  expenses: IExpense[];
  onDelete: deleteFunction;
  onCreate: createFunction;
}> = ({ expenses, onDelete, onCreate }) => (
  <div>
    <div>
      <Grid container={true} spacing={24} style={{ padding: 24 }}>
        {expenses.map(expense => (
          <Grid item={true} xs={12} sm={12} lg={4} xl={3} key={expense.id}>
            <Expense expense={expense} key={expense.id} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
      <div className="addButton">
        <ModalWrapper
          controller={open => (
            <Button variant="fab" color={"primary"} onClick={open}>
              <AddIcon />
            </Button>
          )}
          content={(open, close) => (
            <AddExpense
              onCreate={(expense: IExpenseForm) =>
                onCreate(expense).then(close)
              }
            />
          )}
        />
      </div>
    </div>
  </div>
);
