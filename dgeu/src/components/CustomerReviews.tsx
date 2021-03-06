import React, { useState } from 'react';

const CustomerReviews = () => {

  const [howToExpanded, setHowToExpanded] = useState(false);

  return (
    <div className="a-fixed-left-grid-col a-col-left" style={{}}>
      <h2>Opiniones de clientes</h2>
      <div>
        <div className="" style={{ float: "left" }}>
          <div className="a-fixed-left-grid AverageCustomerReviews a-spacing-small">
            <div style={{ paddingLeft: "105px" }}>
              <div className="a-fixed-left-grid-col a-col-left" style={{ width: "105px", marginLeft: "-105px", float: "left" }}>
                <i data-hook="average-star-rating" className="a-icon a-icon-star-medium a-star-medium-4-5 averageStarRating">
                  <span className="a-icon-alt">4,5 de 5 estrellas</span>
                </i>
              </div>
              <div className="a-fixed-left-grid-col aok-align-center a-col-right" style={{ paddingLeft: "0%", float: "left" }}>
                <span className="a-size-base a-nowrap">
                  <span data-hook="rating-out-of-text" className="a-size-medium a-color-base">4,5 de 5</span>
                </span>
              </div>
            </div>
          </div>
          <div data-hook="total-review-count" className="a-spacing-medium averageStarRatingNumerical">
            <span className="a-size-base a-color-secondary">
              990 valoraciones de clientes
          </span>
          </div>
        </div>
        <div style={{ float: "right" }}>
          <div>
            <span className="a-button a-button-base writeReviewButton cm-cr-button-wide" id="a-autoid-47">
              <span className="a-button-inner">
                <a href="https://www.amazon.es/review/create-review/ref=cm_cr_othr_d_wr_but_top?ie=UTF8&amp;channel=glance-detail&amp;asin=8408197401" data-hook="write-review-button" className="a-button-text" role="button" id="a-autoid-47-announce">
                  Escribir mi opinión
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
      <span className="cr-widget-Histogram">
        <div className="a-fixed-left-grid a-spacing-none">
          <div>
            <div className="a-fixed-left-grid-col a-col-left">
              <span className="a-declarative" data-action="reviews:filter-action:push-state" >
                <table id="histogramTable" className="a-normal a-spacing-none" role="presentation"></table>
                <table id="histogramTable" className="a-normal a-align-center a-spacing-base">
                  <tbody>
                    <tr data-reftag="" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;five_star&quot;, &quot;pageNumber&quot;:&quot;1&quot;}" className="a-histogram-row a-align-center">
                      <td className="aok-nowrap">
                        <span className="a-size-base">
                          <a className="a-link-normal 5star" title="El 69% de las reseñas tienen 5 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_5?ie=UTF8&amp;filterByStar=five_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                            5 estrellas
                          </a>
                        </span>
                        <span className="a-letter-space"></span>
                      </td>
                      <td className="a-span10">
                        <a className="a-link-normal" title="El 69% de las reseñas tienen 5 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_5?ie=UTF8&amp;filterByStar=five_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                          <div className="a-meter" aria-label="69%"><div className="a-meter-bar" style={{ width: "69%" }}></div></div>
                        </a>
                      </td>
                      <td className="a-text-right a-nowrap">
                        <span className="a-letter-space"></span>
                        <span className="a-size-base">
                          <a className="a-link-normal" title="El 69% de las reseñas tienen 5 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_5?ie=UTF8&amp;filterByStar=five_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                            69%
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr data-reftag="" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;four_star&quot;, &quot;pageNumber&quot;:&quot;1&quot;}" className="a-histogram-row a-align-center">
                      <td className="aok-nowrap">
                        <span className="a-size-base">
                          <a className="a-link-normal 4star" title="El 21% de las reseñas tienen 4 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_4?ie=UTF8&amp;filterByStar=four_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                            4 estrellas
                          </a>
                        </span>
                        <span className="a-letter-space"></span>
                      </td>
                      <td className="a-span10">
                        <a className="a-link-normal" title="El 21% de las reseñas tienen 4 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_4?ie=UTF8&amp;filterByStar=four_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                          <div className="a-meter" aria-label="21%"><div className="a-meter-bar" style={{ width: "21%" }}></div></div>
                        </a>
                      </td>
                      <td className="a-text-right a-nowrap">
                        <span className="a-letter-space"></span>
                        <span className="a-size-base">
                          <a className="a-link-normal" title="El 21% de las reseñas tienen 4 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_4?ie=UTF8&amp;filterByStar=four_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                            21%
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr data-reftag="" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;three_star&quot;, &quot;pageNumber&quot;:&quot;1&quot;}" className="a-histogram-row a-align-center">
                      <td className="aok-nowrap">
                        <span className="a-size-base">
                          <a className="a-link-normal 3star" title="El 6% de las reseñas tienen 3 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                            3 estrellas
                          </a>
                        </span>
                        <span className="a-letter-space"></span>
                      </td>
                      <td className="a-span10">
                        <a className="a-link-normal" title="El 6% de las reseñas tienen 3 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                          <div className="a-meter" aria-label="6%"><div className="a-meter-bar" style={{ width: "6%" }}></div></div>
                        </a>
                      </td>
                      <td className="a-text-right a-nowrap">
                        <span className="a-letter-space"></span>
                        <span className="a-size-base">
                          <a className="a-link-normal" title="El 6% de las reseñas tienen 3 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                            6%
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr data-reftag="" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;two_star&quot;, &quot;pageNumber&quot;:&quot;1&quot;}" className="a-histogram-row a-align-center">
                      <td className="aok-nowrap">
                        <span className="a-size-base">
                          <a className="a-link-normal 2star" title="El 2% de las reseñas tienen 2 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_2?ie=UTF8&amp;filterByStar=two_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                            2 estrellas
                          </a>
                        </span>
                        <span className="a-letter-space"></span>
                      </td>
                      <td className="a-span10">
                        <a className="a-link-normal" title="El 2% de las reseñas tienen 2 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_2?ie=UTF8&amp;filterByStar=two_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                          <div className="a-meter" aria-label="2%"><div className="a-meter-bar" style={{ width: "2%" }}></div></div>
                        </a>
                      </td>
                      <td className="a-text-right a-nowrap">
                        <span className="a-letter-space"></span>
                        <span className="a-size-base">
                          <a className="a-link-normal" title="El 2% de las reseñas tienen 2 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_2?ie=UTF8&amp;filterByStar=two_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                            2%
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr data-reftag="" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;one_star&quot;, &quot;pageNumber&quot;:&quot;1&quot;}" className="a-histogram-row a-align-center">
                      <td className="aok-nowrap">
                        <span className="a-size-base">
                          <a className="a-link-normal 1star" title="El 2% de las reseñas tienen 1 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_1?ie=UTF8&amp;filterByStar=one_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                            1 estrella
                          </a>
                        </span>
                        <span className="a-letter-space"></span>
                      </td>
                      <td className="a-span10">
                        <a className="a-link-normal" title="El 2% de las reseñas tienen 1 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_1?ie=UTF8&amp;filterByStar=one_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                          <div className="a-meter" aria-label="2%"><div className="a-meter-bar" style={{ width: "2%" }}></div></div>
                        </a>
                      </td>
                      <td className="a-text-right a-nowrap">
                        <span className="a-letter-space"></span>
                        <span className="a-size-base">
                          <a className="a-link-normal" title="El 2% de las reseñas tienen 1 estrellas" href="https://www.amazon.es/product-reviews/8408197401/ref=acr_dp_hist_1?ie=UTF8&amp;filterByStar=one_star&amp;reviewerType=all_reviews#reviews-filter-bar">
                            2%
                          </a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </span>
            </div>
          </div>
        </div>
        <div aria-live="polite" className="a-expander-container a-spacing-top-small a-expander-inline-container">
          <a className="a-expander-header a-declarative a-expander-inline-header a-link-expander" onClick={() => setHowToExpanded(!howToExpanded)}>
            <i className="a-icon a-icon-expand"></i>
            <span className="a-expander-prompt">¿Cómo calcula Amazon las valoraciones?</span>
          </a>
          {howToExpanded ? (
            <div aria-expanded="false" className="a-expander-content a-expander-inline-content a-expander-inner">
              Para calcular la clasificación global de estrellas y el desglose porcentual por estrella, no utilizamos un promedio simple. En su lugar, nuestro sistema considera aspectos como lo reciente que es la reseña y si el reseñador compró el artículo en Amazon. También analiza las reseñas para verificar la fiabilidad.
            </div>
          ) : null}
        </div>
      </span>
      <hr aria-hidden="true" className="a-spacing-top-medium a-divider-normal" />
    </div>
  );
}

export default CustomerReviews;