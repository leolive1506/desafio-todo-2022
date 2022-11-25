import styles from './styles.module.css'

interface CounterProps {
    number?: number
}

export function Counter({ number = 0 }: CounterProps) {
    return <span className={styles.counter}>{ number }</span>
}