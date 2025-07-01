import NavBar from "./NavBar"
import Home from "./Page1/Home"
import Card from './Page2/Card'
import { useState } from "react"


function App() {
 const [card, setCard] = useState(false)
 const [cardItems, setCardItems] = useState({})

  return (
    <div className="app">
      <NavBar setCard={setCard}></NavBar>
      <div id="app">
        {!card ? <Home setCardItems={setCardItems}></Home> : <Card cardItems={cardItems}></Card>}
      </div>
    </div>
  )
}

export default App
