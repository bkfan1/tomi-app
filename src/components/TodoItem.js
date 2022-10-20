import { useContext, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import { TodoItemsContext } from "../context/TodoItemsContext";
import TodoItemActionsMenu from "./TodoItemActionsMenu";
import UpdateTodoForm from "./UpdateTodoForm";

export default function TodoItem({ data }) {
  const { id, completed, title, createdAt } = data;
  const { handleClickCompleted } = useContext(TodoItemsContext);
  const [editing, setEditing] = useState(false);

  const [displayOptions, setDisplayOptions] = useState(false);

  return (
    <>
      <li className="todoItem flex justify-between items-center gap-4 w-72 p-4 rounded border bg-white">
        <section className="flex gap-4">
          <button onClick={() => handleClickCompleted(id, completed)}>
            <i
              className={` bi ${
                completed ? "bi-check-circle-fill" : "bi bi-circle"
              } text-xl text-pasto`}
            />
          </button>

          <div className="flex flex-col">
            {editing ? (
              <UpdateTodoForm
                id={id}
                title={title}
                setEditing={setEditing}
                setDisplayOptions={setDisplayOptions}
              />
            ) : (
              <>
                <h1 className="font-bold text-[#163d3b]">{title}</h1>
                <ReactTimeAgo
                  date={createdAt}
                  locale="en-US"
                  className="text-sm text-slate-500"
                />
              </>
            )}
          </div>
        </section>

        <TodoItemActionsMenu
          id={id}
          editing={editing}
          setEditing={setEditing}
          displayOptions={displayOptions}
          setDisplayOptions={setDisplayOptions}
        />
      </li>
    </>
  );
}
