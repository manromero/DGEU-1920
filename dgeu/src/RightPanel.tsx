import React from 'react';
import TellAFriend from './TellAFriend';
import MoreBuyingChoices from './MoreBuyingChoices';
// import Advertisement from './Advertisement';
import BuyBoxFeature from './BuyBoxFeature';

const RightPanel = () => {
  return (
    <div id="rightCol">
      <TellAFriend />
      <div id="pBookUpsell_feature_div" className="celwidget" data-feature-name="pBookUpsell" data-csa-c-id="bsv990-e7km14-f5pd9c-3ohm35" data-cel-widget="pBookUpsell_feature_div"></div>
      <BuyBoxFeature />
      <div id="valuePick_feature_div" className="celwidget" data-feature-name="valuePick" data-csa-c-id="meeycw-f59x41-pesrjx-kbemve" data-cel-widget="valuePick_feature_div"></div>
      {/* <Advertisement /> */}
      <div id="p2d_feature_div" className="celwidget" data-feature-name="p2d" data-csa-c-id="wn5096-nwt81i-4tfonw-thgvc7" data-cel-widget="p2d_feature_div"></div>
      <MoreBuyingChoices />
      <div id="servicesInterstitial_feature_div" className="celwidget" data-feature-name="servicesInterstitial" data-csa-c-id="v3jlg7-2b25hl-vpqas3-ofg8xv" data-cel-widget="servicesInterstitial_feature_div"></div>
      <div id="certifiedBusinessSeller_feature_div" className="celwidget" data-feature-name="certifiedBusinessSeller" data-csa-c-id="wdv70z-w4b9he-xg905d-9spv3l" data-cel-widget="certifiedBusinessSeller_feature_div"></div>
    </div>
  );
}

export default RightPanel;