import { MdOutlineDelete } from "react-icons/md";

function FoodItem({foodItem, deleteFoodItem}) {
  return (
    <div className="flex justify-between w-full">
      <li>{foodItem}</li>
      <MdOutlineDelete className="text-2xl text-red-500 cursor-pointer" title="Delete" onClick={() => deleteFoodItem(foodItem)}/>
    </div>
  )
}

export default FoodItem