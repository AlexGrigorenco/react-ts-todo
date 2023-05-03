

import { ITodo } from "../types/data";

interface ItodoItem extends ITodo{
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    index: number;
}


const TodoItem: React.FC<ItodoItem> = (props) => {

    const {id, title, complete, removeTodo, toggleTodo, index} = props

    const date = new Date(id)

    return ( 
        <div style={{zIndex: index + 1}} className={complete ? 'relative todo-item bg-[#1deb1da1] p-[10px] rounded-[8px]' : 'relative todo-item bg-[#fff]  p-[10px] rounded-[8px]'}>
            <div className="flex gap-[20px] justify-between">
                <div className="flex gap-[10px]">
                    <div>
                        <input className="cursor-pointer" type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
                    </div>
                    <span className="text-[18px] uppercase">
                        {title}
                    </span>
                </div>
                <div>
                    <button onClick={() => removeTodo(id)} className="border p-[6px] rounded-[8px] bg-[#fff] hover:bg-[#ee2929b3]">
                            <svg width="14px" height="14px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/>
                            </svg>
                    </button>
                </div>
            </div>
            <div className="date z-10 left-0 rounded-[8px] pt-[8px] w-[100%] p-[10px]">
                <div className="h-[2px] w-[100%] bg-[#e7e7e7] mt-[6px]"></div>
                <div className="pt-[8px] text-[12px]">
                    <div>
                        <span className="opacity-[0.6]">Дата создания заметки: </span><span>{date.toLocaleDateString()}</span>
                    </div>
                    <div>
                    <span className="opacity-[0.6]">Время создания заметки: </span><span>{date.toLocaleTimeString()}</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TodoItem;