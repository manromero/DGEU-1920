import { IArticle, IReview } from '../commons/interfaces';

export interface IInitialState {
  title: string;
  author: string;
  numberOpinions: number;
  rating: number;
  description: string;
  moreDescription: string;
  // TODO MANORMERO definir
  formats: any[];
  articles: IArticle[];
  flapNote: string;
  backCover: string;
  biography: string;
  customerReviews: IReview[];
  internationalReviews: IReview[];
};

const customerReviews: IReview[] = [
  {
    id: "R1NCBWWFLGHUY5",
    author: "Plauto",
    authorImgUrl: "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png",
    summary: "No es el mejor Posteguillo",
    rating: 3.0,
    revisionDate: "Revisado en España el 4 de diciembre de 2018",
    comment: "Me he leido las otras dos trilogías romanas de Posteguillo, y he de decir en honor a la verdad, que como la primera de Escipión el africano no he vuelto a ver. Para mi gusto las legiones malditas el segundo libro de esa trilogía es de lo mejor que hay en novela histórica o en historia novelada como gustan llamarla otros a lo que hace Santiago Posteguillo. Pero con Yo Julia ha bajado muchísimo el nivel, para lo que él ha demostrado que puede hacer, esta novela está muy por debajo. Si fuera otro autor quizás le daría cuatro estrellas, pero un autor capaz de hacer una maravilla como la trilogía de Escipión no puede defraudar así, ha ido en descenso desde la primera trilogía y no para de perder calidad, es una pena porque admiro sus obras y espero con ansia una serie de televisión sobre sus novelas. Para los que le seguimos desde el principio, que somos muchos ha sido una decepción.",
    utilNumber: 53,
    reviewUrl: "https://www.amazon.es/gp/profile/amzn1.account.AF7VZANIMJ6KNCMNBJ3LAP3YDLMA/ref=cm_cr_dp_d_gw_tr?ie=UTF8"
  },
  {
    id: "R3EQ8ZKF7VNQSS",
    author: "Leñero",
    authorImgUrl: "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png",
    summary: "Mediocre",
    rating: 2.0,
    revisionDate: "Revisado en España el 20 de diciembre de 2018",
    comment: "He leído la trilogía de Escipión y la que hizo con los emperadores hispanos.  Esta es más de lo mismo, solo que bastante peor.  En realidad es una versión novelada de lo que puedes encontrarte en la Wikipedia, carente de ritmo y totalmente plana y carente de interés. Sinceramente no me parece merecedora de un premio planeta",
    utilNumber: 8,
    reviewUrl: "https://www.amazon.es/gp/profile/amzn1.account.AFRUEPB2MVFR2DTAP7SMLZK55L6A/ref=cm_cr_dp_d_gw_tr?ie=UTF8"
  },
  {
    id: "RWFT9KVRRTUNQ",
    author: "María",
    authorImgUrl: "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/6c7b45b8-92ee-4e5b-a966-92dd2b94ca82._CR140,0,844,844_SX48_.jpg",
    summary: "Buen libro",
    rating: 5.0,
    revisionDate: "Revisado en España el 12 de noviembre de 2018",
    comment: "El libro físicamente mide 23x15, con 704 páginas, no es cómodo para leer en la cama... En cuánto al contenido, ya estoy enganchada! aunque sólo llevo unas 50 páginas, sabía que iba a gustarme.\nSantiago Posteguillo documenta genial sus libros de la Roma clásica, aparte de ser muy ameno.\nMe alegro de que le hayan dado el Planeta a una historia de humanidades, ya era hora!",
    utilNumber: 21,
    reviewUrl: "https://www.amazon.es/gp/customer-reviews/RWFT9KVRRTUNQ/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=8408197401"
  }
];

