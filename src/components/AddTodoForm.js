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

    console.log(data);

    handleAddTodo(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center w-80 py-2"
      >
        <fieldset className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2">
            <input
              type={"text"}
              name="title"
              placeholder="Todo title or description"
              className="h-8 p-2 rounded focus:outline outline-offset-2 outline-2 outline-pasto"
              {...register("title", {
                required: {
                  value: true,
                  message: "You can't add an empty todo.",
                },
              })}
            />
            {errors.title && (
              <p className="text-sm font-bold text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          <button className="ease-in-out duration-150 w-12 h-12 rounded-full bg-pasto hover:opacity-80">
            <i className="bi bi-plus text-xl text-white" />
          </button>
        </fieldset>
      </form>
    </>
  );
}
