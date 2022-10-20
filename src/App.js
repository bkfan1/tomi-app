import { TodoItemsProvider } from "./context/TodoItemsContext";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <TodoItemsProvider>
      <div className="App">
        <TodoApp />
      </div>
    </TodoItemsProvider>
  );
}

export default App;
