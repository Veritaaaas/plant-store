
function Navbar() {
  return (
    <header className="flex gap-5 justify-between items-start px-0.5 w-full max-md:flex-wrap max-md:max-w-full pt-4" data-testid="navbar">
      <div className="flex gap-5 mt-1.5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <h1 className="flex-auto text-3xl text-black">Plantify</h1>
        <nav className="flex flex-auto ml-20 gap-10 justify-between self-start text-lg font-medium text-stone-900 text-opacity-50">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
        </nav>
      </div>
      <div className="flex gap-5 justify-between">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f479a15be02d05dc0b55f501a147fb34b583f9ff035e94ef773eb2922f563?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="shrink-0 self-start aspect-square w-[35px]" data-testid="shopping-cart-icon"/>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/70e88fdb447737848c1163d274879c36c7deb93064ab54c71af5932cfb635418?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="shrink-0 w-9 aspect-square" data-testid="profile"/>
      </div>
    </header>
  )
}

export default Navbar;