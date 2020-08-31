import { IReview } from "../interfaces";

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

export const sortReviewMostImportant = (review1: IReview, review2: IReview) => {
  if (review1.utilNumber >= review2.utilNumber) {
    return -1;
  } else {
    return 1;
  }
}

export const sortReviewDate = (review1: IReview, review2: IReview) => {
  if (review1.date >= review2.date) {
    return -1;
  } else {
    return 1;
  }
}