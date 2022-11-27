import { Counter } from '../Counter'

import styles from './styles.module.css'
import { EmptyList } from './EmptyList'
import { List } from './List'
interface Task {
    id: string,
    task: string,
    isCompleted: boolean
}

interface TodoListProps {
    tasks: Task[]
    onToggleTaskToCompleted: (taskId: string) => void
    onDeleteTask: (taskId: string) => void
}

export function TodoList({ tasks, onToggleTaskToCompleted, onDeleteTask }: TodoListProps) {
    const taskLength = tasks.length
    const tasksCompleted = tasks.filter(task => task.isCompleted)
    
    return (
        <div className={styles.todoList}>
            <div className={styles.info}>
                <h1>
                    Tarefas criadas
                    <Counter title={taskLength} />
                </h1>
                <strong>
                    Concluídas
                    <Counter title={`${tasksCompleted.length} de ${taskLength}`} />
                </strong>
            </div>
            {tasks.length === 0 ? <EmptyList /> : (
                <List
                    tasks={tasks}
                    onToggleTaskToCompleted={onToggleTaskToCompleted}
                    onDeleteTask={onDeleteTask}
                />
            )}
        </div>
    )
}