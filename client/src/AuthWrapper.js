import React, { useState, useEffect, useContext } from "react";
import Login from "./Components/Pages/LoginPage";
import InternalApp from "./InternalApp"
import { IsAuthContext } from "./Components/AuthForm/isAuthContext";
function AuthWrapper() {
  const { state } = useContext(IsAuthContext);
    
    if (state.isAuth === true) {
      return (
        <div>
            <InternalApp  />
        </div>
      );
      } else {
        return (
          <div>
              <Login  />
          </div>
        
        )

  }
}

export default AuthWrapper;