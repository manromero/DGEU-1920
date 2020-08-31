export const AC_SET_PRODUCT_SELECTED = "AC_SET_PRODUCT_SELECTED";

export const acSetProductSelected = (id: number) => {
  return { type: AC_SET_PRODUCT_SELECTED, id }
};