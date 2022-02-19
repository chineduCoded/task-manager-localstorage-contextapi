import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useTask } from '../context/TodoListContext'

const Container = styled.div`
  padding: 10px;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const TodoInput = styled.input`
  outline: none;
  width: 280px;
  padding: 15px;
  font-size: 20px;
  color: #ccc;
  background-color: #000;
  border: 1px solid #790e43;
  border-radius: 10px;
  margin-bottom: 10px;

  :focus {
    outline: none;
  }
`

const ButtonHolder = styled.div`
  margin-left: 10px;

  @media screen and (max-width: 425px) {
    margin-left: 0;
  }
`

const Button = styled.button`
  background-color: #ccc;
  font-size: 20px;
  color: #790e43;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 15px 22px;
  box-shadow: 0 2ppx 5px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 425px) {
    padding: 15px;
    width: 280px;
  }
`

export const TodoForm = () => {
  const { addTask, editTask, editItem, text, setText } = useTask()

  useEffect(() => {
    if (editItem) {
      setText(editItem.title)
    } else {
      setText('')
    }
  }, [setText, editItem])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) return
    if (!editItem) {
      addTask(text)
      setText('')
    } else {
      editTask(text, editItem.id, editItem.completed, editItem.createdAt)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TodoInput
          type="text"
          placeholder="Add task..."
          value={text}
          onChange={handleChange}
        />
        <ButtonHolder>
          <Button type="submit">{editItem ? 'Edit Task' : 'New Task'}</Button>
        </ButtonHolder>
      </Form>
    </Container>
  )
}
