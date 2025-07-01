

function Card({ cardItems }) {
 console.log(cardItems)
    

    return(
        <div className="Card">
            <div className="CardItems">
             {Object.keys(cardItems).map((item, index) => {
                const itemDetails = cardItems[item].item;
                const itemQuantity = cardItems[item].count;
                return (
                    <div className="CardItem" key={index}>
                        <img src={itemDetails.image} alt={itemDetails.name} />
                        <div className="CardItemDetails">
                            <h3>{itemDetails.name}</h3>
                            <p>Price: ${itemDetails.price}</p>
                            <p>Quantity: {itemQuantity}</p>
                        </div>
                    </div>
                )
             })}
            </div>
            <div className="CardTotal">

            </div>
        </div>
    )
}

export default Card