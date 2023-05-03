
import { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList";
import { ITodo } from "../types/data";

const App: React.FC = () => {

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        e.key === 'Enter' && addTodo()
    }

    const addTodo = () => {
        if(value.trim() !== ''){
            setTodos([...todos, {
                id: Date.now(),
                title: value.trim(),
                complete: false,
            }])
            setValue('')
        }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    useEffect(() => {
        inputRef.current && inputRef.current.focus()
    }, [])

    return ( 
        <div className="p-[30px] flex flex-col gap-[30px]">
            <div>
                <input className="border" value={value} onKeyDown={handleKeyDown} onChange={e => setValue(e.target.value)} type="text" ref={inputRef} />
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
     );
}
 
export default App;