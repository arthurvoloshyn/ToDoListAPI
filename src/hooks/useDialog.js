import { useState } from 'react';

const useDialog = initialValue => {
  const [open, setOpen] = useState(initialValue);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return [open, handleOpen, handleClose];
};

export default useDialog;
