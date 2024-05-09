import ProductCard from "./Product_card";


function Product_Grid({ products }) {
  return (
    <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-32 mt-12 mb-8">
        {products.map((product, index) => (
                <div key={index} className="flex-col ml-5 w-[280px]">
                    <ProductCard {...product} />
                </div>
            ))}
        </div>
    </div>
    );
}

export default Product_Grid;