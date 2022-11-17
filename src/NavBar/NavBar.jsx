import React, { useState } from 'react'
import './NavBar.css'
import logo from './logo.svg'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {HiMenu} from 'react-icons/hi'
import {FaTimes} from 'react-icons/fa'
import {RiDeleteBin5Line} from 'react-icons/ri'
import avatar from './image-avatar.png'
import { ImgArr } from '../Product/imagesData'
import { useSelector ,useDispatch } from 'react-redux'
import { dispatchtByAmount } from '../CartSlice'
const NavBar = () => {

    const dispatch = useDispatch()

    const links = [

        {
            id:1,
            link:'Collections'
        },
        {
            id:2,
            link:'Men'
        },
        {
            id:3,
            link:'Women'
        },
        {
            id:4,
            link:'About'
        },
        {
            id:5,
            link:'Contact'
        },
    ];

    const [popUp, setPopUp] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(true);

    const handlePopUp = () => {
        setPopUp(!popUp)
    };
    
    
    let navCart = useSelector((state) => state.cart.navCart);
    
    const removeIcon = () => {
        dispatch(dispatchtByAmount(0))
    };

    const lightMenuToggle=()=>{
        setToggleMenu(!toggleMenu)
    }

  return (
  <>
    {
        !toggleMenu&&(
            <div  className='sideMenu'>
             <FaTimes onClick={()=>lightMenuToggle()} className='closeSideMEnu' size={25}/>
             <ul>
            {links.map(({id,link})=>(
              <li key={id}><a href='/'>{link}</a></li>
            ))}
           </ul>

        </div>
        )
    }
    
    <div className='container'>
        <nav>
           <div className='left-nav'>
            <span>
                {toggleMenu && (<HiMenu onClick={()=>lightMenuToggle()} className='hiMenu' size={30}/>)}           
            </span>
    
            <img src={logo} alt="logo"/>
           <ul>
            {links.map(({id,link})=>(
              <li key={id}><a href='/'>{link}</a></li>
            ))}
           </ul>
           </div>

           <div className='right-nav'>
                <div style={{position:"relative",top:"-5px"}}>
                <AiOutlineShoppingCart onClick={()=>handlePopUp()} className='cart' size={20} />
                {navCart>0 && <div className='notify'>{navCart}</div>}
                </div>
                <div className='avatar'>
                <img src={avatar} alt="avatar"/>
                </div>

           </div>

        </nav>

         {popUp && 
         (
            <div className='pop-up'>
                <h5>Cart</h5>
                <div className='hr'></div>
                {navCart===0 ? (
                    <>
                    <p className='empty'>Your cart is empty.</p>
                    </>
                ) : (
                    <>
                    <div className='details'>
                    {ImgArr[0].imgTh}
                    <p>Fall Limited Edition Sneakers <br/>
                    <span>$125.00 x  {navCart}  {navCart*125.00} $</span> </p>

                    <RiDeleteBin5Line style={{cursor:"pointer"}} onClick={()=>removeIcon()}  size={17}/>
                    </div>
                    <button>Cheakout</button>
                    </>
                ) }
                
                

            </div>
            
         )
         }       
       
    </div>
    </>
  )
}

export default NavBar