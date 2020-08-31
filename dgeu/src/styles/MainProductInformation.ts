import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  centerCol: {
    marginRight: "320px",
    marginLeft: "310px"
  },
  othersFormatLinks: {
    display: "inline"
  },
  readMoreContainer: {
    height: "20px",
    display: "block"
  },
  readMoreLink: {
    display: "inline-block",
    position: "relative",
    paddingLeft: "11px"
  },
  readMoreIcon: {
    opacity: ".6",
    WebkitTransition: "-webkit-transform .3s linear,opacity .3s linear,top .3s linear,left .3s linear",
    MozTransition: "-moz-transform .3s linear,opacity .3s linear,top .3s linear,left .3s linemar",
    OTransition: "-o-transform .3s linear,opacity .3s linear,top .3s linear,left .3s linear",
    MsTransition: "-ms-transform .3s linear,opacity .3s linear,top .3s linear,left .3s linear",
    transition: "transform .3s linear,opacity .3s linear,top .3s linear,left .3s linear",
    transform: "rotate(90deg)",
    WebkitTransform: "rotate(90deg)",
    width: "7px",
    height: "7px",
    backgroundPosition: "-366px -86px",
    position: "absolute",
    top: "50%",
    marginTop: "-4px",
    left: "0",
    display: "inline-block",
    verticalAlign: "top",
    backgroundImage: "url(https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIIcon-sprite_1x-e9434610f810a3a99b3f0e49c1b938c9d76628b8._V2_.png)",
    WebkitBackgroundSize: "400px 900px",
    backgroundSize: "400px 900px",
    backgroundRepeat: "no-repeat"
  },
  readMoreLabel: {
    display: "block"
  }
});

export default useStyles;