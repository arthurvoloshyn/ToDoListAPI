import { makeStyles } from '@material-ui/core/styles';

const styles = {
  listItem: {
    height: '64px',
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
