import React, { useState } from 'react';
import Review from './Review';

const ReviewsCustomers = () => {

  let reviews = [
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

  const [viewAll, setViewAll] = useState(false);

  if (!viewAll) {
    reviews = reviews.filter((e, index) => index < 2);
  }

  return (
    <span className="cr-widget-FocalReviews" data-hook="cr-widget-FocalReviews">
      <a id="customer-reviews-content" aria-label="Reseñas más importantes" className="a-link-normal celwidget" href="https://www.amazon.es/Yo-Julia-Planeta-Espa%C3%B1oles-Iberoamericanos/dp/8408197401/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;crid=2IKO067U954NA&amp;dchild=1&amp;keywords=yo+julia&amp;qid=1598543175&amp;sprefix=yo+julia%2Caps%2C210&amp;sr=8-1#" data-csa-c-id="mo7j3r-rkgnlc-jklna0-ij075d" data-cel-widget="customer-reviews-content"></a>
      <div id="cm-cr-dp-review-header" className="a-section a-spacing-small"></div>
      <div id="cm-cr-dp-review-sort-type" data-reftag="cm_cr_dp_d_fltrs_srt" className="a-section a-spacing-small">
        <span className="a-declarative" data-action="reviews:filter-action:change" >
          <span className="a-dropdown-container">
            <select name="" id="cm-cr-sort-dropdown" data-action="a-dropdown-select" className="a-native-dropdown a-declarative">
              <option value="helpful" data-a-css-className="cm-cr-sort-order-option">
                Reseñas más importantes
              </option>
              <option value="recent" data-a-css-className="cm-cr-sort-order-option">
                Más recientes
              </option>
            </select>
            <span data-a-className="cm-cr-dp-filter-dropdown" className="a-button a-button-dropdown a-button-small cm-cr-dp-filter-dropdown" aria-hidden="true" id="a-autoid-23" style={{ minWidth: "0%" }}>
              <span className="a-button-inner">
                <span className="a-button-text a-declarative" data-action="a-dropdown-button" role="button" aria-hidden="true" id="a-autoid-23-announce">
                  <span className="a-dropdown-prompt">
                    Reseñas más importantes
                  </span>
                </span>
                <i className="a-icon a-icon-dropdown"></i>
              </span>
            </span>
          </span>
        </span>
      </div>
      <span className="cr-translate-cta"></span>
      <div className="a-row">
        <div className="a-section a-spacing-extra-large a-spacing-top-medium a-text-center review-load-error aok-hidden">
          <div className="a-box a-alert a-alert-error cr-error" aria-live="assertive" role="alert">
            <div className="a-box-inner a-alert-container">
              <h4 className="a-alert-heading">Ha surgido un problema al filtrar las opiniones justo en este momento. Vuelva a intentarlo en otro momento.</h4>
              <i className="a-icon a-icon-alert"></i>
              <div className="a-alert-content"></div>
            </div>
          </div>
        </div>
        <div id="cm-cr-dp-reviews-loading-wrapper" className="a-row a-spacing-medium aok-hidden">
          <div className="a-spinner-wrapper cr-reviews-loading aok-hidden">
            <span className="a-spinner a-spinner-medium"></span>
          </div>
        </div>
        <div className="a-section a-spacing-extra-large reviews-content filterable-reviews-content celwidget" data-csa-c-id="hhykyl-40wor-8d0xfm-wlh0ba" data-cel-widget="">
          <div id="cm-cr-dp-review-list" data-hook="top-customer-reviews-widget" className="a-section review-views celwidget" data-csa-c-id="tqp5wy-5otbre-vy1hqw-ysd8sr" data-cel-widget="cm-cr-dp-review-list">
            {reviews.map(rev => (
              <Review
                id={rev.id}
                author={rev.author}
                authorImgUrl={rev.authorImgUrl}
                summary={rev.summary}
                rating={rev.rating}
                revisionDate={rev.revisionDate}
                comment={rev.comment}
                utilNumber={rev.utilNumber}
                reviewUrl={rev.reviewUrl}
              />
            ))}
          </div>
        </div>
      </div>
      <div id="reviews-medley-footer" data-hook="reviews-medley-footer" className="a-section">
        <div className="a-row"></div>
        <div className="a-row a-spacing-extra-large" onClick={() => setViewAll(!viewAll)}>
          {viewAll ? (
            <a className="a-link-emphasis a-text-bold">Ver menos</a>
          ) : (
              <a className="a-link-emphasis a-text-bold">Ver todas las reseñas de España</a>
            )}
        </div>
      </div>
    </span>
  );
}

export default ReviewsCustomers;