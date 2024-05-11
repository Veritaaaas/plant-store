
function Product_info( {image, name, price} ) {
    return (
        <div className="mb-4">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad8cd3cff42e8a5eaa4fd56cfb5178615067219510ad1ac5517fe39d0f843b39?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="mt-9 w-6 aspect-square fill-black" />
            <main className="self-center mt-4 w-full max-w-[1213px]">
                <div className="flex gap-5">
                    <div className="flex flex-col w-6/12">
                        <img loading="lazy" src={image} alt="Aloe Vera plant" className="grow mt-4 h-[500px] w-[500px]" />
                    </div>
                    <section className="flex flex-col ml-5 w-6/12">
                        <div className="flex flex-col max-md:mt-10">
                                <h2 className="text-5xl font-extrabold text-black">{name}</h2>
                                <div className="mt-7 text-2xl font-medium text-stone-900 text-opacity-50">{price}</div>
                                <div className="border-b-2 border-solid border-black"></div>
                                <p className="mt-11 text-xl font-light text-stone-900">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                                </p>
                                <div className="mt-12 text-2xl font-medium text-black">Quantity</div>
                                <div className="flex gap-1 items-start self-start mt-5">
                                <input type="number" className="shrink-0 h-9 bg-white border border-black border-solid w-[60px] pb-4 pt-4 pl-1" aria-label="Quantity" />
                                </div>
                                <button className="justify-center items-center px-16 py-2.5 mt-6 text-xl font-medium text-black bg-white rounded-3xl border-4 border-solid border-slate-300">
                                Add to Cart
                                </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Product_info;