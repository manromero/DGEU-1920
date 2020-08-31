import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    marginLeft: "27px",
    float: "left!important",
    verticalAlign: "top",
    textAlign: "left",
    overflow: "hidden",
    width: "160px",
    minHeight: "100%",
    listStyleType: "none",
    display: "inline-block",
    whiteSpace: "normal",
    letterSpacing: "normal"
  },
  small: {
    width: "100%",
    fontSize: "12px!important",
    lineHeight: "1.5!important"
  },
  author: {
    color: "#0F1111!important",
    fontSize: "12px!important",
    lineHeight: "1.5!important"
  },
  cover: {
    color: "#565959!important",
    fontSize: "12px!important",
    lineHeight: "1.5!important"
  },
  price: {
    color: "#B12704!important",
    fontSize: "13px!important",
    lineHeight: "19px!important"
  }
});

export default useStyles;