import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";

export default function TodoApp() {
  return (
    <>
      <main className="todoApp flex flex-col justify-center items-center w-screen h-screen">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-pasto">Tomi</h1>
          <p>A minimalist todo app.</p>
        </header>
        <TodoListHeader />
        <TodoList />
        <AddTodoForm />
        <footer className="flex flex-col items-center justify-center pt-4 text-center text-base text-pasto">
          <p className="">
            Created by Jackson Paredes Ferranti{" "}
            <a href="https://www.github.com/bkfan1">@bkfan1</a>
          </p>
          <ul className="flex gap-2">
            <li>
              <a
                title="App repository"
                href="https://www.github.com/bkfan1/tomi-app"
              >
                <i className="bi bi-github" />
              </a>
            </li>
            <li>
              <a title="Contact bkfan1" href="mailto:jpf8296@gmail.com">
                <i className="bi bi-envelope-fill" />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
}
