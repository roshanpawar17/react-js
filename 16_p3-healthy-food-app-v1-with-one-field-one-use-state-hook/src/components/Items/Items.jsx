import FoodItem from "../FoodItem/FoodItem";

function Items({foodItems, deleteFoodItem}) {
    return (
        <>
            {
                foodItems.map((foodItem) => (
                    <FoodItem key={foodItem} foodItem={foodItem} deleteFoodItem={deleteFoodItem}/>
                ))
            }
        </>
    )
}

export default Items;