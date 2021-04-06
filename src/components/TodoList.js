import { List } from '@material-ui/core'
import React from 'react'
import Todo from './Todo'
export default function TodoList(props) {
  const { todoList } = props
  return (
    <List>
      {
        todoList.map((todo, i) => {
          return (
            <Todo key={todo.id} todo={todo} ready={true} i={i} />
          )
        })
      }

    </List>
  )
}

