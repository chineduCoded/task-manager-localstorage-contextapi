import React from 'react'
import { FaCheckCircle, FaEdit, FaTrashAlt } from 'react-icons/fa'
import styled from 'styled-components'
import { useTask } from '../context/TodoListContext'

const Container = styled.div`
  padding: 0 10px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
`
const ContentHolder = styled.div`
  color: #fff;
  font-size: 20px;
`

const IconHolder = styled.div`
  display: flex;
`
const IconComplete = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: teal;
  margin-right: 10px;
  background-color: transparent;
  font-size: 24px;
`
const IconEdit = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: ;
  margin-right: 10px;
  color: #e2d029;
  background-color: transparent;
  font-size: 24px;
`

const IconDelete = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: coral;
  background-color: transparent;
  font-size: 24px;
`

export const Todo = ({ task }) => {
  const { removeTask, completeTask, findItem } = useTask()
  const { title, id } = task

  const handleComplete = (task) => {
    completeTask(task)
  }

  const handleEdit = (id) => {
    findItem(id)
  }

  const handleRemove = (id) => {
    removeTask(id)
  }
  return (
    <Container>
      <Wrapper>
        <ContentHolder
          style={{
            textDecorationLine: task.completed ? 'line-through' : '',
            textDecorationColor: '#790e43',
            textDecorationStyle: 'solid',
          }}
        >
          {title}
        </ContentHolder>
        <IconHolder>
          <IconComplete onClick={() => handleComplete(task)}>
            <FaCheckCircle />
          </IconComplete>
          <IconEdit onClick={() => handleEdit(id)}>
            <FaEdit />
          </IconEdit>
          <IconDelete onClick={() => handleRemove(id)}>
            <FaTrashAlt />
          </IconDelete>
        </IconHolder>
      </Wrapper>
    </Container>
  )
}
