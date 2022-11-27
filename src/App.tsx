import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

interface Task {
  id: string,
  task: string,
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTaskToList(task: string) {
    setTasks([...tasks, {
      id: uuidv4(),
      task,
      isCompleted: false
    }])
  }

  function toggleTaskToCompleted(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted
      }

      return task
    })

    setTasks(newTasks)
  }

  function deleteTask(taskId: string) {
    const taskWithoutTaskRemoved = tasks.filter(task => task.id !== taskId)
    setTasks(taskWithoutTaskRemoved)
  }

  return (
    <>
      <Header />
      <Form onCreateNewTask={addTaskToList} />
      <TodoList
        tasks={tasks}
        onToggleTaskToCompleted={toggleTaskToCompleted}
        onDeleteTask={deleteTask}
      />
    </>
  )
}