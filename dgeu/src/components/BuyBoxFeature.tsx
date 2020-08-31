import React from 'react';
import BuyBox from '../containers/BuyBox';
import WishListButtonStack from './WishListButtonStack';

const BuyBoxFeature = () => {
  return (
    <div id="buybox_feature_div" className="celwidget" data-feature-name="buybox" data-csa-c-id="t1qrjn-ux5j6r-jkgbct-aacq92" data-cel-widget="buybox_feature_div">
      <div id="combinedBuyBox" className="a-section a-spacing-medium">
        <form method="post" id="addToCart" action="https://www.amazon.es/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance" className="a-content">
          <input type="hidden" id="session-id" name="session-id" value="259-6544150-3296161" />
          <input type="hidden" id="ASIN" name="ASIN" value="8408197401" />
          <input type="hidden" id="offerListingID" name="offerListingID" value="cA2O3tqhWDMZCC%2BjmwL2gH1ftZ7ceFwAzFgfYAH3FALGzkUhbeLtgknbiO3NNIJ1uV3Y9%2F9fABIk4AT7fX4tBWUps230oa6ct9x9Q7WjLaFKsx17S3MhL69imAcH721ZUR8k0Yd6lksn9L5LF6qZNg%3D%3D" />
          <input type="hidden" id="isMerchantExclusive" name="isMerchantExclusive" value="0" />
          <input type="hidden" id="merchantID" name="merchantID" value="A1AT7YVPFBWXBL" />
          <input type="hidden" id="isAddon" name="isAddon" value="0" />
          <input type="hidden" id="nodeID" name="nodeID" value="" />
          <input type="hidden" id="sellingCustomerID" name="sellingCustomerID" value="" />
          <input type="hidden" id="qid" name="qid" value="1598543175" />
          <input type="hidden" id="sr" name="sr" value="8-1" />
          <input type="hidden" id="storeID" name="storeID" value="" />
          <input type="hidden" id="tagActionCode" name="tagActionCode" value="" />
          <input type="hidden" id="viewID" name="viewID" value="glance" />
          <input type="hidden" id="rsid" name="rsid" value="259-6544150-3296161" />
          <input type="hidden" id="sourceCustomerOrgListID" name="sourceCustomerOrgListID" value="" />
          <input type="hidden" id="sourceCustomerOrgListItemID" name="sourceCustomerOrgListItemID" value="" />
          <input type="hidden" name="wlPopCommand" value="" />
          <BuyBox />
          <WishListButtonStack />
          <div className="aok-hidden" data-amazon-lists-csrf-token="gpYbhvK+BvKixkN1D4pRHib057l63I+laCOumegAAAAMAAAAAF9H1UxyYXcAAAAAFVfwLBerPie4v1Ep////"></div>
          <input data-addnewaddress="add-new" id="cartAddressNew" name="dropdown-selection" type="hidden" value="add-new" />
          <input data-addnewaddress="add-new" id="cartAddressUsed" name="dropdown-selection-ubb" type="hidden" value="add-new" />
        </form>
      </div>
    </div>
  );
}

export default BuyBoxFeature;