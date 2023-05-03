

import { ITodo } from "../types/data";

interface ItodoItem extends ITodo{
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}


const TodoItem: React.FC<ItodoItem> = (props) => {

    const {id, title, complete, removeTodo, toggleTodo} = props

    return ( 
        <div className="flex gap-[20px]">
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
            {title}
            <button onClick={() => removeTodo(id)} className="border px-[4px]">X</button>
        </div>
     );
}
 
export default TodoItem;