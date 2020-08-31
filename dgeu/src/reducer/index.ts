import { IInitialState, initialState } from '../state';
import { AnyAction } from 'redux';
import { AC_SET_PRODUCT_SELECTED } from '../actions';

const reducer = (state: IInitialState = initialState, action: AnyAction) => {
  switch (action.type) {
    case AC_SET_PRODUCT_SELECTED:
      const newPriceFormats = state.priceFormats.map(e => {
        if (e.id === action.id) {
          return { ...e, selected: true };
        } else {
          return { ...e, selected: false };
        }
      })
      return { ...state, priceFormats: newPriceFormats };
    default:
      return state;
  }
}

export default reducer;