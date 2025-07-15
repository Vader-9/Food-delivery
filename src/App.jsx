import NavBar from "./NavBar"
import Home from "./Page1/Home"
import Card from "./Page2/Card"
import Checkout from "./Page3/Checkout"

import { useState } from "react"


function App() {
 const [card, setCard] = useState(false)
 const [cardItems, setCardItems] = useState({})
 const [checkout, setCheckout] = useState(false)

 //

  return (
    <div className="app">
      <NavBar setCard={setCard}></NavBar>
      <div id="app">
        {!card ? <Home setCardItems={setCardItems}></Home> : !checkout ? <Card cardItems={cardItems} setCardItems={setCardItems} setCheckout={setCheckout}></Card> : <Checkout cardItems={cardItems} setCheckout={setCheckout} ></Checkout>}
      </div>
    </div>
  )
}

export default App
