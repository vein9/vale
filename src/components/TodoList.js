import { List } from '@material-ui/core'
import React from 'react'
import Todo from './Todo'
export default function TodoList() {

  return (
    <List>
      <Todo ready={true} />
      <Todo />
      <Todo />
      <Todo />

    </List>
  )
}

