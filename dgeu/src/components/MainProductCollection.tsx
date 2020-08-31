import React from 'react';

interface IProps {
  collectionName: string;
  collectionUrl: string;
}

const MainProductCollection = ({ collectionUrl, collectionName }: IProps) => {
  return (
    <div id="seriesTitle_feature_div" className="celwidget" data-feature-name="seriesTitle" data-csa-c-id="8eo4wd-ua7ctr-8rlm8r-cguog3" data-cel-widget="seriesTitle_feature_div">
      <span className="a-size-small a-color-secondary a-text-bold">Libro 1</span><span className="a-size-small a-color-secondary"> de 2 en la colección </span>
      <a id="series-page-link" className="a-link-normal" href={collectionUrl}>
        <span className="a-size-small">{collectionName}</span>
      </a>
    </div>
  );
}

export default MainProductCollection;