const internationalReviews: IReview[] = [
  {
    id: "R1TQ1WB6V34Y4O",
    author: "Kikealca",
    authorImgUrl: "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/d24ec5a2-e26f-415f-a747-d6502a320189._CR62,0,375,375_SX48_.jpg",
    summary: "If you love Rome, you will love this.",
    rating: 4.0,
    revisionDate: "Revisado en Reino Unido el 25 de noviembre de 2018",
    comment: "I love Santiago Posteguillo. I think I have read all of his novels. I like this one, but maybe not as much as the previous ones. True the previous ones were magnificent, in my opinion, so the bar was very high, but I felt a bit like “is it that it?” I missed some depth, some stories did not develop at the same rythm, and the end....I am being selfish now, but it could have gone further in their lives. Nevertheless, a great book.",
    utilNumber: 2,
    reviewUrl: "https://www.amazon.es/gp/profile/amzn1.account.AGVPAXXL3ROR2QVOX3PAU75PYYNQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8"
  },
  {
    id: "R3EQ8ZKF7VNQSS",
    author: "Angel Butron",
    authorImgUrl: "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png",
    summary: "muy buen libro",
    rating: 5.0,
    revisionDate: "Revisado en Reino Unido el 30 de septiembre de 2019",
    comment: "lo super recomiendo! me encanto! soy fan de Julia ahora :)",
    utilNumber: 5,
    reviewUrl: "https://www.amazon.es/gp/customer-reviews/R2J0RIC944N4TK/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=8408197401"
  },
  {
    id: "R3EQ8ZKF7VNQSS",
    author: "Isa",
    authorImgUrl: "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png",
    summary: "mejorable",
    rating: 3.0,
    revisionDate: "Revisado en Argentina el 15 de noviembre de 2018",
    comment: "Aunque es fácil de leer, en mi opinión la forma de escribir es algo infantil. Rápido de leer pero prosa mejorable.",
    utilNumber: 18,
    reviewUrl: "https://www.amazon.es/gp/customer-reviews/R2M74YCW4OOV71/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=8408197401"
  }
];

export const initialState: IInitialState = {
  title: "Yo, Julia: Premio Planeta 2018 (Autores Españoles e Iberoamericanos)(Español) Tapa dura – 6 noviembre 2018",
  author: "Santiago Posteguillo",
  numberOpinions: 990,
  rating: 4.5,
  description: "192 d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más ambicioso: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado: Albino en Britania, Severo en el Danubio o Nigro en Siria. Cómodo retiene a sus esposas para evitar su rebelión y Julia, la mujer de Severo, se convierte así en rehén.",
  moreDescription: "De pronto, Roma arde. Un incendio asola la ciudad. ¿Es un desastre o una oportunidad? Cinco hombres se disponen a luchar a muerte por el poder. Creen que la partida está a punto de empezar. Pero para Julia la partida ya ha empezado. Sabe que solo una mujer puede forjar una dinastía.",
  // TODO MANORMERO definir
  formats: [],
  articles: [],
  flapNote: "92 d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más grande: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado: Albino en Britania, Severo en el Danubio o Nigro en Siria. Cómodo retiene a sus esposas para evitar su rebelión y Julia, la mujer de Severo, se convierte así en rehén. De pronto, Roma arde. Un incendio asola la ciudad. ¿Es un desastre o una oportunidad? Cinco hombres se disponen a luchar a muerte por el poder. Creen que la partida está a punto de empezar. Pero para Julia la partida ya ha empezado. Sabe que solo una mujer puede forjar una dinastía.",
  backCover: "92 d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más grande: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado: Albino en Britania, Severo en el Danubio o Nigro en Siria. Cómodo retiene a sus esposas para evitar su rebelión y Julia, la mujer de Severo, se convierte así en rehén. De pronto, Roma arde. Un incendio asola la ciudad. ¿Es un desastre o una oportunidad? Cinco hombres se disponen a luchar a muerte por el poder. Creen que la partida está a punto de empezar. Pero para Julia la partida ya ha empezado. Sabe que solo una mujer puede forjar una dinastía.",
  biography: "Santiago Posteguillo es profesor de lengua y literatura en la Universidad Jaume I de Castellón. Estudió literatura creativa en Estados Unidos y lingüística, análisis del discurso y traducción en el Reino Unido. De 2006 a 2009 publicó su trilogía Africanus sobre Escipión y Aníbal y de 2011 a 2016 la trilogía sobre el emperador de origen hispano Marco Ulpio Trajano. Ha sido galardonado por la semana de novela histórica de Cartagena, obtuvo el Premio de las Letras de la Comunidad Valenciana en 2010 y el Premio Internacional de Novela Histórica de Barcelona en 2014. En 2015 fue proclamado escritor del año por la Generalitat  Valenciana. Entre 2012 y 2017 publicó también tres volúmenes de relatos sobre la historia de la literatura muy elogiados por crítica y público. Santiago Posteguillo es Doctor por la Universidad de Valencia y ha impartido seminarios sobre ficción histórica en diversas universidades europeas y de América Latina. En 2018 ha sido profesor invitado del Sidney Sussex College de la Universidad de Cambridge. Yo, Julia, su última novela, rescata del olvido la vida y la memoria de la emperatriz más poderosa de la antigua Roma, una mujer que transformó su entorno y cambió el curso de la historia para siempre.",
  customerReviews: customerReviews,
  internationalReviews: internationalReviews
}

