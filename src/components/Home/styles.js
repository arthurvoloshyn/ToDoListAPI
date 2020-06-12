import { makeStyles } from '@material-ui/core/styles';

const styles = {
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  button: {
    margin: '1rem 0',
    width: '100%',
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
