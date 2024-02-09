import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css"

export default function FoodList({ data, setFoodID }) {
    return ( 
      <div className={styles.foodListContainer}>
			{
	 			data.map((d) => {
					return <FoodItem key={d.id} item={d} setFoodID={setFoodID}/>;
				})
			}
      </div>
    )
}