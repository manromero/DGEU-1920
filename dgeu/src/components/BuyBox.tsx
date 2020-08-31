import React from 'react';
import { IPriceFormat } from '../commons/interfaces';

interface IProps {
  priceFormats: IPriceFormat[];
}

const BuyBox = ({ priceFormats }: IProps) => {

  const priceFormatSelected = priceFormats.find(e => e.selected);

  if (!priceFormatSelected) {
    return null;
  }

  return (
    <div id="buybox" className="a-row a-spacing-medium">
      <div className="a-box rbbSection">
        <div className="a-box-inner">
          <div className="a-section a-spacing-none a-padding-none">
            <div id="buyNewSection" className="a-section a-spacing-none a-padding-none rbbHeader dp-accordion-row">
              <div className="a-section">
                <div className="a-row">
                  <span className="inlineBlock-display">
                    <span className="a-size-medium a-color-price offer-price a-text-normal">
                      {(priceFormatSelected.price).toFixed(2)} €
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div id="buyNewInner" className="rbbContent dp-accordion-inner">
              <div id="buyBoxInner" className="a-section a-spacing-small">
                <ul className="a-unordered-list a-nostyle a-vertical">
                  <li>
                    <span className="a-list-item">
                      <span className="a-color-secondary">Precio recomendado: </span>
                      <span className="a-color-secondary a-text-strike">
                        {(priceFormatSelected.price * 1.05).toFixed(2)} €
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="a-list-item">
                      <span className="a-size-base a-color-secondary">
                        Ahorras: {(priceFormatSelected.price * 1.05 - priceFormatSelected.price).toFixed(2)} €
                        (5%)
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="a-list-item a-size-small">
                      <span className="a-size-base">Precio final del producto</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div id="promiseBasedBadge_feature_div" data-feature-name="promiseBasedBadge" className="a-section a-spacing-none feature" data-cel-widget="promiseBasedBadge_feature_div">
                <div className="a-section a-spacing-none bm-pbb-badge"></div>
              </div>
              <div className="a-section a-spacing-small a-spacing-top-micro">
                <div className="a-row">
                  <span className="a-color-base buyboxShippingLabel"></span>
                </div>
              </div>
              <div className="a-section a-spacing-none"></div>
              <div className="a-section a-spacing-none"></div>
              <div className="a-section a-spacing-small">
                <div id="availability" className="a-section a-spacing-none">
                  <span className="a-size-medium a-color-success">
                    En stock.
                  </span>
                  <br />
                  Disponible como
                  <a href="https://www.amazon.es/gp/product/B07JK6ZS94?ref=dbs_p2d_P_R_kindle_available_T1">eBook Kindle</a>
                  . Lee eBooks Kindle en cualquier dispositivo con la App Kindle gratuita.
                </div>
                <div className="a-section a-spacing-none"></div>
                <div id="merchant-info" className="a-section a-spacing-mini">
                  Vendido y enviado por Amazon.
                  <span className=""></span>
                </div>
              </div>
              <div className="a-section a-spacing-small">
                <div id="selectQuantity" className="a-section a-spacing-none a-padding-none">
                  <span className="a-declarative" data-action="quantity-dropdown" data-quantity-dropdown="{}">
                    <div className="a-row a-spacing-base">
                      <div className="a-column a-span12 a-text-left">
                        <span className="a-dropdown-container">
                          <label className="a-native-dropdown">Cantidad:</label>
                          <select name="quantity" id="quantity" className="a-native-dropdown">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                          </select>
                          <span className="a-button a-button-dropdown a-button-small" aria-hidden="true" id="a-autoid-0" style={{ minWidth: "0%" }}>
                            <span className="a-button-inner">
                              <span className="a-button-text a-declarative" data-action="a-dropdown-button" role="button" aria-hidden="true" id="a-autoid-0-announce">
                                <span className="a-dropdown-label">Cantidad:</span>
                                <span className="a-dropdown-prompt">1</span>
                              </span>
                              <i className="a-icon a-icon-dropdown"></i>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <div id="bbopAndCartBox" className="a-box"><div className="a-box-inner">
                <div id="bbop-sbbop-container" className="a-section">
                  <div id="sbbop-popover-header" className="a-section a-hidden">
                    <div className="a-box a-alert-inline a-alert-inline-success">
                      <div className="a-box-inner a-alert-container">
                        <i className="a-icon a-icon-alert"></i>
                        <div className="a-color-base">
                          Yo, Julia: Premio Planeta...
                          se ha añadido a la cesta
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bbop" className="a-section">
                    <div id="bbopCheckboxSection" className="a-checkbox">
                      <div className="a-checkbox">
                        <label>
                          <input id="bbop-check-box" type="checkbox" className="prime-signup-ingress" data-client-id="primeAcquisition" data-ingress-id="BBOP" data-campaign-id="primeAcquisition_BBOP_desktop_ft" data-offer-token="LW-eDzOgERBV0Jm6hRZzug1-46zZfHHQZcA8i3DiiuF-1SpuAFm_9ywHUl9BOE3O3y9rpdkx0F55DXFeWDuOKC6CofYUhO_tjghcVhuYeuwOkKrh0FJp2t3HUXnVqTQaB55w3R5r1J3j2y-gOAZdQgJPsOxmlJ8sBxZ5keihg7DDEf-f8TV3611HNiXZcLL3uMMBOE1o5MzMeVi2wRwN_3SldsqAb5sUZ8uMhpaJKZeIODyy2Z7W2DQ8WqXoPvHsHQ1r4E-wQ6ETK7vZ0iIMW9y3iuwY8UAz-aVu9jZ7WkcwmRCas3OJJJ8BJR8DIzD4Ou0H56vK-1vTunrjw8ZCtOkpvXiIEQGzy3qU9IBUcX_aazDvtKbuIgb8yt3-PYKIYo60nrK3oWXET4k85RvpjcPD7nS5_nQeZprLeAzX-m0ECKYx3OyJGRImj-ZxJD8uiFQed5eRbCPPHf0pac7p7LqNOpfF-iwifP2_dlzVJa9JhdcgScqZu2A4DETWZoOuFCVFXuLPHxOCu5uBPaKW9M4zgDVCPpVO-dHDh_hWsIzPefY3mE-pLa6N3_x-cmYCtO8n1G87ozxD7k5xZ-Oy5zUCAoF8uOjDpgLNDBGr5hIULrBbR2irPkqWkD8MuCtqmkFpMC7OmiuYhe9PKXixc8x47_bAxHlEH94cqMwk90v6cwHPFTCVnL2t2Mogh63OkeN4yorr3ZVW" data-success-redirect-url="https://www.amazon.es/Yo-Julia-Planeta-Espa%C3%B1oles-Iberoamericanos/dp/8408197401/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;crid=2IKO067U954NA&amp;dchild=1&amp;keywords=yo+julia&amp;qid=1598543175&amp;sprefix=yo+julia%2Caps%2C210&amp;sr=8-1" />
                          <i className="a-icon a-icon-checkbox"></i>
                          <span className="a-label a-checkbox-label">
                            <div id="bbop-title">
                              Envío rápido y GRATIS
                            </div>
                            <div>
                              Te ofrecemos una prueba GRATIS de 30 días de
                              <a href="https://www.amazon.es/Yo-Julia-Planeta-Espa%C3%B1oles-Iberoamericanos/dp/8408197401/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;crid=2IKO067U954NA&amp;dchild=1&amp;keywords=yo+julia&amp;qid=1598543175&amp;sprefix=yo+julia%2Caps%2C210&amp;sr=8-1#" className="prime-details bbop-inline-link a-declarative">Amazon Prime</a>.
                            </div>
                          </span>
                        </label>
                      </div>
                      {/* <span className="prime-bbop-logo">
                        <img src="./Yo, Julia_ Premio Planeta 2018 Autores Españoles e Iberoamericanos_ Amazon.es_ Posteguillo, Santiago_ Libros_files/prime_logo_detailpage._CB485945765_.png" />
                      </span> */}
                    </div>
                    <div id="primePopoverContent" style={{ display: "none" }}>
                      <img src="./Yo, Julia_ Premio Planeta 2018 Autores Españoles e Iberoamericanos_ Amazon.es_ Posteguillo, Santiago_ Libros_files/PremiumLogoSmallTest._CB485943203_.png" alt="Amazon Prime" id="prime-bbop-logo" />
                      <h2>Descubre las ventajas de Amazon Prime con un periodo de prueba de 30 días</h2>
                      <div className="a-row a-grid-vertical-align a-grid-center">
                        <div className="a-column a-span3">
                          <img src="./Yo, Julia_ Premio Planeta 2018 Autores Españoles e Iberoamericanos_ Amazon.es_ Posteguillo, Santiago_ Libros_files/Benefit_icon_illustration_shipping._.png" alt="Amazon Prime" id="prime-bbop-logo" />
                        </div>
                        <div className="a-column a-span9 a-span-last">
                          <h3>Envío rápido, gratis e ilimitado</h3>
                          <p>Envío en 1 día en 2 millones de productos, y en 2 o 3 días en millones más</p>
                        </div>
                      </div>
                      <div className="a-row a-grid-vertical-align a-grid-center">
                        <div className="a-column a-span3">
                          <img src="./Yo, Julia_ Premio Planeta 2018 Autores Españoles e Iberoamericanos_ Amazon.es_ Posteguillo, Santiago_ Libros_files/Benefit_icon_illustration_early-acce.png" alt="Amazon Prime" id="prime-bbop-logo" />
                        </div>
                        <div className="a-column a-span9 a-span-last">
                          <h3>Acceso Prioritario</h3>
                          <p>Accede a las Ofertas flash, 30 minutos antes de su inicio</p>
                        </div>
                      </div>
                      <div className="a-row a-grid-vertical-align a-grid-center">
                        <div className="a-column a-span3">
                          <img src="./Yo, Julia_ Premio Planeta 2018 Autores Españoles e Iberoamericanos_ Amazon.es_ Posteguillo, Santiago_ Libros_files/Benefit_icon_illustration_photo._CB4.png" alt="Amazon Prime" id="prime-bbop-logo" />
                        </div>
                        <div className="a-column a-span9 a-span-last">
                          <h3>Amazon Photos</h3>
                          <p>Disfruta de almacenamiento gratis e ilimitado para tus fotos en formato original en Amazon Drive</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="a-button-stack">
                  <span id="submit.add-to-cart" className="a-button a-spacing-small a-button-primary a-button-icon">
                    <span className="a-button-inner">
                      <i className="a-icon a-icon-cart"></i>
                      <input id="add-to-cart-button" name="submit.add-to-cart" title="Añadir a la cesta" data-hover="Seleccione <b>__dims__</b> a la izquierda<br/> para añadir a la cesta." className="a-button-input" type="submit" value="Añadir a la cesta" aria-labelledby="submit.add-to-cart-announce" />
                      <span id="submit.add-to-cart-announce" className="a-button-text" aria-hidden="true">Añadir a la cesta</span>
                    </span>
                  </span>
                </div>
                <div className="dp-cif aok-hidden" data-feature-details="{&quot;name&quot;:&quot;atc&quot;,&quot;isInteractive&quot;:false}"></div>
                <div className="a-button-stack">
                  <div id="buyNow" className="a-section a-spacing-base">
                    <div id="turboState" className="a-section a-spacing-none a-padding-none"></div>
                    <span className="a-declarative" data-action="a-modal" data-a-modal="{&quot;name&quot;:&quot;turbo&quot;}" id="turbo-checkout-modal"></span>
                    <span id="submit.buy-now" className="a-button a-button-oneclick a-button-icon onml-buy-now-button">
                      <span className="a-button-inner">
                        <i className="a-icon a-icon-buynow"></i>
                        <input id="buy-now-button" name="submit.buy-now" data-hover="__dims__" className="a-button-input" type="submit" aria-labelledby="submit.buy-now-announce" />
                        <span id="submit.buy-now-announce" className="a-button-text" aria-hidden="true">
                          Comprar ya
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              </div>
              <div className="a-row">
                <div id="dpFastTrack_feature_div" data-feature-name="dpFastTrack" data-template-name="dpFastTrack" className="a-section a-spacing-none a-spacing-top-small feature" data-cel-widget="dpFastTrack_feature_div">
                </div>
              </div>
              <hr className="a-divider-normal" />
              <span className="a-declarative" data-action="dpContextualIngressPt" data-dpcontextualingresspt="{}">
                <a className="a-link-normal" href="https://www.amazon.es/Yo-Julia-Planeta-Espa%C3%B1oles-Iberoamericanos/dp/8408197401/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;crid=2IKO067U954NA&amp;dchild=1&amp;keywords=yo+julia&amp;qid=1598543175&amp;sprefix=yo+julia%2Caps%2C210&amp;sr=8-1#">
                  <div className="a-row a-spacing-mini">
                    <div className="a-column a-span12 a-text-left">
                      <div id="contextualIngressPt">
                        <div id="contextualIngressPtPin"></div>
                        <span id="contextualIngressPtLabel" className="cip-a-size-small">
                          <div id="contextualIngressPtLabel_deliveryShortLine">Elige tu dirección de envío</div>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyBox;