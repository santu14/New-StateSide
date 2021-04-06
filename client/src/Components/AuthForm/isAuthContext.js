
import React, { useState, createContext, useEffect, useReducer } from "react";
import API from "../../utils/API";
import isAuthReducer from '../reducers/isAuthReducer'

const AuthState = ({ children }) => {
 
const [state, dispatch] = useReducer(isAuthReducer, {isAuth: undefined})

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
    <IsAuthContext.Provider value={{state, checkAuth}}>
      {children}
    </IsAuthContext.Provider>
  );
};
export const IsAuthContext = createContext();
export default AuthState;
