import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Paper, Typography, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const { open, setOpen, setDoDelete } = props

  // // Paper 
  // Button
  // Typography

  const handleClickYes = () => {
    setDoDelete(true)
    setOpen(false)
  }
  const handleClickNo = () => setOpen(false)
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <Typography>Are you sure about that?</Typography>
          <Toolbar>
            <Button onClick={handleClickYes}>Yes</Button>
            <Button onClick={handleClickNo}>No</Button>
          </Toolbar>
        </Paper>
      </Fade>
    </Modal>
  )
}