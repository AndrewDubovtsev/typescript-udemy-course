import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {Todo} from './todo.model';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
       setTodos(prevTodos => prevTodos.concat({id: Math.random().toString(), text}));
    };

    const todoDeleteHandler = (todoToDeleteId: string) => {
        setTodos(prevTodos => prevTodos.filter(todoItem => todoItem.id !== todoToDeleteId));
    };

    return (
        <div className='App'>
            <NewTodo onAddTodo={todoAddHandler} />
            <TodoList onDeleteTodo={todoDeleteHandler} items={todos}/>
        </div>
    );
};

export default App;
