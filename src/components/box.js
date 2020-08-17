import React from "react";
import { Card, CardContent, CardMedia, Button } from "@material-ui/core";

class Box extends React.Component {
  render() {
    console.log(this.props, "this props");
    return (
      <Card className="wrapper">
        <CardContent className="box">
          <h1>{this.props.title}</h1>
          <h1>Hello</h1>
          <CardMedia
            style={{ height: "300px" }}
            component="img"
            src={this.props.image}
          />
          <Button
            onClick={() => {
              this.props.handleClick();
            }}
          >
            Change Comic
          </Button>
        </CardContent>
      </Card>
    );
  }
  componentDidMount() {
    console.log("component mounted");
    this.props.onLoad();
  }
}

export default Box;
