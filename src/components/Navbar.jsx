import { NavLink } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
    <header className="bg-black text-white font-sans">
        <nav className="flex justify-between px-5 py-2">
            <div className="flex items-center text-xl font-bold bg-red-600 rounded-full p-1 my-1">ProCatalog</div>
            <div className="flex gap-3 items-center justify-center p-1 lg:mr-10">
                <NavLink to='/' className='text-2xl font-bold hover:scale-110 transition-all' >Shop</NavLink>
                <NavLink to='/cart'  className='hover:scale-110 transition-all'> <AiOutlineShoppingCart size={32}/> </NavLink>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar
