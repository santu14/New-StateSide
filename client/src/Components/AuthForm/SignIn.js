import React, {useState, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Alert from '@material-ui/lab/Alert';
import Typography from "@material-ui/core/Typography";

const SignIn = (props) => {
  const initialErrorFields = {
    error: false,
    email: false,
    password: false,
};
  const [errorFields, setErrorFields] = useState(initialErrorFields)

  const checkError = () => {
    
    if(props.errorHelper !== ""){
      setErrorFields({error: true, email: true, password: true})
    }
    if(props.emailHelper !== ""){
      setErrorFields({...errorFields, email: true})
    }
    if(props.passwordHelper !== ""){
      setErrorFields({...errorFields, password: true})
    }
     
  }
  useEffect(() => {
    setErrorFields(initialErrorFields);
    checkError()
  }, [props.helper])
  
  return (
    <div>
      <Typography variant="h5">Sign In</Typography>
      <form noValidate>
        {
        props.errorHelper !== "" && 
        <Alert severity="error">{props.errorHelper}</Alert>
        }
        <TextField
          variant="outlined"
          margin="normal"
          required
          error={errorFields.email}
          helperText={props.emailHelper}
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
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

        <Button
          color="primary"
          type="submit"
          fullWidth
          variant="contained"
          onClick={props.submit}
        >
          Sign In
        </Button>
        <Link variant="body2" name="signUp" onClick={props.switch}>
          {"Don't have an account? Sign Up"}
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
