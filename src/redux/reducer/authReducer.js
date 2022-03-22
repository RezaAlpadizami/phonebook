const initialLoginReducer = {
    token: '',
    name: '',
    password:''
  };
  
  const onLoginAction = (state = initialLoginReducer, action) => {
    if (action.type === 'LOGIN_TOKEN_ACCESS') {
      return {
        ...state,
        name: action.payload,
        password: action.payload,
        token: action.payload,
      }
    }
  
    return state
  }

  export default onLoginAction