import React, { useState } from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    fontSize: 19,
  },
}));

const Counter = () => {
  const classes = useStyles();

  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    counter < 0 ? setCounter(counter) : setCounter(counter - 1);
  };

  return (
    <Grid direction="container">
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          {counter < 1 ? "zero" : counter}
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <div className={classes.root}>
          <Button
            onClick={() => Increment()}
            variant="contained"
            color="secondary"
          >
            Increment
          </Button>
          {counter < 0 ? (
            <Button onClick={() => Decrement()} variant="contained" disabled>
              Decrement
            </Button>
          ) : (
            <Button onClick={() => Decrement()} variant="contained">
              Decrement
            </Button>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default Counter;
