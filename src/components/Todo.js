import {
  Paper, Card, CardContent, Typography, CardActions, Button,
  IconButton, CardHeader, Avatar, Checkbox, makeStyles, createStyles, Grid, Box, Container
} from '@material-ui/core'
import { MoreVert, Delete, Check } from '@material-ui/icons'
import { ListItem } from '@material-ui/core'
import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

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
    opacity: 0.1
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
  const { ready } = props
  const classes = useStyles()
  return (
    <ListItem >
      <Card className={ready ? classes.todoReady : classes.todo}  >
        <CardHeader
          avatar={<Avatar aria-label="recipe">1</Avatar>}
          title={
            <Box className={classes.time}>
              <Typography variant='h6' component='h5' className={classes.startTime} >3h 6/9/2020</Typography>
              <Typography variant='h6' component='h5' className={classes.endTime} >23h 8/9/2020</Typography>
            </Box>
          }
        >

        </CardHeader>
        <CardContent>
          <Typography variant='h5'>
            rua chen quyet nha lau nha tam rua
          </Typography>
        </CardContent>
        <CardActions className={classes.bar}>

          <Box>
            <Button variant='outlined' endIcon={<ArrowUpwardIcon />} color='secondary'>2</Button>
            <Button variant='contained' className={classes.done} endIcon={<Check />} color='primary'>Done</Button>
          </Box>
          <Button variant='outlined' endIcon={<Delete />} color='secondary'>delete</Button>


        </CardActions>
      </Card>
    </ListItem >
  )
}


