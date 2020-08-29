import React from 'react';

const WishListButtonStack = () => {
  return (
    <div id="wishlistButtonStack" className="a-button-stack">
      <div id="add-to-wishlist-button-group" data-hover="Para añadir a la Lista de deseos, elige entre las opciones a la izquierda" className="a-button-group a-declarative a-spacing-none" data-action="a-button-group" role="radiogroup">
        <span id="wishListMainButton" className="a-button a-button-group-first a-spacing-none a-button-base a-declarative" role="radio" aria-labelledby="wishListMainButton-announce" data-action="add-wishlist-declarative">
          <span className="a-button-inner">
            <a id="wishListMainButton-announce" href="https://www.amazon.es/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.es%2Fgp%2Faw%2Fd%2F8408197401&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.assoc_handle=esamazon&amp;openid.mode=checkid_setup&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;" title="Añadir a la Lista de deseos" data-hover="Para añadir a la Lista de deseos, elige entre las opciones a la izquierda" className="a-button-text a-text-left" role="button">
              Añadir a la Lista de deseos
            </a>
          </span>
        </span>
      </div>
      <div id="atwl-inline-spinner" className="a-section a-hidden">
        <div className="a-spinner-wrapper">
          <span className="a-spinner a-spinner-medium"></span>
        </div>
      </div>
      <div id="atwl-inline" className="a-section a-spacing-none a-hidden">
        <div className="a-row a-text-ellipsis">
          <div id="atwl-inline-sucess-msg" className="a-box a-alert-inline a-alert-inline-success">
            <div className="a-box-inner a-alert-container">
              <i className="a-icon a-icon-alert"></i>
              <div className="a-alert-content">
                <span className="a-size-base" role="alert"></span>
              </div>
            </div>
          </div>
          <a id="atwl-inline-link" className="a-link-normal" href="https://www.amazon.es/gp/registry/wishlist/">
            <span id="atwl-inline-link-text" className="a-size-base" role="alert"></span>
          </a>
        </div>
      </div>
      <div id="atwl-inline-error" className="a-section a-hidden">
        <div className="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert">
          <div className="a-box-inner a-alert-container">
            <i className="a-icon a-icon-alert"></i>
            <div className="a-alert-content">
              <span id="atwl-inline-error-msg" className="a-size-base" role="alert">
                No se ha podido añadir el producto a la lista de deseos. Por favor, inténtalo de nuevo más tarde.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="atwl-dd-spinner-holder" className="a-section a-hidden">
        <div className="a-row a-dropdown">
          <div className="a-section a-popover-wrapper">
            <div className="a-section a-text-center a-popover-inner">
              <div className="a-box a-popover-loading">
                <div className="a-box-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="atwl-dd-error-holder" className="a-section a-hidden">
        <div className="a-section a-dropdown">
          <div className="a-section a-popover-wrapper">
            <div className="a-section a-spacing-base a-padding-base a-text-left a-popover-inner">
              <h3 className="a-color-error"></h3>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div id="atwl-dd-unavail-holder" className="a-section a-hidden">
        <div className="a-section a-dropdown">
          <div className="a-section a-popover-wrapper">
            <div className="a-section a-spacing-base a-padding-base a-text-left a-popover-inner">
              <h3 className="a-color-error"></h3>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishListButtonStack;