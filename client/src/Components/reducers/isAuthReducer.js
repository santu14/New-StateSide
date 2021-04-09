
const isAuthReducer = (state, action) => {
 
  switch (action.type) {
    case false:
      return {isAuth: false}
    case true:  
      return {isAuth: true}
    default:
      return state.isAuth 
     
  }
};

export default isAuthReducer;
