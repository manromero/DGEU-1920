import { IArticle, IReview, IPriceFormat } from '../commons/interfaces';

export interface IInitialState {
  dataLoaded: boolean;
  title: string;
  subtitle: string;
  author: string;
  authorUrl: string;
  collectionName: string;
  collectionUrl: string;
  freeDelivery: string;
  fastDelivery: string;
  numberOpinions: number;
  rating: number;
  description: string;
  moreDescription: string;
  priceFormats: IPriceFormat[];
  othersCustomersArticles: IArticle[];
  sponsoredArticles1: IArticle[];
  undiscoveredArticles: IArticle[];
  sponsoredArticles2: IArticle[];
  flapNote: string;
  backCover: string;
  biography: string;
  // Product details
  pages: number;
  isbn10: string;
  isbn13: string;
  dimensions: string;
  weight: number;
  publisher: string;
  languaje: string;
  // End product details
  customerReviews: IReview[];
  internationalReviews: IReview[];
  // Active Tab
  activeTab: number;
};

export const initialState: IInitialState = {
  dataLoaded: false,
  title: "",
  subtitle: "",
  author: "",
  authorUrl: "",
  collectionName: "",
  collectionUrl: "",
  freeDelivery: "",
  fastDelivery: "",
  numberOpinions: 0,
  rating: 0,
  description: "",
  moreDescription: "",
  priceFormats: [],
  othersCustomersArticles: [],
  sponsoredArticles1: [],
  undiscoveredArticles: [],
  sponsoredArticles2: [],
  flapNote: "",
  backCover: "",
  biography: "",
  // Product details
  pages: 0,
  isbn10: "",
  isbn13: "",
  dimensions: "",
  weight: 0,
  publisher: "",
  languaje: "",
  // End product details
  customerReviews: [],
  internationalReviews: [],
  // Active Tab
  activeTab: 0
}

