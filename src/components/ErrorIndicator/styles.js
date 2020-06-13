import { makeStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    margin: '1rem 0',
    padding: withChildren => (withChildren ? '1rem 1rem 0' : '1rem'),
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
