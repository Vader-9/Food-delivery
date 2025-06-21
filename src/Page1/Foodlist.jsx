import { assets, food_list } from '../assets/assets';
import './Foodlist.css'
import { useState } from 'react';



function Foodlist({ food, showFood}) {

    const foodfilter = food_list.filter((foods) => {
        return food === foods.category
    })

    console.log(foodfilter)

    const [addItem, setAddItem] = useState(0)


    function addItems(){
        setAddItem(addItem + 1)
    }

     function removeItems(){
        if(addItem > limit){
             setAddItem(addItem - 1)
        }
        
    }

    const limit = 0

    return (
        <div>
            { !showFood ? <div id='food-cartegory'>
            {foodfilter.map((food) => {
                return (
                    <div key={food._id} className='foodlist-folder'>
                        <div className="foodlist-img">
                            <img src={food.image} alt="" />
                            <div className="foodlist-addicon">
                                <div className="adding-items">
                                    <img src={assets.add_icon_white} alt="" onClick={addItems} />
                                    {addItem < 1 ? "" : <> {addItem}
                                        <img src={assets.remove_icon_red} alt="" onClick={removeItems} /></>}
                                </div>
                            </div>
                        </div>
                        <div className="foodlist-content">
                            <div className="foodlist-firstpart">
                                <h3>{food.name}</h3>
                                <img src={assets.rating_starts} alt="" />
                            </div>
                            <p>{food.description}</p>
                            <h2>${food.price}</h2>
                        </div>
                    </div>
                )
            })}
        </div> 
        
        : 

        <div id='food-cartegory'>
            {food_list.map((food) => {
                return (
                    <div key={food._id} className='foodlist-folder'>
                        <div className="foodlist-img">
                            <img src={food.image} alt="" />
                            <div className="foodlist-addicon">
                                <div className="adding-items">
                                    <img src={assets.add_icon_white} alt="" onClick={addItems} />
                                    {addItem < 1 ? "" : <> {addItem}
                                        <img src={assets.remove_icon_red} alt="" onClick={removeItems} /></>}
                                </div>
                            </div>
                        </div>
                        <div className="foodlist-content">
                            <div className="foodlist-firstpart">
                                <h3>{food.name}</h3>
                                <img src={assets.rating_starts} alt="" />
                            </div>
                            <p>{food.description}</p>
                            <h2>${food.price}</h2>
                        </div>
                    </div>
                )
            })}
        </div> }
        </div>
    )
    
        
    
}

export default Foodlist