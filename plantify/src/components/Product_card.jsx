import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductCard({ image, name, price, product_display }) {
    return (
        <Link to={`/shop/${product_display}/${name}`}>
            <div className="flex flex-col grow text-lg font-medium max-md:mt-9">
            <img src={image} alt={name} className="w-full aspect-[0.83]" />
            <div className="mt-8 text-stone-900">{name}</div>
            <div className="mt-2 text-stone-900 text-opacity-50">{price}</div>
            </div>
        </Link>
    );
}

ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default ProductCard;