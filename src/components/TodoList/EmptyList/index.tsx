import { Clipboard } from 'phosphor-react'
import styles from './styles.module.css'

export function EmptyList() {
    return (
        <div className={styles.empty}>
            <Clipboard />
            <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}