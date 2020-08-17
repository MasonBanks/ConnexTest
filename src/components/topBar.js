import React from "react";
import { AppBar, Typography } from "@material-ui/core";

class NavBar extends React.Component {
  render() {
    const styles = {
      bar: {
        padding: "15px",
        backgroundColor: "#eeeded",
        color: "black",
        display: "flex",
        textAlign: "center",
      },
    };
    return (
      <AppBar position="fixed" style={styles.bar}>
        <Typography component="h1">
          Mason Banks - Connex One Test - XKCD Comics
        </Typography>
      </AppBar>
    );
  }
}

export default NavBar;
