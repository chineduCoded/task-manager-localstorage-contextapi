import React from 'react'
import styled from 'styled-components'
import { TodoForm } from './components/TodoForm'
import { TodoHeader } from './components/TodoHeader'
import { TodoList } from './components/TodoList'


const Container = styled.div`
background: linear-gradient(to right bottom, pink 50%, #790e43 50%);
min-height: 100vh;
width: 100%;
padding: 10px;
`

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding-top: 50px;
`

const TodoContainer = styled.div`
background-color: rgba(0, 0, 0, 0.4);
color: #fff;
width: min(500px, 100%);
min-height: 580px;
display: flex;
// justify-content: center;
flex-direction: column;
border-radius: 10px;
box-sizing: border-box;
box-shadow: 3px 6px 40px #000;
margin-bottom: 10px;
padding: 5px;

`

const App = () => {
  return (
    <>
    
    <Container>
      <Wrapper>
        <TodoContainer>
          <TodoHeader />
          <TodoForm />
          <TodoList />
        </TodoContainer>
      </Wrapper>
    </Container>
    
    </>
  )
}

export default App