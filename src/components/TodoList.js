import { useContext } from "react";
import TodoItem from "../components/TodoItem";
import { TodoItemsContext } from "../context/TodoItemsContext";

export default function TodoList() {
  const { viewing,setViewing, items } = useContext(TodoItemsContext);

  const filteredItems =
    viewing === "completed"
      ? items.filter((item) => item.completed === true)
      : viewing === "pending"
      ? items.filter((item) => item.completed === false)
      : items;

  return (
    <>
      <ul
        className={`todoList ease-in-out duration-150 flex flex-col ${
          filteredItems.length === 0 ? "justify-center" : ""
        } items-center gap-2 w-80 h-80 overflow-scroll p-4 rounded bg-slate-200`}
      >
        {filteredItems.length === 0 ? (
          <p className="text-gray-500">
            {viewing === "all"
              ? "Start by adding a new todo."
              : viewing === "completed"
              ? "There are no completed todos."
              : viewing === "pending"
              ? "There are no pending todos."
              : setViewing('all')}
          </p>
        ) : (
          filteredItems.map((item) => <TodoItem key={item.id} data={item} />)
        )}
      </ul>
    </>
  );
}
