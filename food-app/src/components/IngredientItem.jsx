import styles from './ingredientitem.module.css'

export default function IngredientItem({ item }) {
    return (
        <div>
            <div className={styles.itemContainer}>
                <img className={styles.itemImage} src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt={item.name} />
                <div className={styles.itemContent}>
                    <h3 className={styles.itemTitle}>{item.name}</h3>
                    <h3 className={styles.itemText}>Quantity: {item.amount} {item.unit}</h3>
                </div>

            </div>
        </div>
    )
}