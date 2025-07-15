import './Card.css';
function CardTotals({}){
     return(
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
     )
}

export default CardTotals;