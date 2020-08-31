import React from 'react';

interface IProps {
  author: string;
  authorUrl: string,
}

const MainProductAuthor = ({ authorUrl, author }: IProps) => {
  return (
    <div id="bylineInfo_feature_div" className="celwidget" data-feature-name="bylineInfo" data-csa-c-id="866dkm-njwzze-j8m38o-y9mqzv" data-cel-widget="bylineInfo_feature_div">
      <div id="bylineInfo" className="a-section a-spacing-micro bylineHidden feature" data-cel-widget="bylineInfo">
        de
        <span className="author notFaded" data-width="">
          <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButtonLabel&quot;:&quot;Cerrar mensaje emergente de diálogo de autor&quot;,&quot;name&quot;:&quot;contributor-info-B00JA7ZCES&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;Mensaje emergente de diálogo de autor&quot;,&quot;allowLinkDefault&quot;:&quot;true&quot;}">
            <a data-asin="B00JA7ZCES" className="a-link-normal contributorNameID" href={authorUrl}>{' '}{author}</a>
            <a href="javascript:void(0)" className="a-popover-trigger a-declarative"><i className="a-icon a-icon-popover"></i></a>
          </span>
          <span className="contribution">
            <span className="a-color-secondary">(Autor)</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default MainProductAuthor;