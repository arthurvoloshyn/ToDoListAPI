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
  fab: {
    margin: '1rem',
    position: 'fixed',
    bottom: 0,
    right: 0,
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
