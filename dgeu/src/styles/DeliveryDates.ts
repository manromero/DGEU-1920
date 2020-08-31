import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  dynamicDeliveryMessage: {
    paddingTop: "4px",
    marginTop: "0!important",
    marginBottom: "4px!important"
  },
  ddmDeliveryMessage: {
    marginBottom: "4px!important"
  },
  fastDelivery: {
    marginBottom: "0",
    paddingTop: "4px",
    marginTop: "0!important"
  }
});

export default useStyles;