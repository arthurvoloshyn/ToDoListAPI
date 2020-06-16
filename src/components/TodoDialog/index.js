import React from 'react';
import propTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';

const TodoDialog = ({ children, title, fullScreen, open, handleClose, ...attrs }) => (
  <Dialog
    {...attrs}
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
  >
    <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{children}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary" autoFocus>
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

TodoDialog.propTypes = {
  children: propTypes.node,
  title: propTypes.string,
  fullScreen: propTypes.bool,
  open: propTypes.bool,
  handleClose: propTypes.func,
};

TodoDialog.defaultProps = {
  children: null,
  title: 'TodoDialog title',
  fullScreen: false,
  open: false,
  handleClose: () => {},
};

export default TodoDialog;
