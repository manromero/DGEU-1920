import React, { useState } from 'react';
import Review from './Review';

import { IReview } from '../commons/interfaces';

interface IProps {
  internationalReviews: IReview[]
}

const ReviewsInternationals = ({ internationalReviews }: IProps) => {

  let reviews = internationalReviews.map(e => ({ ...e }));

  const [viewAll, setViewAll] = useState(false);

  if (!viewAll) {
    reviews = reviews.filter((e, index) => index < 2);
  }

  return (
    <span className="cr-widget-DesktopGlobalReviews" data-hook="cr-widget-DesktopGlobalReviews">
      <div className="a-divider a-divider-section a-spacing-extra-large">
        <div className="a-divider-inner"></div>
      </div>
      <span className="global-reviews-all">
        <div id="reviews-medley-global-expand-head" data-hook="reviews-medley-global-head" className="a-section global-reviews-header">
          <h3 data-hook="dp-global-reviews-header" className="a-spacing-base">
            Las mejores reseñas internacionales
          </h3>
          <div className="a-section cr-list-loading reviews-loading aok-hidden"></div>
        </div>
        <div className="a-row a-spacing-large">
          <div className="a-section global-reviews-content celwidget" data-csa-c-id="pq4ci3-zc10ve-8nedtl-d2jl28" data-cel-widget="">
            <div id="cm-cr-global-review-list" data-hook="global-customer-reviews-widget" className="a-section global-review-views review-views celwidget" data-csa-c-id="k8cqko-srl8x5-47yszm-x4cy4h" data-cel-widget="cm-cr-global-review-list">
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

              <div id="R6B7W3KBXTLWO" data-hook="review" className="a-section review aok-relative cr-desktop-review-page-1 aok-hidden">
                <div id="R6B7W3KBXTLWO-review-card" className="a-row a-spacing-none">
                  <div id="customer_review_foreign-R6B7W3KBXTLWO" className="a-section celwidget" data-csa-c-id="6vv8s4-80uty7-xv1lod-mpaoog" data-cel-widget="customer_review_foreign-R6B7W3KBXTLWO">
                    <div data-hook="genome-widget" className="a-row a-spacing-mini">
                      <div className="a-profile" data-a-size="small">
                        <div aria-hidden="true" className="a-profile-avatar-wrapper">
                          <div className="a-profile-avatar">
                            <img src="./Yo, Julia_ Premio Planeta 2018 Autores Españoles e Iberoamericanos_ Amazon.es_ Posteguillo, Santiago_ Libros_files/default._CR0,0,1024,1024_SX48_(1).png" className="" data-src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
                            <noscript>
                              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
                            </noscript>
                          </div>
                        </div>
                        <div className="a-profile-content">
                          <span className="a-profile-name">Imtz01</span>
                        </div>
                      </div>
                    </div>
                    <div className="a-row a-spacing-none">
                      <i data-hook="cmps-review-star-rating" className="a-icon a-icon-star a-star-5 review-rating">
                        <span className="a-icon-alt">
                          5,0 de 5 estrellas
                        </span>
                      </i>
                      <span className="a-letter-space"></span>
                      <span data-hook="review-title" className="a-size-base review-title a-color-base review-title-content a-text-bold">
                        <span>De 100% atractiva</span>
                      </span>
                    </div>
                    <span data-hook="review-date" className="a-size-base a-color-secondary review-date">
                      Revisado en México el 4 de marzo de 2019
                    </span>
                    <div className="a-row a-spacing-mini review-data review-format-strip">
                      <span data-hook="avp-badge-linkless" className="a-size-mini a-color-state a-text-bold">
                        Compra verificada
                      </span>
                    </div>
                    <div className="a-row a-spacing-small review-data">
                      <span data-hook="review-body" className="a-size-base review-text">
                        <div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" className="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style={{ maxHeight: "300px" }}>
                          <div data-hook="review-collapsed" aria-expanded="false" className="a-expander-content reviewText review-text-content a-expander-partial-collapse-content" >
                            <span>
                              Posteguillo nos vuelve a llevar a su estilo , emocionante, histórico, descriptivo que tan bien resultado tuvo en sus dos grandes y recomemdables trilogias, la del asesinato del emperador y Africanus.. ahora nos lleva con Severo El iniciador de una dinastía de emperadores, pero sobretodo de Julia que parece ser la clave para lograr lo que parecía imposible.. un imperio y una dinastía.. leanla, no se arrepentirán
                            </span>
                          </div>
                          <div className="a-expander-header a-expander-partial-collapse-header" style={{ opacity: "0", display: "none" }}>
                            <div className="a-expander-content-fade"></div>
                            <a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" className="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Leer más&quot;, &quot;collapse_prompt&quot;:&quot;Leer menos&quot;}">
                              <i className="a-icon a-icon-extender-expand"></i>
                              <span className="a-expander-prompt">
                                Leer más
                              </span>
                            </a>
                          </div>
                        </div>
                      </span>
                    </div>
                    <div data-hook="review-comments" className="a-row review-comments cr-vote-action-bar">
                      <span className="cr-vote" data-hook="review-voting-widget">
                        <div className="a-row a-spacing-small">
                          <span data-hook="helpful-vote-statement" className="a-size-base a-color-tertiary cr-vote-text">A una persona le ha parecido esto útil</span>
                        </div>
                        <div className="cr-helpful-button cr-vote-component aok-float-left">
                          <span className="a-declarative" data-action="reviews:vote-action" >
                            <span className="a-button a-button-base" id="a-autoid-40">
                              <span className="a-button-inner">
                                <input data-hook="vote-helpful-button" className="a-button-input" type="submit" value="Marcar esta revisión como útil BOTÓN" aria-labelledby="a-autoid-40-announce" />
                                <span className="a-button-text" aria-hidden="true" id="a-autoid-40-announce">
                                  <div className="cr-helpful-text">
                                    Útil
                                  </div>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                        <span className="cr-vote-feedback cr-vote-component aok-hidden">Enviando comentario...</span>
                        <span data-hook="vote-success-message" className="cr-vote-success cr-vote-component aok-hidden">
                          <div className="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes">
                            <div className="a-box-inner a-alert-container">
                              <i className="a-icon a-icon-alert"></i>
                              <div className="a-alert-content">Gracias por su comentario.</div>
                            </div>
                          </div>
                        </span>
                        <span className="cr-vote-error cr-vote-component aok-hidden">
                          <div className="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert">
                            <div className="a-box-inner a-alert-container">
                              <i className="a-icon a-icon-alert"></i>
                              <div className="a-alert-content">Lo sentimos, no hemos podido registrar tu voto. Vuelva a intentarlo</div>
                            </div>
                          </div>
                        </span>
                      </span>
                      <span className="cr-footer-line-height">
                        <span>
                          <i className="a-icon a-icon-text-separator" role="img" aria-label="|"></i>
                          <span className="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_freport&amp;csrfT=ggkg1UXlBpZVPnsGAXQaUwDEbEOF3M%2BCVluilagAAAABAAAAAF9H1UxyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R25YMHNZJA356H&amp;sessionId=259-6544150-3296161&quot;,&quot;height&quot;:&quot;380&quot;}">
                            <a className="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="https://www.amazon.es/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_freport&amp;csrfT=ggkg1UXlBpZVPnsGAXQaUwDEbEOF3M%2BCVluilagAAAABAAAAAF9H1UxyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R25YMHNZJA356H&amp;sessionId=259-6544150-3296161">Informar de un abuso</a>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="cr-pagination-footer-2" className="a-section a-spacing-top-extra-large" onClick={() => setViewAll(!viewAll)}>
                {viewAll ? (
                  <a className="a-link-emphasis a-text-bold">Ver menos</a>
                ) : (
                    <a className="a-link-emphasis a-text-bold">Ver todas las reseñas internacionales</a>
                  )}
              </div>
            </div>
          </div>
        </div>
      </span>
    </span>
  );
}

export default ReviewsInternationals;