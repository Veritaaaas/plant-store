import ProductCard from "./Product_card";

function BestSellers() {
    const products = [
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/341a7934fe7f05a0e371c9a3cfa6c894d31684bbb7ebbf89ae6a30729ca1dc8e?apiKey=8b5c844c9e604efba227618c0cf9b444&",
            name:   "Aloe Vera",
            price: "₱ 600.00",
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/37bf10571abfcc4a0e130586dae6eba5b150e96026a646113059a8bef96b7e0c?apiKey=8b5c844c9e604efba227618c0cf9b444&",
            name: "Artificial Plants",
            price: "₱ 900.00",
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/842b8cec20e5f04f3856520c20d6647e7e4b24431b54bf67aec2ea78889dd122?apiKey=8b5c844c9e604efba227618c0cf9b444&",
            name: "Artificial Plants",
            price: "₱ 3,500.00",
        },
    ];

    return (
        <section className="mt-28">
            <div className="flex gap-5">
                <div className="flex flex-col w-3/12">
                <div className="flex flex-col mt-1.5 text-lg font-medium text-stone-900">
                    <h2 className="text-3xl font-bold">Best Selling Plants</h2>
                    <p className="mt-3 text-stone-900 text-opacity-50">
                        Easiest way to healthy life by buying your favorite plants{" "}
                    </p>
                    <a href="#" className="flex gap-2.5 px-6 py-3 mt-6 rounded-lg bg-slate-300">
                    <span>See more</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c037047510b6bf2e65eb6bc15b379339490b38340175df263ec593d02633ef31?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="shrink-0 my-auto w-6 aspect-[1.2]" />
                    </a>
                </div>
                </div>
                {products.map((product, index) => (
                <div key={index} className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <ProductCard {...product} />
                </div>
                ))}
            </div>
        </section>
    );
}

export default BestSellers;