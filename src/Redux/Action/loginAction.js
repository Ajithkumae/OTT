import * as storage from '../../Service/cookie';
export const actionTypes = {
  LOGIN: 'LOGIN',

};

export const setLogin = () => {
  return async dispatch => {
    await storage.setItem('userToken', 'xuyasxguyashgc');
    dispatch({
      type: actionTypes.LOGIN,
      token: 'xuyasxguyashgc',
    });
  };
};
