import React, { useState, useContext } from "react";
import API from "../../utils/API";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { IsAuthContext } from "./isAuthContext";
const useStyles = makeStyles((theme) => ({
  fontcolor: {
    color: "#BB86FC",
    "&:hover": {
      color: "#BB90FF",
    },
  },
  root: {
    height: "100vh",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#BB86FC",
    "&:hover": {
      backgroundColor: "#BB90FF",
    },
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#BB86FC",
    },
    type: "dark",
  },
});
const AuthForm = (props) => {

  
    // ------------------------------- Auth -------------------------------------------------
  const initialFormState = {
    firstName: "",
    lastName:"",
    email: "",
    password: "",
  };
  // Set up our useState hook
  const [formState, setFormState] = useState(initialFormState);

  // Bring in our global context items for checking authorization status
  const { checkAuth } = useContext(IsAuthContext);

  // On change event handler
  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  //  Sign In button handler
  const submitSignIn = (e) => {
    e.preventDefault();
    const { email, password } = formState;
    setHelperText(initialHelperState);
    // console.log({ email: email, password: password });

    API.signIn({ email: email, password: password }).then(({ data }) => {
        // console.log("data: ", data);
        errorHandler(data);
        checkAuth();
    });
  };
  //  Sign Up button handler

  const submitSignUp = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, password_confirmation } = formState;
    setHelperText(initialHelperState);
    // console.log({ email: email, password: password });

    API.signUp({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    }).then((res) => {
      // console.log(res.data);
      errorHandler(res.data);
      checkAuth();
      
    });
  };
  // ----------------------- Form switch -----------------------------

  const [formType, setFormType] = useState("signIn");
  
  // Function for switching between forms
  const switchForm = (e) => {
    e.preventDefault();
    setHelperText(initialHelperState)
    setFormType(e.target.name);
  };

  // ----------------------- Error handling -----------------------------

  const initialHelperState = {
        error: "",
        email: "",
        password: "",
        passwordConfirm: ""
  };
  const [helperText, setHelperText] = useState(initialHelperState);

  
  const errorHandler =  (res) => {
    const  error =  res.errors;
    // console.log("current errors: ", error);
    // console.log("current text: ", helperText);
    // if we have errors we push them to our helperText state
    if (error){
        error.forEach(err => {
            if (err.error) {setHelperText({...helperText, error: err.error})}
            if (err.email) {setHelperText({...helperText,email: err.email})}
            if (err.password) {setHelperText({...helperText, password: err.password})}
            if (err.passwordConfirm) {setHelperText({...helperText, passwordConfirm: err.passwordConfirm})}
             
        });
    
    } else {
      setFormType("signIn")
    }
   
  };
 
  const { error, email, password, passwordConfirm } = helperText;
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>

      {formType === "signIn" && (
        <SignIn
          handleInputChange={handleInputChange}
          submit={submitSignIn}
          switch={switchForm}
          helper={helperText}
          errorHelper={error}
          emailHelper={email}
          passwordHelper={password}
          classes={classes}

        />
      )}
      {formType === "signUp" && (
        <SignUp
          handleInputChange={handleInputChange}
          submit={submitSignUp}
          switch={switchForm}
          helper={helperText}
          errorHelper={error}
          emailHelper={email}
          passwordHelper={password}
          passwordConfirmHelper={passwordConfirm}
          classes={classes}

        />
      )}
      </ThemeProvider>
    </div>
  );
};

export default AuthForm;
