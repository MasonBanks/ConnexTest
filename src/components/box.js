import React from "react";
import { Card, CardContent, CardMedia, Tooltip } from "@material-ui/core";

class Box extends React.Component {
  render() {
    const styles = {
      media: {
        display: "flex",
        justifyContent: "center",
        width: "fit-content",
      },
      content: {
        alignItems: "center",
      },
    };
    return (
      <Card className="wrapper">
        <CardContent className="box" style={styles.content}>
          <Tooltip title={this.props.props.alt} placement="bottom">
            <CardMedia
              className="Comic"
              style={styles.media}
              image={this.props.props.image}
              component="img"
            />
          </Tooltip>
        </CardContent>
      </Card>
    );
  }
  componentDidMount() {
    this.props.onLoad();
  }
}

export default Box;
