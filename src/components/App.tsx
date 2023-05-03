
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
        <div className="p-[30px] flex flex-col gap-[30px] bg-[#e7e7e7] min-h-[100vh] max-w-[80vw] mx-[auto] rounded-[8px]">
            <div className="bg-[#e7e7e7] w-[90%] mx-[auto] flex flex-col gap-[40px]">
                <div className="bg-[#fff] p-[10px] flex flex-wrap gap-[10px] justify-between rounded-[8px]">
                    <input className="border max-w-[100%] flex-grow px-[8px] rounded-[8px]" value={value} onKeyDown={handleKeyDown} onChange={e => setValue(e.target.value)} type="text" ref={inputRef} />
                    <button className="border p-[6px] hover:bg-[#d1d1d1] rounded-[8px] " onClick={addTodo}>Add</button>
                </div>
                <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            </div>
        </div>
     );
}
 
export default App;