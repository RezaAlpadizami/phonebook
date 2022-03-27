const initialLoginReducer = {
  data: {
    isLogin: true,
    token: '',
  },
  login: {
    email: '',
    password: '',
  },
  contaclist: []
};

const loginReducer = (state = initialLoginReducer, action) => {
  switch (action.type) {
    case 'LOGIN_TOKEN_ACCESS':
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

      case 'ADD_CONTACT' :
        return {

        }

  }

  return state;
};

export default loginReducer;
