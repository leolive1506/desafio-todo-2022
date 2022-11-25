import styles from './styles.module.css'
import { PlusCircle } from 'phosphor-react'

export function Form() {
    return (
        <form className={styles.form}>
            <input type="text" placeholder='Adicionar uma tarefa' />
            <button>
                Criar
                <PlusCircle />
            </button>
        </form>
    )
}