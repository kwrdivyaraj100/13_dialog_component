import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';

function Test() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog hideBackdrop open={open} onClose={() => setOpen(false)}>
                <DialogTitle>This is my Dialog</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        A dialog is a popup window which can ask user something like an information or confirmation.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => setOpen(false)}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Test;
