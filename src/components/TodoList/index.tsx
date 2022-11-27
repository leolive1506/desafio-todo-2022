import { Counter } from '../Counter'

import styles from './styles.module.css'
import { EmptyList } from './EmptyList'
import { List } from './List'

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
            {/* <EmptyList /> */}
            <List />

        </div>
    )
}