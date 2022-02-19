import { createContext, useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid"

export const TodoListContext = createContext()

export const TodoListContextProvider = ({children}) => {

    const initialState = JSON.parse(localStorage.getItem("tasks")) || []

    const [text, setText] = useState('')
    const [tasks, setTasks] = useState(initialState)
    const [editItem, setEditItem] = useState(null)

    console.log(tasks)

    const addTask = (text) => {
        setTasks([...tasks, { id: "task-" + nanoid(), title: text, completed: false, createdAt: new Date()}])
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const completeTask = (task) => {
        setTasks(tasks.map((item) => {
            if( item.id === task.id) {
                return {...item, completed: !item.completed}
            }
            return item
        }))
    }

    const findItem = (id) => {
        const item = tasks.find((task) => task.id === id)
        setEditItem(item)
    }

    const editTask = ( title, id, completed, createdAt) => {
        const newTask = tasks.map((task) => 
            task.id === id ? {title, id, completed, createdAt} : task
        )
        setTasks(newTask)
        setEditItem(null)
    }

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const values = { text, setText, tasks, setTasks, addTask, removeTask, completeTask, editItem, findItem, editTask }
    return (
        <TodoListContext.Provider value={values}>
            {children}
        </TodoListContext.Provider>
    )
}

export const useTask = () => {
    const { text, setText, tasks, setTasks, addTask, removeTask, completeTask, editItem, findItem, editTask } = useContext(TodoListContext)

    return { text, setText, tasks, setTasks, addTask, removeTask, completeTask, editItem, findItem, editTask }
}