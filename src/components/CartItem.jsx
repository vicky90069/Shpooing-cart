import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {remove} from "../redux/Slices/CartSlice"

const CartItem = () => {
  const CartItem =({item,itemIndex})=>{
    const dispatch=useDispatch;


    const removeFromCart=()=>{
      dispatch(remove(item.id));
      toast.sucess("Remove Item");
    }
  return (
    <div>
      <div>
        <div>
          <img src={item.image} />
        </div>
        <div>{item.title}</div>
        <div>{item.description}</div>
        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>

      </div>
    </div>
  );
};
}
export default CartItem;
