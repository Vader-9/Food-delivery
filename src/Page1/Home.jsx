import './Home.css'
import { assets, menu_list } from '../assets/assets';
import { useState } from 'react';
import Foodlist from './Foodlist';

function Home() {


    const [food, setFood] = useState('')
    const [showFood, setShowFood] = useState(false)


    function displayFood(){
        setShowFood(true)
    }


    return (
        <div className="Home">
            <div className="Header">
                <img src={assets.header_img} alt="" />
                <div className="Header-content">
                    <h1>Order your</h1>
                    <h1>favourite food</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores sequi alias nihil blanditiis quam ea, dolor omnis quo, maiores ut enim labore quibusdam? Assumenda, maiores recusandae itaque pariatur quibusdam omnis.</p>
                     <button>view Menu</button>
                </div>
            </div>

            <div className="Explore-menu">
                <h1>Explore our menu</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam architecto velit aperiam, magni iste, illo, nesciunt consectetur id provident dolor dignissimos. Labore debitis </p>

            </div>
            <div className="menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div className='menu-list-items' key={index}>
                            <img src={item.menu_image} alt="" onClick={() => setFood(item.menu_name)}  onDoubleClick={()=>displayFood()}/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            
            <div className="food-cartegory">
                 <Foodlist food={food} showFood={showFood}></Foodlist>
            </div>

            <div className="lastpart">
                <h1>For Better Experience Download</h1>
                <h1>Tomato App</h1>
                <div className="lastpart-img">
                    <img src={assets.play_store} alt="" />
                    <img src={assets.app_store} alt="" />
                </div>
            </div>

            



        </div>
    )
}

export default Home;