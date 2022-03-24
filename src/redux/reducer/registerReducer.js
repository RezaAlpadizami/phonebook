const initialStateRegister = {
    name: '',
    email: '',
    password: '',
    confirmPasword: '',

};

const registerReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_FORM_REGISTER') {
    return {
      ...state,
      [action.inputType]: action.inputValue,
    };
  }
  return state;
};

export default registerReducer;
