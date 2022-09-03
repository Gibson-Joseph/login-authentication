
const initialState = {
  email: "",
  password: null,
  isAuth: false,
};

function loginReducer(state = initialState, action: any) {
  let myPayload = { ...action.payload };

  switch (action.type) {
    case "ADD_LOGIN_DATA": {
      return {
        ...state,
        email: myPayload.email,
        password: myPayload.password,
        isAuth: true,
      };
    }
    case "DELETE_LOGIN_DATA": {
      return {
        ...state,
        email: initialState.email,
        password: initialState.password,
        isAuth: initialState.isAuth,
      };
    }
    default:
      return state;
  }
}
export default loginReducer;
