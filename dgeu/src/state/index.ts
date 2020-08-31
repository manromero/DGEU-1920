import { IArticle } from '../commons/interfaces';

interface InitialState {
  title: string;
  author: string;
  numberOpinions: number;
  rating: number;
  description: string;
  moreDescription: string;
  // TODO MANORMERO definir
  formats: any[];
  articles: IArticle[];
  // Nota de la solapa
  flapNote: string;
  backCover: string;
  biography: string;
};
