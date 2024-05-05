import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (

    <nav data-testid="navbar" className="flex pl-20 pr-20 pt-8">
        <div>
            <h2>Plantify</h2>
        </div>
        <div>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">About</a>
        </div>
        <div>
            <FontAwesomeIcon icon={faShoppingCart} data-testid="shopping-cart-icon" />
            <FontAwesomeIcon icon={faUser} data-testid="profile" />
        </div>
    </nav>
  )
}

export default Navbar;