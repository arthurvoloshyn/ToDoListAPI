import { makeStyles } from '@material-ui/core/styles';

const styles = {
  listItem: {
    height: '64px',
  },
  link: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  listItemText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: '7rem',
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
