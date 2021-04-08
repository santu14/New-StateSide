import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Grid, Link } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const SignUp = (props) => {
  const initialErrorFields = {
    error: false,
    email: false,
    firstName: false,
    lastName: false,
    password: false,
    passwordConfirm: false
  };
  const [errorFields, setErrorFields] = useState(initialErrorFields);

  const checkError = () => {
    if (props.errorHelper !== "") {
      setErrorFields({
        error: true,
        email: true,
        firstName: true,
        lastName: true,
        password: true,
        passwordConfirm: true,
      });
    }
    if (props.emailHelper !== "") {
      setErrorFields({ ...errorFields, email: true });
    }
    if (props.passwordHelper !== "") {
      setErrorFields({ ...errorFields, password: true });
    }
    if (props.passwordConfirmHelper !== "") {
      setErrorFields({ ...errorFields, password: true, passwordConfirm: true });
    }
  };
  useEffect(() => {
    setErrorFields(initialErrorFields);
    checkError();
  }, [props.helper]);
  return (
    <div>
      <Typography variant="h5">Sign Up</Typography>
      <form noValidate className={props.classes.form}>
        <Grid>
          {props.errorHelper !== "" && (
            <Alert severity="error">{props.errorHelper}</Alert>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={errorFields.name}
            helperText={props.emailHelper}
            label="First Name"
            name="firstName"
            autoComplete="first name"
            autoFocus
            onChange={props.handleInputChange}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={errorFields.name}
            helperText={props.emailHelper}
            label="Last Name"
            name="lastName"
            autoComplete="last name"
            autoFocus
            onChange={props.handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={errorFields.email}
            helperText={props.emailHelper}
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={props.handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={errorFields.password}
            helperText={props.passwordHelper}
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={props.handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={errorFields.passwordConfirm}
            helperText={props.passwordConfirmHelper}
            name="password_confirmation"
            label="Confirm Password"
            type="password"
            onChange={props.handleInputChange}
          />
        </Grid>

        <Button
          color="primary"
          type="submit"
          fullWidth
          variant="contained"
          className={props.classes.submit}
          onClick={props.submit}
        >
          Sign Up
        </Button>
        <Link variant="body2" name="signIn" onClick={props.switch}>
          {"Already have an account? Sign In"}
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
