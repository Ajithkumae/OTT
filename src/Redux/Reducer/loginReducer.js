import {actionTypes} from '../Action/loginAction';
const initialState = {
  userName: null,
  userToken: null,
};
console.log("AAa",initialState);
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        userName: action.id,
        userToken: action.token,
      };
    default:
      return state;
  }
};

export default loginReducer;
