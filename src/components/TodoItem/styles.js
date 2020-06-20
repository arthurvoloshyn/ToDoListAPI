import { makeStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    height: '4rem',
    display: 'flex',
    position: 'relative',
    textAlign: 'left',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    backgroundColor: '#fff',
  },
  textBox: {
    flex: '1 1 auto',
    minWidth: 0,
    margin: '0.25rem 0',
  },
  typography: {
    color: '#000',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: '7rem',
  },
  secondaryAction: {
    top: '50%',
    right: '1rem',
    position: 'absolute',
    transform: 'translateY(-50%)',
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
