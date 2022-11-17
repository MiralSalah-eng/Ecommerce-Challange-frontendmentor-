import React, { useState } from 'react'
import './Product.css'
import './ProductsMobile.css'
import {ImgArr} from './imagesData'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,dispatchtByAmount } from '../CartSlice'

function Product() {
    
    //Using states from slice  
    let cart = useSelector((state) => state.cart.value);
    let navCart = useSelector((state) => state.cart.navCart);
    const dispatch = useDispatch()


    //Set State for sliders 
    const[index,setIndex] = useState(0);
    const[indexSlider,setIndexSlider] = useState(0);
    const [slider,setSlider] = useState(false);

     //Counter of order + and -
    const handleInCount=()=> {dispatch(increment());  }
    const handleDeCount=()=> {cart === 0 ? cart =0 : dispatch(decrement());}

     //Handle UL of Thumbnail Images Under Main Image
    const handleImage=(i)=>{setIndex(i-1)} 
    const handleImageSlider=(i)=>{setIndexSlider(i-1)}
    const handleSlide =()=>{ setSlider(!slider)}
    
    //Overlay  Slider Arrow 
    const leftArrowHandle=()=>{indexSlider===0 ?setIndexSlider(0) :  setIndexSlider(indexSlider-1)} 
    const rightArrowHandle=()=>{indexSlider===ImgArr.length-1 ?setIndexSlider((ImgArr.length)-1) : setIndexSlider(indexSlider+1);} 


    //Mobile Slider Arrow 
    const leftArrowHandleMobile=()=>{index===0 ?setIndex(0) :  setIndex(index-1)} 
    const rightArrowHandleMobile=()=>{index===ImgArr.length-1 ?setIndex((ImgArr.length)-1) : setIndex(index+1);} 

    //Send Count Of Order To Cart
    const addCartFun=()=>
    { navCart=cart;  dispatch(dispatchtByAmount(navCart))}
        
    
  return (

<div className='container'>
    <div className={slider?'overlay':'hidden'}>
        <div className='align'>
            <FaTimes className='close' style={{color:"white"}} size={20} onClick={()=>handleSlide()}/>
        </div>
               
        <div>

            <div className='imageSlider'>
                <BsFillArrowLeftCircleFill 
                style={{cursor:"pointer"}}
                onClick={()=>leftArrowHandle()}
                size={25}/>

                {ImgArr[indexSlider].img}

                <BsFillArrowRightCircleFill 
                style={{cursor:"pointer"}}
                onClick={()=>rightArrowHandle()}
                size={25}/>
            </div>

            <ul>
            {ImgArr.map(image=>(
                <li  onClick={()=>handleImageSlider(image.id)} key={image.id}>{image.imgTh}</li>   
            ))}   
            
            </ul>
        </div>
                  
            
    </div>

        
<div className='full-prod'>
       <div className='mobileSlider'>
            <div className='mainImg'>
            <span onClick={()=>handleSlide()}>
            <BsFillArrowLeftCircleFill onClick={()=>leftArrowHandleMobile()} className='cursor-left' />
            {ImgArr[index].img} 
            <BsFillArrowRightCircleFill onClick={()=>rightArrowHandleMobile()} className='cursor-right' />
            </span>
            <ul className='grid-img'>
                {ImgArr.map(image=>(
                    <li onClick={()=>handleImage(image.id)} key={image.id}>{image.imgTh}</li>   
                ))}   
                
            </ul>
            </div>
       </div>


    <div className='content'>
       <div className='container'>
               <span>Sneaker Company</span>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
             <div className='price'>
             <h2>$125.00 <div className='discount'><span>50%</span></div></h2>
                <p className='oldprice'>$250.00</p>
             </div>

            <div className='cart-process'>
                <div className='counter'>
                <button onClick={handleDeCount}>-</button>
                {cart}
                <button onClick={handleInCount}>+</button>
                </div>
                <div className='addToCart'>
                    <button onClick={()=>{addCartFun()}}> 
                    <AiOutlineShoppingCart className='cart' size={20}/>Add to cart</button>
                    
                </div>


        </div>
                
    </div>
    </div>
        

</div>
</div>
    

  )
}

export default Product