import React, {  useContext } from "react";
import Button from "@material-ui/core/Button";
import API from '../../utils/API'
import ListItemText from "@material-ui/core/ListItemText";

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
    <ListItemText
        primary='Logout'
        onClick={submitSignOut}>
    </ListItemText>
      
   
  );
};

export default SignOut;
