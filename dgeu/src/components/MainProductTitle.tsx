import React from 'react';

interface IProps {
  title: string;
  subtitle: string;
}

const MainProductTitle = ({ title, subtitle }: IProps) => {
  return (
    <div id="titleblock_feature_div" className="celwidget" data-feature-name="titleblock" data-csa-c-id="kbhgy7-r8tp5s-s8w2vz-8zuy7m" data-cel-widget="titleblock_feature_div">
      <div className="a-section a-spacing-none">
        <h1 id="title" className="a-spacing-none a-text-normal">
          <span id="productTitle" className="a-size-extra-large">
            {title}
          </span>
          <span id="productSubtitle" className="a-size-large a-color-secondary">
            {' '}{subtitle}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default MainProductTitle;