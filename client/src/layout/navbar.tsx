import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const appTitle = "My budget";
const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {appTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
