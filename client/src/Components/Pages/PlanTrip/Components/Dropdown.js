import React from "react";
import locations from "../../../../locations.json";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";


const Dropdown = (props) => {
  

  
  
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
            // <Grid container alignItems='center'>
            //   <Grid item>
            //     <LocationOnIcon className={classes.icon} />
            //   </Grid>
            //   <Grid item xs>

            //       <span

            //         style={{ fontWeight: 400 }}>
            //         {option.city},
            //       </span>

            //     <Typography variant='body2' color='textSecondary'>
            //     {option.state}
            //     </Typography>
            //   </Grid>
            // </Grid>
          );
        }}
        renderInput={(params) => (
          <TextField {...params} label='Destination' variant='outlined' />
        )}
      />
      {/* <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <select>
        {renderCities().map((city, key) => {
          return <option key={key}>{city.city}</option>;
        })}
      </select> */}
    </div>
  );
};
export default Dropdown;
