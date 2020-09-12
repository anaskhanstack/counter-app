import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { INCREMENT, DECREMENT } from "./type";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    height: 20,
    textAlign: "center",
    fontSize: 19,
    width: 70,
  },
}));

const Counter = (props) => {
  const classes = useStyles();
  const { counter, handleDecrement, handleIncrement } = props;
  return (
    <Grid>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Paper className={classes.paper}>
          {counter.value < 1 ? "zero" : counter.value}
        </Paper>

        <div className={classes.root}>
          <Button
            onClick={() => handleIncrement(counter)}
            variant="contained"
            color="secondary"
          >
            {INCREMENT}
          </Button>
          {counter.value < 1 ? (
            <Button
              onClick={() => handleDecrement(counter)}
              variant="contained"
              disabled
            >
              {DECREMENT}
            </Button>
          ) : (
            <Button
              onClick={() => handleDecrement(counter)}
              variant="contained"
            >
              {DECREMENT}
            </Button>
          )}
        </div>
      </div>
    </Grid>
  );
};

export default Counter;
