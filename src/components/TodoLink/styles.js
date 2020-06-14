import { makeStyles } from '@material-ui/core/styles';

const styles = {
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
