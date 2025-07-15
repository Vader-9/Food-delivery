import './Card.css'
import { assets } from '../assets/assets'
import  {useState} from 'react'
import CardTotals from './CardTotals'


function Card({ cardItems, setCardItems, setCheckout }) {

    

 console.log(cardItems)

 const itemsSelected = Object.keys(cardItems).map((key) => {
  const itemDetails = cardItems[key].item;
  const itemQuantity = cardItems[key].count;

  return {
    name: itemDetails.name,
    price: itemDetails.price,
    image: itemDetails.image,
    quantity: itemQuantity,
    id: itemDetails._id
  };
});
 


    
const totalItems = itemsSelected.reduce((acc,item)=>{
    return acc + (item.price * item.quantity)
},0)

const deliveryFee = 5

function removeItems(item){
    const updatedCardItems = {...cardItems}
    delete updatedCardItems[item.id]
    console.log(cardItems)
     setCardItems(updatedCardItems)
}




    return(
        <div className="Card">
            <div id="header">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Removal</p>
            </div>
            <div className="CardItems">
             {itemsSelected.map((item,index) =>{
                return(
                    <div className='CardItem' key={index}>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>{item.quantity}</p>
                        <p>${item.price * item.quantity}</p>
                        <img src={assets.cross_icon} alt="" onClick={()=>removeItems(item)}/>
                    </div>
                )
             })}
            </div>
              <div className="CardTotals">
                <h3>Cart Totals</h3>
                <div id='totalItems'><p>Subtotal</p>
                <p>{totalItems}</p></div>
                <div id='deliveryFee'><p>Delivery fee</p>
                <p>{deliveryFee}</p>
                </div>
                <div id='total'><p>Total</p>
                <p>{totalItems+deliveryFee}</p>
                </div>
                <button onClick={()=>setCheckout(true)}>Proccesd to checkout</button>
            </div>
        </div>
    )
}

export default Card