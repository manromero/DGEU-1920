import React from 'react';
import useStyles from '../styles/DeliveryDates';

interface IProps {
  freeDelivery: string;
  fastDelivery: string;
}

const DeliveryDates = ({ freeDelivery, fastDelivery }: IProps) => {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.dynamicDeliveryMessage}>
        <div className={classes.ddmDeliveryMessage}>
          <a href="https://www.amazon.es/gp/help/customer/display.html?ie=UTF8&amp;pop-up=1&amp;nodeId=202093880" >Entrega GRATIS:</a>
          <b>
            {' '}{freeDelivery}
          </b>
          <a href="https://www.amazon.es/gp/help/customer/display.html/ref=ftinfo_dp_?ie=UTF8&amp;pop-up=1&amp;nodeId=202052960" >Ver detalles</a>
          <br />
          <div className={classes.fastDelivery}>
            Entrega más rápida: <b>{fastDelivery}</b>
            <a href="https://www.amazon.es/gp/help/customer/display.html/ref=ddm_ft_dp?ie=UTF8&amp;pop-up=1&amp;nodeId=200556720">Ver detalles</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryDates;