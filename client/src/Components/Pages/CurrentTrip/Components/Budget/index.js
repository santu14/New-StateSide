import React from "react";

import Typography from "@material-ui/core/Typography";
import Title from "../../../../Title";


export default function Deposits(props) {



  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component='p' variant='h4'>
        ${props.budget}
      </Typography>
    </React.Fragment>

  );
}