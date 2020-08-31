import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    display: "inline-block",
    marginBottom: "7px",
  },
  averageCustomerReviews: {
    display: "inline-block"
  },
  ratings: {
    fontSize: "13px!important",
    lineHeight: "19px!important"
  },
  iconPopOver: {
    display: "inline-block",
    backgroundImage: "url(https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIIcon-sprite_1x-e943461…._V2_.png)",
    WebkitBackgroundSize: "400px 900px",
    backgroundSize: "400px 900px",
    backgroundRepeat: "no-repeat"
  }
});

export default useStyles;