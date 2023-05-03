

import TodoItem from "./TodoItem";
import { ITodo } from "../types/data";

interface ITodoList {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}


const TodoList: React.FC<ITodoList> = (props) => {

    const {items, removeTodo, toggleTodo} = props

    return ( 
        <div className="flex flex-col gap-[20px]">
            {
                items.map(todo => <TodoItem key={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo} {...todo} />)
            }
        </div>
     );
}
 
export default TodoList;