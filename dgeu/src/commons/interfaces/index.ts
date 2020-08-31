export interface IArticle {
  title: string;
  imgUrl: string;
  linkUrl: string;
  linkOpinions: string;
  numberOpinions: number;
  rating: number;
  author: string;
  cover: string;
  price: string;
};

export interface IReview {
  id: string;
  author: string;
  authorImgUrl: string;
  summary: string;
  rating: number;
  revisionDate: string;
  comment: string;
  utilNumber: number;
  reviewUrl: string;
  date: number;
}

export interface IPriceFormat {
  id: number;
  product: string;
  price: number;
  selected: boolean;
}