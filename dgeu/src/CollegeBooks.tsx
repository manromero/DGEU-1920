import React from 'react';
import ImgBooks from './static/images/books.jpg';

const CollegeBooks = () => {
  return (
    <div id="universalHQP_feature_div" className="celwidget" data-feature-name="universalHQP" data-csa-c-id="t3vdrk-ui6j2y-7dwwxs-7i2oyg" data-cel-widget="universalHQP_feature_div">
      <hr className="a-divider-normal" />
      <div className="a-section a-spacing-base">
        <div className="a-fixed-left-grid universal_hqp_grid_clear_fix">
          <div className="a-fixed-left-grid-inner" style={{ paddingLeft: "75px" }}>
            <div className="a-fixed-left-grid-col a-col-left" style={{ width: "75px", marginLeft: "-75px", float: "left" }}>
              <a className="a-link-normal" href="https://librosdelcole.es/">
                <img alt="" src={ImgBooks} height="75" width="75" />
              </a>
            </div>
            <div className="a-fixed-left-grid-col a-col-right" style={{ paddingLeft: "3.5%", float: "left" }}>
              <div className="a-row">
                <span className="a-text-bold">Libros de texto por colegio</span>
              </div>
              <div className="a-row">
                Encuentra tus libros en librosdelcole.es y finaliza tu compra en amazon.es
                <a className="a-link-normal" title="Libros de texto por colegio" href="https://librosdelcole.es/">Entra ya</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeBooks;