import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [activeLink, setActiveLink] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="flex flex-col lg:flex-row gap-5 justify-between items-start px-0.5 w-full pt-4 border-b-2 border-black" data-testid="navbar">
      <div className="flex gap-5 mt-1.5 whitespace-nowrap max-md:flex max-md:justify-between max-md:w-full">
        <Link to="/" onClick={() => setActiveLink('/')}>
          <h1 className="flex-auto text-2xl text-black Poetsin">Plantify</h1>
        </Link>
        <nav className="hidden lg:flex flex-auto ml-20 gap-10 justify-between self-start text-lg font-medium text-stone-900 text-opacity-50">
          <NavLink to="/" className={activeLink === '/' ? 'active' : ''} onClick={() => setActiveLink('/')}>Home</NavLink>
          <NavLink to="/shop/natural" className={activeLink === '/shop/natural' ? 'active' : ''} onClick={() => setActiveLink('/shop/natural')}>Products</NavLink>
          <NavLink to="/About" className={activeLink === '/About' ? 'active' : ''} onClick={() => setActiveLink('/About')}>About</NavLink>
        </nav>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </button>
      </div>
      {isMenuOpen && <nav className="lg:hidden w-full">
          <div className='flex flex-col items-end '>
            <NavLink to="/" className={activeLink === '/' ? 'active' : ''} onClick={() => setActiveLink('/')}>Home</NavLink>
            <NavLink to="/shop/natural" className={activeLink === '/shop/natural' ? 'active' : ''} onClick={() => setActiveLink('/shop/natural')}>Products</NavLink>
            <NavLink to="/About" className={activeLink === '/About' ? 'active' : ''} onClick={() => setActiveLink('/About')}>About</NavLink>
            <Link to="/cart" className={activeLink === '/Cart' ? 'active' : ''} onClick={() => setActiveLink('/Cart')}>Cart</Link>
            <span>Profile</span>
          </div>
      </nav>}
      <div className="flex gap-5 justify-between max-md:hidden">
        <form>
        {isSearchOpen && 
          <input type="text" placeholder="Search" className="border-2 border-black rounded-lg p-1" />
        }
        </form>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f69d4ffe1982e44a988d673c998cb49f8a46ea6c9d9bd2f57d76ff719699a08c?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="shrink-0 w-5 aspect-square cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)} />
        <Link to="/cart" onClick={() => setActiveLink('/Cart')}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f479a15be02d05dc0b55f501a147fb34b583f9ff035e94ef773eb2922f563?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="shrink-0 w-6 aspect-square" data-testid="shopping-cart-icon"/>
        </Link>
        <Link to="/profile" onClick={() => setActiveLink('/Profile')}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/97e04eece18ef753b843c79800bfca7ebd4a798b8b9c4f596fe361bf1a14ff56?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="shrink-0 w-6 aspect-square" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;