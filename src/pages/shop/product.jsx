import { useContext } from "react";
import { shopContext } from "../../context/shop-context";

const product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {cartItems, addToCart} = useContext(shopContext);

  const cartItemsAmount = cartItems[id];
  return (
    <>
      <div className="flex flex-col gap-2">
        <img src={productImage} className="w-[250px] h-[250px]"/>
        <div className="text-center">
          <h2 className="text-xl font-bold p-2">{productName}</h2>
          <p className="text-gray-500">${price}</p>
        </div>
        <button className="border my-2 px-3 whitespace-nowrap mx-auto border-black rounded-full hover:bg-black hover:text-white font-medium" onClick={()=> addToCart(id)}>
          Add To Cart {cartItemsAmount > 0 && <> ({cartItemsAmount}) </>}
        </button>
      </div>
    </>
  )
}

export default product
