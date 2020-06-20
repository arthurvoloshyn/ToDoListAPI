import { makeStyles } from '@material-ui/core/styles';

const styles = {
  loader: {
    height: size => `calc(100vh - ${size / 16}rem)`,
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
