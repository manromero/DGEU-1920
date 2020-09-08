import { IInitialState, initialState } from '../state';
import { AnyAction } from 'redux';
import { AC_SET_PRODUCT_SELECTED, AC_INI_LOAD_DATA, AC_END_LOAD_DATA, AC_SET_ACTIVE_TAB } from '../actions';
import dataLoaded from '../state/data';

const reducer = (state: IInitialState = initialState, action: AnyAction) => {
  switch (action.type) {
    case AC_INI_LOAD_DATA:
      return { ...state, loading: true };
    case AC_END_LOAD_DATA:
      return dataLoaded;
    case AC_SET_PRODUCT_SELECTED:
      const newPriceFormats = state.priceFormats.map(e => {
        if (e.id === action.id) {
          return { ...e, selected: true };
        } else {
          return { ...e, selected: false };
        }
      })
      return { ...state, priceFormats: newPriceFormats };
    case AC_SET_ACTIVE_TAB:
      return { ...state, activeTab: action.activeTab };
    default:
      return state;
  }
}

export default reducer;