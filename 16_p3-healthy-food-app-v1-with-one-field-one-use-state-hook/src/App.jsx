import { useState } from 'react';

import Input from './components/Input/Input';
import Items from './components/Items/Items';

import './App.css';

function App() {

    const [foodItems, setFoodItems] = useState([]);
    console.log(foodItems);

    const deleteFoodItem = (item) => {
        const newItems = foodItems.filter(foodItem => foodItem !== item);
        setFoodItems(newItems);
    }

    return (
        <div className="flex flex-col gap-4 items-start p-4 m-4 border-2 w-[30rem]">
            <h1>Healthy Food</h1>
            <Input setFoodItems={setFoodItems} />
            { foodItems?.length ? <Items foodItems={foodItems} deleteFoodItem={deleteFoodItem} /> : <p className="w-full text-center">Food Items not available.</p> }
        </div>
    )
}

export default App;
