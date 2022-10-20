import { nanoid } from "nanoid";
import { useContext } from "react";
import { TodoItemsContext } from "../context/TodoItemsContext";

const buttons = [
  { id: nanoid(), text: "All", view: "all" },
  { id: nanoid(), text: "Completed", view: "completed" },
  { id: nanoid(), text: "Pending", view: "pending" },
];

export default function TodoListHeader() {
  const { viewing, setViewing } = useContext(TodoItemsContext);

  return (
    <>
      <header className="w-80">
        <ul className="flex justify-center items-center gap-6 py-4">
          {buttons.map((button) => (
            <li key={button.id}>
              <button
                onClick={() => setViewing(button.view)}
                className={`ease-in-out duration-150 p-1 rounded ${
                  viewing === button.view
                    ? "bg-pasto text-white"
                    : "bg-none text-pasto hover:bg-slate-200"
                } `}
              >
                {button.text}
              </button>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
