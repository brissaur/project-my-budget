import * as React from "react";
import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { IExpense, deleteFunction, createFunction } from "./types";
// import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { formatCurrency } from "./services";
import TextField from "@material-ui/core/TextField";
import * as moment from "moment";

const now = moment().format("YYYY-MM-DD");
global.console.log("Date.now()", now);
class ExpenseForm extends React.Component {
  // state:
  public props: { onCreate: createFunction };
  // public onTypeChanged: (type: string): void => {this.setState({type})}
  public onSubmit = () => {
    global.console.log("Yala");
  };
  public render() {
    return (
      <ListItem>
        <form onSubmit={this.onSubmit}>
          <TextField required={true} id="value" label="value" type="number" />
          <TextField required={true} id="type" label="type" defaultValue="?" />
          <TextField required={true} id="description" label="description" />
          {/* <TextField
          required={true}
          id="date"
          label="date"
          type="date"
          defaultValue={now}
        /> */}
          <TextField id="submit" label="submit" type="submit" />
        </form>
      </ListItem>
    );
  }
}

export function Expense({
  expense,
  onDelete
}: {
  expense: IExpense;
  onDelete: deleteFunction;
}) {
  const onDeletePress = () =>
    global.console.log("clicked", expense.id) || onDelete(expense);
  //   return <div>{JSON.stringify(expense)}</div>;
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
      {/* <TextField
        style={{ padding: 24 }}
        id="searchInput"
        placeholder="Search for Courses"
        margin="normal"
        onChange={this.onSearchInputChange}
      /> */}
      <Grid container={true} spacing={24} style={{ padding: 24 }}>
        <ExpenseForm onCreate={onCreate} />
        {/* <ExpenseForm onCreate={onCreate} /> */}
        {expenses.map(expense => (
          <Grid item={true} xs={12} sm={12} lg={4} xl={3}>
            <Expense expense={expense} key={expense.id} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
    </div>
  </div>
);

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
