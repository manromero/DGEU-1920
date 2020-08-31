import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    marginBottom: "0!important"
  },
  title: {
    paddingBottom: 0,
    marginBottom: "0!important",
    fontWeight: "400!important",
    fontStyle: "normal!important",
    textTransform: "none!important",
    textDecoration: "none!important"
  },
  productTitle: {
    fontSize: "19px!important",
    textRendering: "optimizeLegibility",
    lineHeight: "1.2!important"
  },
  productSubtitle: {
    color: "#565959!important",
    textRendering: "optimizeLegibility",
    fontSize: "21px!important",
    lineHeight: "1.3!important"
  }
});

export default useStyles;