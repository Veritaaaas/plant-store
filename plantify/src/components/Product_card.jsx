import PropTypes from 'prop-types';

function ProductCard({ image, name, price }) {
    return (
        <div className="flex flex-col grow text-lg font-medium max-md:mt-9">
        <img loading="lazy" src={image} alt={name} className="w-full aspect-[0.83]" />
        <div className="mt-8 text-stone-900">{name}</div>
        <div className="mt-2 text-stone-900 text-opacity-50">{price}</div>
        </div>
    );
}

ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default ProductCard;