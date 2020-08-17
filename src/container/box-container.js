import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "../components/box.js";

class BoxCon extends React.Component {
  render() {
    return (
      <Card className="wrapper">
        <CardContent className="box">
          <Box />
        </CardContent>
      </Card>
    );
  }
}

export default BoxCon;
