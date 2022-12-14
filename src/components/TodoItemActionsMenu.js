import { useContext } from "react";
import { TodoItemsContext } from "../context/TodoItemsContext";

export default function TodoItemActionsMenu({
  id,
  displayOptions,
  setDisplayOptions,
  editing,
  setEditing,
}) {
  const { handleDeleteTodo } = useContext(TodoItemsContext);

  return (
    <>
      <ul className="relative">
        <li>
          <button onClick={() => setDisplayOptions(!displayOptions)}>
            <i className={`bi bi-three-dots text-pasto hover:opacity-70 `} />
          </button>
        </li>

        {displayOptions ? (
          <li>
            <ul className="absolute left-[-55px] flex flex-col gap-2 w-24 p-2 border rounded bg-white">
              <li>
                <button
                  onClick={() => setEditing(!editing)}
                  disabled={editing ? true : false}
                  className={`${
                    editing ? "opacity-70 text-gray-500" : "text-blue-500"
                  } `}
                >
                  <i className="bi bi-pencil" />
                  Edit
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDeleteTodo(id)}
                  className="text-red-500"
                >
                  <i className="bi bi-trash" />
                  Delete
                </button>
              </li>
            </ul>
          </li>
        ) : (
          ""
        )}
      </ul>
    </>
  );
}
