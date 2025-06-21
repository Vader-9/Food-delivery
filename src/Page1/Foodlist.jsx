import { assets, food_list } from '../assets/assets';
import './Foodlist.css'
import { useState } from 'react';

function Foodlist({ food, showFood, setShowFood }) {
    const foodfilter = food_list.filter((foods) => {
        return food === foods.category
    })
    
    console.log(foodfilter)
    
    // Used an object state to track quantities for each food item
    const [itemQuantities, setItemQuantities] = useState({})

    function addItems(foodId) {
        setItemQuantities(prev => ({
            ...prev,
            [foodId]: (prev[foodId] || 0) + 1
        }))
    }

    function removeItems(foodId) {
        setItemQuantities(prev => ({
            ...prev,
            [foodId]: Math.max(0, (prev[foodId] || 0) - 1)
        }))
    }

    // Added function to go back to category view (just in case, but i commented it out in the UI)
    const handleBackToCategories = () => {
        setShowFood(false);
    }

    return (
        <div>
            {/* {showFood && (
                <button onClick={handleBackToCategories} style={{marginBottom: '20px'}}>
                    ← Back to Categories
                </button>
            )} */}
            
            {!showFood ? (
                <div id='food-cartegory'>
                    {foodfilter.map((foodItem) => {
                        const quantity = itemQuantities[foodItem._id] || 0;
                        return (
                            <div key={foodItem._id} className='foodlist-folder'>
                                <div className="foodlist-img">
                                    <img src={foodItem.image} alt="" />
                                    <div className="foodlist-addicon">
                                        <div className="adding-items">
                                            <img 
                                                src={assets.add_icon_white} 
                                                alt="" 
                                                onClick={() => addItems(foodItem._id)} 
                                            />
                                            {quantity < 1 ? "" : (
                                                <>
                                                    {quantity}
                                                    <img 
                                                        src={assets.remove_icon_red} 
                                                        alt="" 
                                                        onClick={() => removeItems(foodItem._id)} 
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="foodlist-content">
                                    <div className="foodlist-firstpart">
                                        <h3>{foodItem.name}</h3>
                                        <img src={assets.rating_starts} alt="" />
                                    </div>
                                    <p>{foodItem.description}</p>
                                    <h2>${foodItem.price}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div id='food-cartegory'>
                    {food_list.map((foodItem) => {
                        const quantity = itemQuantities[foodItem._id] || 0;
                        return (
                            <div key={foodItem._id} className='foodlist-folder'>
                                <div className="foodlist-img">
                                    <img src={foodItem.image} alt="" />
                                    <div className="foodlist-addicon">
                                        <div className="adding-items">
                                            <img 
                                                src={assets.add_icon_white} 
                                                alt="" 
                                                onClick={() => addItems(foodItem._id)} 
                                            />
                                            {quantity < 1 ? "" : (
                                                <>
                                                    {quantity}
                                                    <img 
                                                        src={assets.remove_icon_red} 
                                                        alt="" 
                                                        onClick={() => removeItems(foodItem._id)} 
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="foodlist-content">
                                    <div className="foodlist-firstpart">
                                        <h3>{foodItem.name}</h3>
                                        <img src={assets.rating_starts} alt="" />
                                    </div>
                                    <p>{foodItem.description}</p>
                                    <h2>${foodItem.price}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Foodlist
