import React, { useState } from 'react';

interface IProps {
  flapNote: string;
  backCover: string;
  biography: string;
}

const ProductDescription = ({ flapNote, backCover, biography }: IProps) => {

  const [readMore, setReadMore] = useState(false);

  return (
    <div id="editorialReviews_feature_div" className="celwidget" data-feature-name="editorialReviews" data-csa-c-id="hun84h-ygovmj-bbfwob-awt0d4" data-cel-widget="editorialReviews_feature_div">
      <h2>Descripción del producto</h2>
      <div className="a-section a-spacing-small a-padding-base">
        <div aria-live="polite" className="a-expander-container a-expander-extend-container">
          <h3>Nota de la solapa</h3>
          <div className="a-section a-spacing-small a-padding-small">
            {flapNote}
          </div>
          <h3>Contraportada</h3>
          <div className="a-section a-spacing-small a-padding-small">
            {backCover}
          </div>
          {readMore ? (
            <div aria-expanded="false" className="a-expander-content a-expander-extend-content">
              <h3>Biografía del autor</h3>
              <div className="a-section a-spacing-small a-padding-small">
                {biography}
              </div>
            </div>
          ) : null}
          <div>
            <a onClick={() => setReadMore(!readMore)}>
              {readMore ? (
                <span id="bdSeeLessPrompt" style={{ display: "block" }}>Leer menos</span>
              ) : (
                  <span id="bdSeeAllPrompt" style={{ display: "block" }}>Leer más</span>
                )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;