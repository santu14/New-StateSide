
import React, {  createContext, useEffect, useReducer } from "react";
import API from "../../utils/API";
import isAuthReducer from '../reducers/isAuthReducer'
import Cookies from "js-cookie";
const AuthState = ({ children }) => {
 
const [state, dispatch] = useReducer(isAuthReducer, {isAuth: undefined})

  const encodedID = Cookies.getJSON("user");
  const decodeArr = encodedID.split('"');
  const userID = decodeArr[1];

const checkAuth = () => {
  API.checkAuth().then((data) => {
    console.log("checkAuth func: ", data.data);
    dispatch({type: data.data})
  })
}
useEffect(() => {
  
 checkAuth()
}, [])

  return (
    <IsAuthContext.Provider value={{state, checkAuth, userID}}>
      {children}
    </IsAuthContext.Provider>
  );
};
export const IsAuthContext = createContext();
export default AuthState;
