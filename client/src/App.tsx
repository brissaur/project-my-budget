import * as React from "react";
import "./style.css";
import ExpensesContainer from "./expense/container";

import { config } from "dotenv";
import NavBar from "./layout/navbar";
config();

class App extends React.Component {
  public render() {
    return (
      <div>
        <NavBar />
        <ExpensesContainer />
      </div>
    );
  }
}

export default App;
