import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  path: {
    width: "175px",
    height: "175px",
    marginBottom: "36px",
  },
}));

function CircularProgressWithLabel(props) {
  const classes = useStyles();

  let percentage = Math.floor((props.statesBeenTo / 50) * 100);
  if(percentage === isNaN){
    percentage = 0
  }
  return (
    <Grid container justify="center">
      <CircularProgressbar
        className={classes.path}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: "white",
          trailColor: "#BB86FC",
          strokeLinecap: "butt",
          textSize: "16px",
          marginBottom: "37px",
          textColor: "#BB86FC",
        })}
        value={percentage}
        text={`${percentage}%`}
      />
    </Grid>
  );
}

export default CircularProgressWithLabel;
