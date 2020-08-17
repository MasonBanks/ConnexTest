import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

class Box extends React.Component {
  render() {
    return (
      <Card className="wrapper">
        <CardContent
          className="box"
          style={{
            backgroundColor: `${this.props.color}`,
          }}
        >
          <Button
            onClick={() => {
              this.props.handleClick();
            }}
          >
            Change Color
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default Box;
