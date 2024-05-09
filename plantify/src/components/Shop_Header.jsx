
function Shop_Header( {product_display, setProductDisplay} ) {

  return (
    <>
        <h1 className="flex justify-center mt-4 text-4xl font-extrabold text-black leading-[64px]">
          Plant Marketplace
        </h1>
        <div className="flex gap-4 justify-center mt-4 text-base font-extrabold leading-6 text-black">
          <button className={`justify-center px-5 py-2.5 text-sm border-2 border-black border-solid ${product_display === 'natural' ? 'text-white bg-black' : 'bg-white'}`} onClick={() => setProductDisplay("natural")}>
            Natural
          </button>
          <button className={`justify-center px-5 py-2.5 text-sm border-2 border-black border-solid ${product_display === 'bonsai' ? 'text-white bg-black' : 'bg-white'}`} onClick={() => setProductDisplay("bonsai")}>
            Bonsai
          </button>
          <button className={`justify-center px-5 py-2.5 text-sm border-2 border-black border-solid ${product_display === 'flower' ? 'text-white bg-black' : 'bg-white'}`} onClick={() => setProductDisplay("flower")}>
            Flower
          </button>
        </div>
    </>
  );
}

export default Shop_Header;