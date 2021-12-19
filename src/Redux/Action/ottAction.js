import {baseUrl, character, search} from '../../Service/apiConfig';
import {ApiCall} from '../../Service/apis';

export const actionTypes = {
  GETCHARACTER: 'GETCHARACTER',
  ADDFAVOURITE: 'ADDFAVOURITE',
  REMOVEFAVOURITE: 'REMOVEFAVOURITE',
  SEARCHCHARACTER: 'SEARCHCHARACTER',
};

export const getCharacters = () => {
  return async dispatch => {
    new ApiCall()
      .getData(baseUrl + character)
      .then(async response => {
        dispatch({
          type: actionTypes.GETCHARACTER,
          data: response.data,
        });
      })
      .catch(ERROR => {
        console.log('error', ERROR);
      });
  };
};
export const searchCharacters = txt => {
  return async dispatch => {
    new ApiCall()
      .getData(baseUrl + search + txt)
      .then(async response => {
        dispatch({
          type: actionTypes.SEARCHCHARACTER,
          data: response.data,
        });
      })
      .catch(ERROR => {
        console.log('error', ERROR);
      });
  };
};

export const addFavourite = data => {
  return {
    type: actionTypes.ADDFAVOURITE,
    data: data,
  };
};
export const RemoveFavourite = data => {
  return {
    type: actionTypes.REMOVEFAVOURITE,
    data: data,
  };
};
