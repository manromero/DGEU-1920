import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  utilNumber: {
    color: "#565959!important",
    fontSize: "13px!important",
    lineHeight: "19px!important"
  },
  summary: {
    textDecoration: "none",
    color: "#0F1111!important",
    fontSize: "13px!important",
    lineHeight: "19px!important",
    fontWeight: "700!important"
  },
  revisionDate: {
    color: "#565959!important",
    fontSize: "13px!important",
    lineHeight: "19px!important"
  },
  commentContainer: {
    maxHeight: "300px",
    overflow: "hidden",
    position: "relative",
    width: "100%"
  },
  comment: {
    overflow: "hidden",
    position: "relative"
  },
  verifiedPurchaseContainer: {
    marginBottom: "4px!important",
    width: "100%"
  },
  verifiedPurchase: {
    color: "#c45500!important",
    fontSize: "11px!important",
    lineHeight: "1.465!important",
    fontWeight: "700!important"
  },
  inform: {
    color: "#565959!important",
    '&:hover': {
      color: "#c45500!important",
    },
    fontSize: "13px!important",
    lineHeight: "19px!important",
    fontWeight: "400!important",
    fontStyle: "normal!important",
    textTransform: "none!important",
    textDecoration: "none!important"
  }
});

export default useStyles;