import './Checkout.css'

function Checkout({ cardItems, setCardItems, setCheckout }) {

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

    const totalItems = itemsSelected.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
    }, 0)

    const deliveryFee = 5

    return (
        <div className="Checkout">
            <div className="DeliveryInfo">
                <h2>Delivery Information</h2>
                <div className="firstandlastname">
                    <input type="text" placeholder="firstname" />
                    <input type="text" placeholder="lastname" />
                </div>
                <div className="longspace">
                    <input type="text" placeholder="Email address" />
                    <input type="text" name="" id="" placeholder="Greater stack white space" />
                </div>
                <div className="two">
                    <input type="text" placeholder="lagos" />
                    <input type="text" name="" id="" placeholder="abuja" />
                </div>
                <div className="two">
                    <input type="text" placeholder="lagos" />
                    <input type="text" name="" id="" placeholder="abuja" />
                </div>
                <input type="text" id="lastinput" />

            </div>
            <div className="Carttools">
                <div className="CardTotals">
                    <h3>Cart Totals</h3>
                    <div id='totalItems'><p>Subtotal</p>
                        <p>{totalItems}</p>
                    </div>
                    <div id='deliveryFee'><p>Delivery fee</p>
                        <p>{deliveryFee}</p>
                    </div>
                    <div id='total'><p>Total</p>
                        <p>{totalItems + deliveryFee}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Checkout;