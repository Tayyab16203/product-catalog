import PRODUCTS from '../../products'
import { shopContext } from '../../context/shop-context'
import { useContext } from 'react'
import CartItems from './cart-item'
import { useNavigate } from 'react-router-dom'

const cart = () => {

  const { cartItems, getTotalCartAmount } = useContext(shopContext);
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate();

  return (
    <>
    <div className="cart bg-slate-100">
      <div>
        <h1 className='text-6xl text-center p-5 font-bold bg-contain'>Your Cart Items</h1>
      </div>
      <div className='grid place-items-center container mx-auto'>
        {PRODUCTS.map((pd) => {
          if(cartItems[pd.id] !== 0){
            return <CartItems data={pd}/>
          }
        })}
      </div>
      
      { totalAmount > 0 ? 
      (<div className='flex flex-col gap-2 items-center justify-center py-10 px-1'>
        <p className='text-xl font-bold'>SubTotal: ${totalAmount}</p>
        <div className='flex gap-4'>
          <button onClick={() => navigate('/')} className='bg-black text-white hover:opacity-60 px-2 py-1 rounded-md font-medium '> Continue Shopping </button>
          <button className='bg-black text-white hover:opacity-60 px-2 py-1 rounded-md font-medium '> checkout </button>
        </div>
      </div>
      ) : (
        <h1 className='w-2/5 mx-auto rounded-full text-center text-5xl font-bold bg-black text-white p-5 '>Your Cart is Empty</h1>
      )}
    </div>
    </>
  )
}

export default cart
