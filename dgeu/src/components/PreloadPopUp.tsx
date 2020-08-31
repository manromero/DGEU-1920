import React from 'react';

const PreloadPopUp = () => {
  return (
    <div className="a-popover-preload" id="a-popover-usp-wlp-widget-modal">
      <div id="usp-wlp-popover-content-inner" className="a-scroller a-scroller-vertical" style={{ display: "none" }}>
        <div id="a-page">
          <div className="a-section">
            <div className="a-row inner-container">
              <b> Vaya. ¡Parece que no has iniciado sesión o que tu sesión ha caducado!</b>
              <br />
              Redireccionando a la página de inicio de sesión...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreloadPopUp;