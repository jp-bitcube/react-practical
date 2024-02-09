import styles from  './fooditem.module.css'

export default function FoodItem({item, setFoodID}) {
    return (
        <div className={styles.itemContainer}>
          <img className={styles.itemImage} alt={item.title} src={item.image}/>

          <div className={styles.itemContent}>
            <p className={styles.itemName}>{item.title}</p>
          </div>
 
					<div className={styles.buttonContainer}>
						<button className={styles.itemButton} onClick={() => {
              console.log(item.id)
              setFoodID(item.id);
            }}>View Recipe</button>
					</div>
        </div>
    )
}