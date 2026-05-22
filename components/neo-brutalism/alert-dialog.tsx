import React from 'react';
import Button from './button';
import Dialog from './_dialog';

const AlertDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openDialog}>ALERT</Button>

      <Dialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="This is Alert Dialog"
        description="Your action has consequences, proceed with caution."
      >
      </Dialog>
    </>
  );
};

export default AlertDialog;