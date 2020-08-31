import { IInitialState, initialState } from '../state';
import { Action } from 'redux';

const reducer = (state: IInitialState = initialState, action: Action) => {
  return state;
}

export default reducer;