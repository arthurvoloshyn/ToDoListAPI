import { makeStyles } from '@material-ui/core/styles';

const styles = {
  loader: {
    height: size => `calc(100vh - ${size}px)`,
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
