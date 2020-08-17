import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import Box from "../components/box.js";
import { Typography, Container, Button, TextField } from "@material-ui/core";

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
      input: {
        paddingBottom: "5px",
      },
    };
    function findSpecificComic(arg) {
      console.log(`${arg} was clicked`);
      actionCreators.loadSpecificComic(125);
    }
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
        <Container className="ButtonContainer">
          <form action="" className="ButtonMenu">
            <TextField
              style={styles.input}
              variant="outlined"
              type="number"
              label="Go to comic by ID"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                findSpecificComic("clicked");
              }}
            >
              Let's Go
            </Button>
          </form>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BoxCon);
