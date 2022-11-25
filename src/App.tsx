import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

export function App() {
  return (
    <>
      <Header />
      <Form />
      <TodoList />
    </>
  )
}