import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import Box from "../components/box.js";
import { Typography, Container } from "@material-ui/core";
class BoxCon extends React.Component {
  render() {
    const styles = {
      comic: {
        display: "flex",
        justifyContent: "center",
        height: "fit-content",
      },
      title: {
        textAlign: "center",
      },
    };
    return (
      <Container styles={styles.comic}>
        <Typography variant="h4" style={styles.title}>
          {this.props.title}
        </Typography>
        <Box
          handleClick={this.props.loadComic}
          onLoad={this.props.loadComic}
          props={this.props}
        ></Box>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BoxCon);
