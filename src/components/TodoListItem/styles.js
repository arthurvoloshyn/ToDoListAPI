import { makeStyles } from '@material-ui/core/styles';

const styles = {
  listItem: {
    height: '4rem',
  },
  listItemText: {
    color: '#000',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: '7rem',
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
