import React, { useState } from "react";
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

  const [counter, setCounter] = useState(props.counter.value);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    counter < 0 ? setCounter(counter) : setCounter(counter - 1);
  };

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
          {counter < 1 ? "zero" : counter}
        </Paper>

        <div className={classes.root}>
          <Button
            onClick={() => Increment()}
            variant="contained"
            color="secondary"
          >
            {INCREMENT}
          </Button>
          {counter < 1 ? (
            <Button onClick={() => Decrement()} variant="contained" disabled>
              {DECREMENT}
            </Button>
          ) : (
            <Button onClick={() => Decrement()} variant="contained">
              {DECREMENT}
            </Button>
          )}
        </div>
      </div>
    </Grid>
  );
};

export default Counter;
