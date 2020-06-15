import { makeStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    height: '64px',
    display: 'flex',
    position: 'relative',
    textAlign: 'left',
    alignItems: 'center',
    padding: '8px 16px',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    backgroundColor: '#fff',
  },
  textBox: {
    flex: '1 1 auto',
    minWidth: 0,
    margin: '4px 0',
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
    right: '16px',
    position: 'absolute',
    transform: 'translateY(-50%)',
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
