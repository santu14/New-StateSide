

const isAuthReducer = (state, action) => {
  console.log("action: ", action.type);
  switch (action.type) {
    case false:
      console.log("switch case change: ", false);
      return {isAuth: false}
        // state.isAuth = false

    case true:
        console.log("switch case change: ", true);
      return {isAuth: true}

        // state.isAuth = true

    default:
      return state.isAuth 
     
  }
};

export default isAuthReducer;
