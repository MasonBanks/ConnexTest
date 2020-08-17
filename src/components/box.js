import React from "react";
import { Card, CardContent, CardMedia, Button } from "@material-ui/core";

class Box extends React.Component {
  render() {
    console.log(this.props, "this props");
    return (
      <div>
        <h1>{this.props.title}</h1>
        <CardMedia
          style={{ height: "300px" }}
          component="img"
          src={this.props.image}
        />
        <Card className="wrapper">
          <CardContent className="box">
            <Button
              onClick={() => {
                this.props.handleClick();
              }}
            >
              Change Comic
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Box;
