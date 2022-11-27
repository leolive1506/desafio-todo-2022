import { Trash } from 'phosphor-react'
import styles from './styles.module.css'

interface Task {
    id: string,
    task: string,
    isCompleted: boolean
}

interface ListProps {
    tasks: Task[],
    onToggleTaskToCompleted: (taskId: string) => void
    onDeleteTask: (taskId: string) => void
}

export function List({ tasks, onToggleTaskToCompleted, onDeleteTask }: ListProps) {
    return (
        <div className={styles.list}>
            { tasks.map(task => (
                <div className={styles.listItem} key={task.id}>
                    <div>
                        <input
                            type="checkbox"
                            id={task.id}
                            checked={task.isCompleted}
                            onChange={() => onToggleTaskToCompleted(task.id)}
                        />
                        <label
                            htmlFor={task.id}
                            className={styles.check}
                        ></label>
                    </div>
                    <p>
                        {task.task}
                    </p>
                    <button onClick={() => onDeleteTask(task.id)}>
                        <Trash />
                    </button>
                </div>
            ))}
        </div>
    )
}