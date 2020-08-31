import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    marginTop: "2em",
    width: "100%",
    textAlign: "center"
  },
  loader: {
    border: "16px solid #febd69",
    borderRadius: "50%",
    borderTop: "16px solid #efdcc3",
    width: "120px",
    height: "120px",
    WebkitAnimation: "spin 2s linear infinite", /* Safari */
    animation: "spin 2s linear infinite",
    display: "inline-block"
  }
});

export default useStyles;