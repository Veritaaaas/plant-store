import { NavLink } from 'react-router-dom';

function Shop_Header() {
  return (
    <>
      <h1 className="flex justify-center mt-4 text-4xl font-extrabold text-black leading-[64px]">
        Plant Marketplace
      </h1>
      <div className="flex gap-4 justify-center mt-4 text-base font-extrabold leading-6 text-black">
        <NavLink to="/shop/natural" activeClassName="active" className='justify-center px-5 py-2.5 text-sm border-2 border-black border-solid'>
          Natural
        </NavLink>
        <NavLink to="/shop/bonsai" activeClassName="active" className='justify-center px-5 py-2.5 text-sm border-2 border-black border-solid'>
          Bonsai
        </NavLink>
        <NavLink to="/shop/flower" activeClassName="active" className='justify-center px-5 py-2.5 text-sm border-2 border-black border-solid'>
          Flower
        </NavLink>
      </div>
    </>
  );
}

export default Shop_Header;