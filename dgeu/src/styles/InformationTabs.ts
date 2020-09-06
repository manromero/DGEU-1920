import { createUseStyles } from 'react-jss'

const tabActive = {
  borderBottomStyle: "solid",
  color: "#da9804",
  borderBottomWidth: "5px",
  paddingBottom: '10px',
  borderBottomColor: "#da9804",
  fontWeight: "900"
};

const tabHeaderButton = {
  backgroundColor: "#FFF",
  border: "none",
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
  '&:hover': tabActive
};



const useStyles = createUseStyles({
  container: {
    marginRight: "320px",
    marginLeft: "310px",
    display: "block"
  },
  tabHeader: {
    marginTop: "1rem",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#e7e7e7",
    borderBottom: "none"
  },
  tabBody: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#e7e7e7",
    padding: "1rem",
    marginBottom: "1rem"
  },
  tabHeaderButton,
  tabHeaderButtonActive: { ...tabHeaderButton, ...tabActive }
});

export default useStyles;