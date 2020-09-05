import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    marginRight: "320px",
    marginLeft: "310px",
    display: "block"
  },
  tabHeader: {
    display: "inline"
  },
  tabHeaderButton: {
    backgroundColor: "#FFF",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#e7e7e7",
    margin: "0px",
    outline: "none",
    cursor: "pointer",
    paddingTop: "14px",
    paddingBottom: '14px',
    paddingRight: "16px",
    paddingLeft: "16px",
    transition: "0.3s",
    fontSize: "17px",
    fontWeight: "700",
    '&:hover': {
      color: "#da9804",
      borderBottomWidth: "5px",
      paddingBottom: '10px',
      borderBottomColor: "#da9804",
      fontWeight: "900"
    },
  }
});

export default useStyles;