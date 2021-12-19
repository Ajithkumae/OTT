import {baseUrl, character} from '../../Service/apiConfig';
import {ApiCall} from '../../Service/apis';

export const actionTypes = {
  GETCHARACTER: 'GETCHARACTER',
  ADDFAVOURITE: 'ADDFAVOURITE',
  REMOVEFAVOURITE: 'REMOVEFAVOURITE',
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
