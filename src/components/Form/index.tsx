import styles from './styles.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface FormProps {
    onCreateNewTask: (task: string) => void;
}

export function Form({ onCreateNewTask }: FormProps) {
    const [task, setTask] = useState('');

    function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value)
    }

    function handleCreateNewTask(e: FormEvent) {
        e.preventDefault();
        if (task.trim() !== '') {
            onCreateNewTask(task)
            setTask('')
        }
    }

    return (
        <form className={styles.form}>
            <input
                placeholder='Adicionar uma tarefa'
                onChange={handleNewTaskChange}
                value={task}
            />
            <button onClick={handleCreateNewTask}>
                Criar
                <PlusCircle />
            </button>
        </form>
    )
}