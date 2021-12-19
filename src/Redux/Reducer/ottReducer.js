import {actionTypes} from '../Action/ottAction';

const initialState = {
  charactersList: null,
  favouriteList: [],
  searchCharacterList: null,
};
const ottReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETCHARACTER:
      return {
        ...state,
        charactersList: action.data,
      };
    case actionTypes.SEARCHCHARACTER:
      return {
        ...state,
        searchCharacterList: action.data,
      };
    case actionTypes.ADDFAVOURITE:
      return {
        ...state,
        favouriteList: [...state.favouriteList, action.data],
      };
    case actionTypes.REMOVEFAVOURITE:
      return {
        ...state,
        favouriteList: action.data,
      };
    default:
      return state;
  }
};

export default ottReducer;
