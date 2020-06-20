import { makeStyles } from '@material-ui/core/styles';

const styles = {
  box: {
    padding: '1rem',
    textAlign: 'center',
  },
  text: {
    fontSize: '1.5rem',
  },
  icon: {
    fontSize: '7.5rem',
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
