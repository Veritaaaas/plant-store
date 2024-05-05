import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  return (

    <nav data-testid="navbar" className="grid custom-grid pl-20 pr-20 pt-8 pb-4
                                        content-center">
        <div className='flex content-center text-4xl custom-font'>
            <h2 className='m-0 p-0'>Plantify</h2>
        </div>
        <div className='flex justify-start gap-20 ml-20 content-center text-m'>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">About</a>
        </div>
        <div className='flex justify-between text-lg'>
            <FontAwesomeIcon icon={faShoppingCart} data-testid="shopping-cart-icon" />
            <FontAwesomeIcon icon={faUser} data-testid="profile" />
        </div>
    </nav>
  )
}

export default Navbar;