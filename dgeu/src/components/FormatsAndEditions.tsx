import React from 'react';
import { IPriceFormat } from '../commons/interfaces';

interface IProps {
  priceFormats: IPriceFormat[];
  acSetProductSelected: (id: number) => void;
}

const FormatsAndEditions = ({ priceFormats, acSetProductSelected }: IProps) => {
  return (
    <div id="twister" className="a-section a-spacing-base a-spacing-top-small a-size-mini">
      <table className="a-normal a-spacing-none title">
        <tbody>
          <tr>
            <td className="dp-title-col"></td>
            <td className="a-color-secondary a-text-right dp-price-col">
              <div className="a-fixed-right-grid">
                <div className="a-fixed-right-grid-inner" style={{ paddingRight: "50px" }}>
                  <div className="a-fixed-right-grid-col a-col-left" style={{ paddingRight: "2.5%", float: "left" }}>
                    Precio Amazon
                  </div>
                  <div className="a-fixed-right-grid-col a-col-right" style={{ width: "50px", marginRight: "-50px", float: "left" }}>
                  </div>
                </div>
              </div>
            </td>
            <td className="a-color-secondary a-text-right dp-new-col">
              Precio Recomendado
            </td>
          </tr>
        </tbody>
      </table>
      {priceFormats.map(priceFormat => (
        <div className={`top-level ${priceFormat.selected ? 'selected-row' : 'unselected-row'}`}>
          <span className="a-declarative" data-action="tmm-see-more-editions-click" data-tmm-see-more-editions-click="{&quot;metabindingPlaceHolder&quot;:1,&quot;metabindingPlaceHolderState&quot;:&quot;0&quot;,&quot;metabindingUrl&quot;:&quot;/Yo-Julia-Planeta-Volumen-independiente-ebook/dp/B07JK6ZS94/ref=tmm_kin_title_0?_encoding=UTF8&amp;amp;qid=1598543175&amp;amp;sr=8-1&quot;}" id="declarative_1">
            <table className="a-normal a-spacing-none">
              <tbody>
                <tr onClick={() => acSetProductSelected(priceFormat.id)}>
                  <td className="dp-title-col">
                    <a className="empty-expander title-expander" style={{ verticalAlign: "middle" }}>
                      <span className="metabinding-expander"></span>
                    </a>
                    <a onClick={() => acSetProductSelected(priceFormat.id)}>
                      <span className="a-size-small a-color-base">{priceFormat.product}</span>
                      <span id="tmmSpinnerDiv_1" style={{ display: "none" }} className="tmmAjaxLoading"></span>
                    </a>
                    <span id="tmmErrorDiv_1" className="tmmErrorClass displayNone">
                      <div className="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert">
                        <div className="a-box-inner a-alert-container">
                          <i className="a-icon a-icon-alert"></i>
                          <div className="a-alert-content">
                            <span>"Vuelva a intentarlo"</span>
                          </div>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td className="a-text-right dp-price-col">
                    <div className="a-fixed-right-grid">
                      <div className="a-fixed-right-grid-inner" style={{ paddingRight: "50px" }}>
                        <div className="a-fixed-right-grid-col a-col-left" style={{ paddingRight: "2.5%", float: "left" }}>
                          <span className="a-size-small a-color-price">{priceFormat.price.toFixed(2)} €</span>
                        </div>
                        <div className="a-fixed-right-grid-col a-col-right" style={{ width: "50px", marginRight: "-50px", float: "left" }}>
                          <span id="primeSlot" className="badge-slot">
                            <div style={{ display: "inline-block" }}></div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="a-color-tertiary a-text-right dp-new-col">
                    {(priceFormat.price * 1.05).toFixed(2)} €
                  </td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      ))}
    </div>
  );
}

export default FormatsAndEditions;