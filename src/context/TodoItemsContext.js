import { createContext, useState } from "react";
import { useTodoItems } from "../hooks/useTodoItems";

export const TodoItemsContext = createContext();


export const TodoItemsProvider = ({children})=>{

    const [viewing, setViewing] = useState('all');
    const {items, handleClickCompleted, handleAddTodo, handleDeleteTodo, handleUpdateTodo} = useTodoItems();


    return(
        <>
        <TodoItemsContext.Provider value={{viewing, setViewing, items, handleClickCompleted, handleAddTodo, handleDeleteTodo, handleUpdateTodo}}>
            {children}
        </TodoItemsContext.Provider>
        </>
    )

}