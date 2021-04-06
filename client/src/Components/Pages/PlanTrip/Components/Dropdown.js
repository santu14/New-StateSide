import React, { useState } from "react";
import locations from "../../../../locations.json";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { makeStyles } from "@material-ui/core/styles";

const Dropdown = (props) => {
  

  const useStyles = makeStyles((theme) => ({
    icon: {
      color: theme.palette.text.secondary,
      marginRight: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <Autocomplete
        id='City, State'
        style={{ width: 225 }}
        options={locations}
        name='location'
        onChange={(event, value) => props.valueChange(value)}
        getOptionLabel={(option) => option.city + ", " + option.state}
        renderOption={(option) => {
          return (
            <span>
              {option.city}, {option.state}
            </span>
         
          );
        }}
       
        renderInput={(params) => (
          <TextField {...params} label='Destination' variant='outlined' />
        )}
      />
     
    </div>
  );
};
export default Dropdown;
