import React, {  useContext } from "react";
import Button from "@material-ui/core/Button";
import API from '../../utils/API'
import { IsAuthContext } from "./isAuthContext";

const SignOut = () => {
  const {checkAuth} = useContext(IsAuthContext);

  const submitSignOut = (e) => {
    API.signOut().then((res) => {
        console.log(res);
        
    }).then(() => {
      checkAuth();
    })
}
  return (
    
      <Button
        color="secondary"
        type="submit"
        variant="contained"
        onClick={submitSignOut}
      >
        Sign out
      </Button>
   
  );
};

export default SignOut;
