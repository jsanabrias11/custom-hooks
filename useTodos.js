import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const inicialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    
    const [todos, dispatch] = useReducer( todoReducer, inicialState, init)
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]); 


    const handleNewTodo = (todo) => {        
        
        const action = {
            type : '[TODO] Add Todo',
            payload : todo
        }
        dispatch(action)        
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type : '[TODO] remove Todo',
            payload : id
        }
        dispatch(action);
    }

    const handleToggleDone = (id) => {
        const action = {
            type : '[TODO] toggle Todo',
            payload : id
        }

        dispatch(action);
    }

    const todosCounter = (todos) => {
        return todos.length;
    }
    const pendingTodosCount = (todos) => {        
        return todos.filter(todo => !todo.done).length;
    }
    return {
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleDone,
        todosCounter,
        pendingTodosCount
    }
}
