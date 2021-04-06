import { Box, Button, TextField, IconButton } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TodoList from './components/TodoList'
import { Add } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import DayOfMonth from './components/DayOfMonth'
import DayOfWeek from './components/DayOfWeek'
import uploadTodo from './firebase/uploadTodo'
import getTodoList from './firebase/getTodoList';

const useStyles = makeStyles((theme) => createStyles({
  app: {
    height: '100%',
    backgroundColor: '#78909c',
  },
  form: {
    background: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: '100%'
  },
  button: {
    marginLeft: '5px',
  }
}))

export default function App() {
  const classes = useStyles()
  const [taskName, setTaskName] = useState('')
  const [dayOfMonth, setDayOfMonth] = useState(null)
  const [dayOfWeek, setDayOfWeek] = useState(null)

  const todoList = getTodoList()

  useEffect(() => {
    console.log(todoList)
  }, [todoList])

  const handleCreateTask = e => {
    e.preventDefault()
    console.log('create task called')

    let today = new Date()

    if (dayOfWeek !== null && dayOfWeek !== undefined) {
      // console.log('datofweek:', dayOfWeek)
      let distance = dayOfWeek - today.getDay()
      today.setDate(distance + today.getDate())
    }

    if (dayOfMonth) {
      today.setDate(dayOfMonth)
    }
    console.log('today:', today)

    let newTodo = {
      done: false,
      startDate: today,
      vote: 0,
      text: taskName,
    }
    uploadTodo(newTodo)


    setDayOfMonth(null)
    setDayOfWeek(null)
    setTaskName('')
  }

  return (
    <Box className={classes.app}>
      {dayOfMonth}
      {dayOfWeek}
      <form className={classes.form}
        onSubmit={handleCreateTask}
      >
        <TextField
          className={classes.input}
          id="outlined"
          label="New task"
          // defaultValue="Default Value"
          variant="outlined"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          required
        />
        <DayOfMonth setDayOfMonth={setDayOfMonth} setDayOfWeek={setDayOfWeek} />
        <DayOfWeek setDayOfMonth={setDayOfMonth} setDayOfWeek={setDayOfWeek} />
        <IconButton type='submit'>
          <Add fontSize='large' color='primary' />
        </IconButton>
      </form>
      {
        todoList.length > 0 &&
        <TodoList todoList={todoList} />
      }

    </Box>


  )
}


