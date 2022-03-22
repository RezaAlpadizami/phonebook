const initialStateRegister = {
    login: {
      email: '',
      password: '',
    },
  };
  
  const registerReducer = (state = initialStateRegister, action) => {
    if (action.type === 'SET_FORM') {
      return {
        ...state,
        form: {
          ...state.form,
          [action.inputType]: action.inputValue,
        },
      };
    }
    return state;
  };

  export default registerReducer