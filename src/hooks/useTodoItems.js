import { useState } from "react";

export const useTodoItems = (initialItems) => {
  const [items, setItems] = useState(initialItems ? initialItems : []);

  const handleClickCompleted = (id, state) => {
    const updatedItems = [...items];

    const itemIndex = updatedItems.findIndex((item) => item.id === id);
    const updatedItem = Object.assign({}, updatedItems[itemIndex]);
    updatedItem.completed = !state;

    updatedItems.splice(itemIndex, 1, updatedItem);
    setItems(updatedItems);
  };

  const handleDeleteTodo = (id) => {
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);
    updatedItems.splice(itemIndex, 1);

    setItems(updatedItems);
  };

  const handleAddTodo = (obj) => {
    const updatedItems = [obj, ...items];
    setItems(updatedItems);
  };

  const handleUpdateTodo = (id, obj)=>{
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item)=>item.id === id);
    const updatedItem = Object.assign({}, updatedItems[itemIndex]);

    updatedItem.title = obj.title;

    updatedItems.splice(itemIndex, 1, updatedItem);
    setItems(updatedItems);

  }

  return {
    items,
    setItems,
    handleClickCompleted,
    handleDeleteTodo,
    handleAddTodo,
    handleUpdateTodo
  };
};
