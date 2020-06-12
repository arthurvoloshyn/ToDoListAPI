import { makeStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    padding: 0,
    margin: 0,
    height: '100vh',
    backgroundColor: '#fafafa',
  },
  appBar: {
    height: '64px',
  },
  grid: {
    margin: '1rem 0',
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
