import React from 'react';

const ProductDetails = () => {
  return (
    <div id="detailBulletsWrapper_feature_div" data-feature-name="detailBullets" data-template-name="detailBullets" className="a-section feature detail-bullets-wrapper bucket" data-cel-widget="detailBulletsWrapper_feature_div">
      <hr className="a-divider-normal bucketDivider" />
      <h2>Detalles del producto</h2>
      <span className="disclaim"></span>
      <div id="detailBullets_feature_div">
        <ul className="a-unordered-list a-nostyle a-vertical a-spacing-none detail-bullet-list">
          <li>
            <span className="a-list-item">
              <span className="detail-bullet-label a-text-bold">Tapa dura:</span>
              <span>704 páginas</span>
            </span>
          </li>
          <li>
            <span className="a-list-item">
              <span className="detail-bullet-label a-text-bold">ISBN-10:</span>
              <span>8408197401</span>
            </span>
          </li>
          <li>
            <span className="a-list-item">
              <span className="detail-bullet-label a-text-bold">ISBN-13:</span>
              <span>978-8408197409</span>
            </span>
          </li>
          <li>
            <span className="a-list-item">
              <span className="detail-bullet-label a-text-bold">Dimensiones del producto:</span>
              <span>15 x 5 x 23 cm</span>
            </span>
          </li>
          <li>
            <span className="a-list-item">
              <span className="detail-bullet-label a-text-bold">Peso del producto:</span>
              <span>934 g</span>
            </span>
          </li>
          <li>
            <span className="a-list-item">
              <span className="detail-bullet-label a-text-bold">Editorial:</span>
              <span>Editorial Planeta (6 noviembre 2018)</span>
            </span>
          </li>
          <li>
            <span className="a-list-item">
              <span className="detail-bullet-label a-text-bold">Idioma:</span>
              <span>Español</span>
            </span>
          </li>
        </ul>
      </div>
      <ul className="a-unordered-list a-nostyle a-vertical a-spacing-none detail-bullet-list">
        <li>
          <span className="a-list-item">
            Clasificación de éxitos de ventas
            <span>
              <span>
                nº979 en Libros (
                <a href="https://www.amazon.es/gp/bestsellers/books/ref=pd_zg_ts_books">Ver el Top 100 en Libros</a>
                )
              </span>
              <br />
              <span>
                nº108 en
                <a href="https://www.amazon.es/gp/bestsellers/books/14177711031/ref=pd_zg_hrsr_books">Ficción literaria</a>
              </span>
              <br />
              <span>
                nº162 en
                <a href="https://www.amazon.es/gp/bestsellers/books/902680031/ref=pd_zg_hrsr_books">
                  Ficción contemporánea (Libros)
                </a>
              </span>
              <br />
            </span>
          </span>
        </li>
      </ul>
      <ul className="a-unordered-list a-nostyle a-vertical a-spacing-none detail-bullet-list">
        <li>
          <span className="a-list-item">
            <span className="detail-bullet-label a-text-bold">
              Opiniones de los clientes:
            </span>
            <div id="detailBullets_averageCustomerReviews" data-asin="8408197401" data-ref="dpx_acr_pop_">
              <span className="a-declarative" data-action="acrStarsLink-click-metrics" data-acrstarslink-click-metrics="{}">
                <span id="acrPopover" className="reviewCountTextLinkedHistogram noUnderline" title="4,5 de 5 estrellas">
                  <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=8408197401&quot;}">
                    <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                      <i className="a-icon a-icon-star a-star-4-5">
                        <span className="a-icon-alt">4,5 de 5 estrellas</span>
                      </i>
                      <i className="a-icon a-icon-popover"></i>
                    </a>
                  </span>
                  <span className="a-letter-space"></span>
                </span>
              </span>
              <span className="a-letter-space"></span>
              <span className="a-declarative" data-action="acrLink-click-metrics" data-acrlink-click-metrics="{}">
                <a id="acrCustomerReviewLink" className="a-link-normal" href="https://www.amazon.es/Yo-Julia-Planeta-Espa%C3%B1oles-Iberoamericanos/dp/8408197401/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;crid=2IKO067U954NA&amp;dchild=1&amp;keywords=yo+julia&amp;qid=1598543175&amp;sprefix=yo+julia%2Caps%2C210&amp;sr=8-1#customerReviews">
                  <span id="acrCustomerReviewText" className="a-size-base">990 valoraciones</span>
                </a>
              </span>
            </div>
          </span>
        </li>
      </ul>
      <div className="a-row"></div>
      <div className="a-row"></div>
    </div>
  );
}

export default ProductDetails;