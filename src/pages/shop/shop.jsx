import PRODUCTS from '../../products'
import Product from './product'

const shop = () => {
  return (
    <>
    <section className='font-sans'>
      <div className=''>
        <h1 className='text-6xl text-center p-5 font-bold bg-contain'>PedroTech Shop</h1>
      </div>
      <div className='grid gap-10 place-items-center lg:grid-cols-3 md:grid-cols-2 container mx-auto'>
        {PRODUCTS.map((pd) => 
        (<Product data={pd}/>)
        )}
      </div>
    </section>
    </>
  )
}

export default shop
