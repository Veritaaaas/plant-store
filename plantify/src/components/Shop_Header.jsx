import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Shop_Header() {
  const location = useLocation();

  return (
    <>
      <h1 className="flex justify-center mt-4 text-4xl font-extrabold text-black leading-[64px]">
        Plant Marketplace
      </h1>
      <div className="flex gap-4 justify-center mt-4 text-base font-extrabold leading-6 text-black">
        <Link 
          to="/shop/natural" 
          className={`justify-center px-5 py-2.5 text-sm border-2 border-black border-solid ${location.pathname === '/shop/natural' ? 'active_category' : ''}`}
        >
          Natural
        </Link>
        <Link 
          to="/shop/bonsai" 
          className={`justify-center px-5 py-2.5 text-sm border-2 border-black border-solid ${location.pathname === '/shop/bonsai' ? 'active_category' : ''}`}
        >
          Bonsai
        </Link>
        <Link 
          to="/shop/flower" 
          className={`justify-center px-5 py-2.5 text-sm border-2 border-black border-solid ${location.pathname === '/shop/flower' ? 'active_category' : ''}`}
        >
          Flower
        </Link>
      </div>
    </>
  );
}

export default Shop_Header;