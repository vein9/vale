import {
  Paper, Card, CardContent, Typography, CardActions, Button,
  IconButton, CardHeader, Avatar, Checkbox, makeStyles, createStyles, Grid, Box, Container
} from '@material-ui/core'
import { MoreVert, Delete, Check, CollectionsBookmarkOutlined } from '@material-ui/icons'
import { ListItem } from '@material-ui/core'
import React, { useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AreYouSure from './AreYouSure'
import { useEffect } from 'react';
import updateDocument from '../firebase/updateDocument';
const useStyles = makeStyles((theme) => createStyles({
  todoReady: {
    background: 'white',
    width: '100%',
    opacity: 1
    // background: 'yellow'
  },
  todo: {
    background: 'white',
    width: '100%',
    opacity: 0.3
    // background: 'yellow'
  },
  time: {
    display: 'flex',
  },
  startTime: {
    background: '#1e88e5',
    color: 'white',
    padding: '7px',
    margin: '0px 10px',
    borderRadius: '30px',
    fontSize: '17px',
  },
  endTime: {
    background: '#f50057',
    color: 'white',
    padding: '7px',
    margin: '0px 10px',
    borderRadius: '30px',
    fontSize: '17px',
  },
  done: {
    marginLeft: '10px',
  },
  bar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export default function Todo(props) {
  const { i, todo, ready } = props
  const { seconds } = todo.startDate
  const classes = useStyles()

  const toDate = (secs) => {
    let t = new Date(secs * 1000)
    // t.setDate(t.getDate() + 1)
    console.log(new Date().getDate())
    console.log(t.getDate())
    return t
  }

  const toDateString = (secs) => {
    let t = new Date(secs * 1000)
    t.setDate(t.getDate() + 1)
    return t.toISOString().split('T')[0]
  }
  const handleVote = () => {
    updateDocument('todos', todo.id, 'vote', todo.vote + 1)
  }
  const handleDone = () => {
    updateDocument('todos', todo.id, 'done', true)
  }
  return (
    <ListItem >
      <Card className={new Date().getDate() === toDate(seconds).getDate() ? classes.todoReady : classes.todo}  >
        <CardHeader
          avatar={<Avatar aria-label="recipe">{i + 1} </Avatar>}
          title={
            <Box className={classes.time}>
              <Typography variant='h6' component='h5' className={classes.startTime} >{toDateString(seconds)}</Typography>
            </Box>
          }
        >

        </CardHeader>
        <CardContent>
          <Typography variant='h5'>
            {todo.text}
          </Typography>
        </CardContent>
        <CardActions className={classes.bar}>

          <Box>
            <Button onClick={handleVote} variant='outlined' endIcon={<ArrowUpwardIcon />} color='secondary'>{todo.vote}</Button>
            <Button onClick={handleDone} variant='contained' className={classes.done}
              endIcon={<Check />} color='primary'>Done</Button>
          </Box>

        </CardActions>
      </Card>
    </ListItem >
  )
}


