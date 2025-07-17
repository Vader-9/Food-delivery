import { useState } from 'react';
import './NavBar.css'
import { assets } from './assets/assets'


function NavBar({setCard, setLogin}) {

    const [nav, setNav] = useState('')
    

    return (
        <div className='NavBar'>
            <img src={assets.logo} alt="" />
            <ul className="nav-links">
              <li onClick={()=>setNav('home')} className={nav==="home" ? 'active': ''}>home</li>
              <li onClick={()=>setNav('menu')} className={nav==="menu" ? 'active': ''}>menu</li>
              <li onClick={()=>setNav('mobile')} className={nav==="mobile" ? 'active': ''}>mobile</li>
              <li onClick={()=>setNav('contact')} className={nav==="contact" ? 'active': ''}>contact</li>
            </ul>
            <div className="Nav-cards">
                <img src={assets.search_icon} alt=""  />
                <img src={assets.basket_icon} alt="" onClick={()=>setCard(true)}  onDoubleClick={()=>setCard(false)}/>
                <button onClick={()=>setLogin(true)}>Sign in</button>
            </div>
        </div>
    )
}

export default NavBar;