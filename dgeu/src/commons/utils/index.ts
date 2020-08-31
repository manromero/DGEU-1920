
export const calculateStartsClass = (rating: number) => {
  let startIcon = "a-star-0";
  if (rating > 0.5 && rating <= 1.5) {
    startIcon = "a-star-1";
  } else if (rating > 1.5 && rating <= 2.5) {
    startIcon = "a-star-2";
  } else if (rating > 2.5 && rating <= 3.5) {
    startIcon = "a-star-3";
  } else if (rating > 3.5 && rating <= 4.5) {
    startIcon = "a-star-4";
  } else if (rating > 4.5 && rating <= 5.5) {
    startIcon = "a-star-5";
  }
  return startIcon;
}