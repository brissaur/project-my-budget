import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import FolderIcon from "@material-ui/icons/Folder";
import * as React from "react";
import AddExpense from "./add-expense/component";
import { TYPE_TO_ICON } from "./expense-types";
import ModalWrapper from "./modal/component";
import { formatCurrency } from "./services";
import "./styles.css";
import {
  createFunction,
  deleteFunction,
  IExpense,
  IExpenseForm
} from "./types";

export function Expense({
  expense,
  onDelete
}: {
  expense: IExpense;
  onDelete: deleteFunction;
}) {
  const onDeletePress = () => onDelete(expense);
  const Icon = TYPE_TO_ICON[expense.type] || FolderIcon;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <Icon />
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
