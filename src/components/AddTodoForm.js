import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoItemsContext } from "../context/TodoItemsContext";

export default function AddTodoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { handleAddTodo } = useContext(TodoItemsContext);

  const onSubmit = (data) => {
    data.createdAt = new Date();
    data.id = nanoid();
    data.completed = false;

    //console.log(data);

    const splitted = data.title.split("");
    if (splitted.every((char) => char === " ")) {
      data.title = "Untitled note";
    }

    //console.log(splitted)

    handleAddTodo(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center w-80 py-2"
      >
        <fieldset className="flex items-center justify-between w-full">
          <input
            type={"text"}
            required
            name="title"
            title="Todo title or description"
            placeholder="Todo title or description"
            className="h-8 p-2 rounded focus:outline outline-offset-2 outline-2 outline-pasto"
            {...register("title", {
              minLength: { value: 1 },
              required: {
                value: true,
                message: "You can't add an empty todo.",
              },
            })}
          />
        </fieldset>
        <button
          title="Add todo"
          className="ease-in-out duration-150 w-12 h-12 rounded-full bg-pasto hover:opacity-80"
        >
          <i className="bi bi-plus text-xl text-white" />
        </button>
      </form>
    </>
  );
}
