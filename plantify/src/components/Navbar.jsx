
function Navbar() {
  return (
    <header className="flex gap-5 justify-between items-start px-0.5 w-full pt-4 border-b-2 border-black" data-testid="navbar">
      <div className="flex gap-5 mt-1.5 whitespace-nowrap">
        <h1 className="flex-auto text-2xl text-black">Plantify</h1>
        <nav className="flex flex-auto ml-20 gap-10 justify-between self-start text-lg font-medium text-stone-900 text-opacity-50">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
        </nav>
      </div>
      <div className="flex gap-5 justify-between">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2f479a15be02d05dc0b55f501a147fb34b583f9ff035e94ef773eb2922f563?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="shrink-0 w-6 aspect-square" data-testid="shopping-cart-icon"/>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f69d4ffe1982e44a988d673c998cb49f8a46ea6c9d9bd2f57d76ff719699a08c?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="shrink-0 w-5 aspect-square" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/97e04eece18ef753b843c79800bfca7ebd4a798b8b9c4f596fe361bf1a14ff56?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="shrink-0 w-6 aspect-square" />
      </div>
    </header>
  )
}

export default Navbar;