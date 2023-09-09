import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {
  // here its returning the state
  const { cart } = useSelector((state) => state)
  // console.log("prining cart length ")
  // console.log(cart.length);
const [totalAmount,setTotalAmount]=useState(0);

// wehenevr their is chnge in cart , total amount will chnage 
useEffect(()=>{
  setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
},[cart]);

  return (
    <div className="flex justify-center items-center max-w-6xl mx-auto" >
         { 
               cart.length > 0 ? 
               //then show the carts item
               (
               <div className=" flex flex-row ">

                <div className=" flex justify-start w-[50%] mr-8 flex-col">
                {
                cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>})
                }
               </div>
            
               <div className=" ml-8 ">     
               <div className=" flex justify-items-start ">
                <div  className=" mt-[70px] fixed " >
                  <div className="uppercase text-sm font-bold  text-green-700">Your Cart</div>
                  <div className="uppercase text-green-700 text-5xl font-bold ">Summary</div>
                  <p className="font-md ">
                    <span>Total Items:{cart.length}</span>
                  </p>
                </div >

                   <div className=" flex flex-col fixed bottom-8 gap-y-4">
                    <p  className="text-black">Total Amount: ${totalAmount}</p>
                    <button className="bg-green-700 px-[100px] flex text-center py-2 rounded-md" >
                      Chekout Now
                    </button>
                   </div>  
               </div>
               </div>


               </div>
               ): 


               // if not , tell empty 
               (<div className=""> 
                <h1>Cart Empty</h1> 
                <Link to={"/" }/>
                 <button>Shop Now</button> 
                 </div>)
         }

    </div >

  )
  

};

export default Cart;
