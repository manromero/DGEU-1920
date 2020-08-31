import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  price: {
    color: "#B12704!important",
    textRendering: "optimizeLegibility",
    fontSize: "17px!important",
    lineHeight: "1.255!important",
    fontWeight: "400!important",
    fontStyle: "normal!important",
    textTransform: "none!important",
    textDecoration: "none!important"
  },
  recommendedPriceLabel: {
    color: "#565959!important"
  },
  recommendedPrice: {
    color: "#565959!important",
    textDecoration: "line-through!important"
  },
  saveLabel: {
    color: "#565959!important"
  },
  finalPriceLabel: {
    fontSize: "13px!important",
    lineHeight: "19px!important"
  },
  stock: {
    color: "#067D62!important",
    textRendering: "optimizeLegibility",
    fontSize: "17px!important",
    lineHeight: "1.255!important"
  }
});

export default useStyles;