import styles from './styles.module.css'

interface CounterProps {
    title: string | number
}

export function Counter({ title }: CounterProps) {
    return <span className={styles.counter}>{ title }</span>
}