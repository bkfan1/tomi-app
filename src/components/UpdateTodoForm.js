import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoItemsContext } from "../context/TodoItemsContext";

export default function UpdateTodoForm({
  id,
  title,
  setDisplayOptions,
  setEditing,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    setDisplayOptions(false);
    setEditing(false);
    handleUpdateTodo(id, data);
  };

  const { handleUpdateTodo } = useContext(TodoItemsContext);

  const cancelEdit = (e)=>{
    if(e.key === 'Escape'){
        
        setEditing(false);
        setDisplayOptions(false);
    }

  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} onKeyUp={(e)=>cancelEdit(e)}>
        <input
          type="text"
          name="title"
          defaultValue={title}
          {...register("title", {
            required: { value: true, message: "You cant leave an empty todo." },
          })}
          placeholder="Type a new title"
          className="w-40 rounded focus:outline outline-offset-2 outline-2 outline-pasto"
        />
      </form>
    </>
  );
}
