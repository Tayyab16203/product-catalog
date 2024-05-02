import PRODUCTS from '../../products' 
import { useContext } from 'react';
import { shopContext } from '../../context/shop-context';

const CartItems = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemsCount } = useContext(shopContext);

  return (
    <>
    <div className="flex flex-row gap-3 w-full lg:w-2/5 mt-5 bg-white rounded-xl shadow-xl justify-start py-3">
        <img src={productImage} className="w-[150px] h-[150px]"/>
        <div className='flex flex-col gap-2 justify-center'>
          <h2 className="text-xl font-bold">{productName}</h2>
          <p className="text-gray-500">${price}</p>
          <div className='flex items-center'>
            <button onClick={()=> removeFromCart(id)} className='bg-slate-900 text-center rounded-sms h-7 w-4 text-white'> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemsCount(Number(e.target.value), id)} className='outline-none text-center rounded border border-gray-600 w-10 p-[1px]'/>
            <button onClick={() => addToCart(id)} className='bg-slate-900 text-center rounded-sm h-7 w-4 text-white'> + </button>
          </div> 
        </div>
    </div>
    </>
  )
}

export default CartItems
