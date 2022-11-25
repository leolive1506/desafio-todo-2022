import { Counter } from '../Counter'

import { Clipboard } from 'phosphor-react'
import styles from './styles.module.css'
import { EmptyList } from './EmptyList'

export function TodoList() {
    return (
        <div className={styles.todoList}>
            <div className={styles.info}>
                <h1>
                    Tarefas criadas
                    <Counter />
                </h1>
                <strong>
                    Concluídas
                    <Counter />
                </strong>
            </div>
            <EmptyList />
        </div>
    )
}