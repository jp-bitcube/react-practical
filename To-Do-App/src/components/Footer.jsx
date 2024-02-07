import styles from './footer.module.css'

export default function Footer({completedCount, totalCount}) {
    return (
        <div className={styles.footer}>
            <p>Completed Todos: {completedCount} </p>
            <p>Total Todos: {totalCount} </p>
        </div>
    )
}