const initialLoginReducer = {
  data: {
    info: 'tolong masukkan password anda',
    isLogin: true,
    token: '',
  },
  login: {
    email: '',
    password: '',
  },
};

const loginReducer = (state = initialLoginReducer, action) => {
  switch (action.type) {
    case 'LOGIN_TOKEN_ACCESS':
      console.log('value action', action.payload);
      return {
        ...state,
        data: {
          ...state.data,
          token: action.payload.token,
          id: action.payload.id,
          password: action.payload.password,
        },
      };

    case 'SET_FORM_LOGIN':
      return {
        ...state,
        login: {
          ...state.login,
          [action.inputType]: action.inputValue,
        },
      };
  }

  return state;
};

export default loginReducer;
