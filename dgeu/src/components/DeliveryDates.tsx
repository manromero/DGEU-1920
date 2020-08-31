import React from 'react';

interface IProps {
  freeDelivery: string;
  fastDelivery: string;
}

const DeliveryDates = ({ freeDelivery, fastDelivery }: IProps) => {
  return (
    <div id="dynamicDeliveryMessage_feature_div" className="celwidget" data-feature-name="dynamicDeliveryMessage" data-csa-c-id="mflt6p-t0awbx-yubasz-1h8nvl" data-cel-widget="dynamicDeliveryMessage_feature_div">
      <div id="dynamicDeliveryMessage" className="a-section a-spacing-mini a-spacing-top-mini">
        <div id="ddmDeliveryMessage" className="a-section a-spacing-mini">
          <a href="https://www.amazon.es/gp/help/customer/display.html?ie=UTF8&amp;pop-up=1&amp;nodeId=202093880" target="AmazonHelp" >Entrega GRATIS:</a>
          <b>
            {' '}{freeDelivery}
          </b>
          <a href="https://www.amazon.es/gp/help/customer/display.html/ref=ftinfo_dp_?ie=UTF8&amp;pop-up=1&amp;nodeId=202052960" target="AmazonHelp" >Ver detalles</a>
          <br />
          <div className="a-section a-spacing-top-mini">
            Entrega más rápida: <b>{fastDelivery}</b>
            <a href="https://www.amazon.es/gp/help/customer/display.html/ref=ddm_ft_dp?ie=UTF8&amp;pop-up=1&amp;nodeId=200556720" target="AmazonHelp">Ver detalles</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryDates;