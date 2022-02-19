import React from 'react'
import { useTask } from '../context/TodoListContext'
import { Todo } from './Todo'

export const TodoList = () => {
  const { tasks } = useTask()
  return (
    <>
      {tasks.map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </>
  )
}
