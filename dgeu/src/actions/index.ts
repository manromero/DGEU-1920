import { Dispatch } from "redux";

export const AC_SET_PRODUCT_SELECTED = "AC_SET_PRODUCT_SELECTED";
export const AC_INI_LOAD_DATA = "AC_INIT_LOAD_DATA";
export const AC_END_LOAD_DATA = "AC_END_LOAD_DATA";
export const AC_SET_ACTIVE_TAB = "AC_SET_ACTIVE_TAB";

export const acSetProductSelected = (id: number) => {
  return { type: AC_SET_PRODUCT_SELECTED, id };
};

const acIniLoadData = () => {
  return { type: AC_INI_LOAD_DATA };
}

const acEndLoadData = () => {
  return { type: AC_END_LOAD_DATA };
}

export const acSetActiveTab = (activeTab: number) => {
  return { type: AC_SET_ACTIVE_TAB, activeTab };
}

/**
 * Simulate to load data from an external service
 */
export const opeLoadData = () => (dispatch: Dispatch) => {
  // TODO manromero delete
  dispatch(acEndLoadData());
  // TODO manromero use
  // dispatch(acIniLoadData());
  // setTimeout(() => {
  //   dispatch(acEndLoadData());
  // }, 1500);
}