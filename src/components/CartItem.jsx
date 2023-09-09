

import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, postIdex }) => {

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("item removed")
  }

  return (
    <div className="w-full mt-5">

      <div className=" flex flex-row mr-3">

        <div className="w-[280px] px-8 ">
          <img  src={item.image} className=" w-full h-full"/>
        </div>

        <div className="flex flex-col gap-x-[10px] text-left">
          <h1 className="font-bold mb-4">{item.title}</h1>
          <h1 className="mb-4">{item.description .split(" ").slice(0,14).join(" ")+ "..."}</h1>
          <div className="flex justify-between mb-4">
            <p className="text-green-500 font-bold"> ${item.price}</p>

            <div className="rounded-full bg-red-300  py-2 px-2" onClick={removeFromCart}>
              <FcDeleteDatabase className="bg-red-500 rounded-md  py-1 px-1" />
            </div> 
          </div>

        </div>


      </div >
      <div className="bg-black w-full border-solid h-[1px] font-thin mt-4">
      
      </div>

    </div>

  )

};

export default CartItem;


