import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { InsertPhoto as InsertPhotoIcon } from '@material-ui/icons';
import useStyles from './styles';

const EmptyPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <InsertPhotoIcon className={classes.icon} color="primary" />
      <Typography className={classes.text} color="inherit">
        You have no tasks yet.
      </Typography>
    </Box>
  );
};

export default EmptyPage;
