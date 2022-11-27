import { Trash } from 'phosphor-react'
import styles from './styles.module.css'

export function List() {
    return (
        <div className={styles.list}>
            <div className={styles.listItem}>
                <div>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className={styles.check}></label>
                </div>
                <p>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                </p>
                <button>
                    <Trash />
                </button>
            </div>
        </div>
    )
}