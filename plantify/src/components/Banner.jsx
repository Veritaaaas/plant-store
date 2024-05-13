

function Banner() {
    return (
    <section className="pt-3 pr-6 pl-12 mt-11 rounded-3xl bg-slate-300" data-testid="banner">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[44%] max-md:w-full max-md:pb-8">
          <div className="flex flex-col mt-9 font-medium">
            <h2 className="text-6xl font-extrabold text-black leading-[64px]">
              Buy your dream plants
            </h2>
            <div className="flex gap-5 pr-20 mt-6 text-stone-900 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
              <div className="flex flex-col">
                <div className="text-3xl">50+</div>
                <div className="text-lg">Plant Species</div>
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <div className="text-3xl">100+</div>
                <div className="text-lg">Customers</div>
              </div>
            </div>
            <form className="flex gap-5 py-2 pr-5 pl-5 mt-12 text-lg bg-white rounded-xl text-stone-900 text-opacity-50">
              <label htmlFor="search" className="sr-only">What are you looking for?</label>
              <input type="text" id="search" placeholder="What are you looking for?" aria-label="Search" className="flex-auto my-auto bg-transparent focus:outline-none" />
              <button type="submit" aria-label="Search-Button">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c39bbe-38d8-4789-84fd-a1025231ed74?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="shrink-0 w-12 aspect-square" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[56%] max-md:hidden">
          <div className="grow px-px max-md:mt-10">
            <div className="flex gap-5">
              <div className="flex flex-col w-[28%]l">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8114dbab97b7d10792daa31e77f9588d32c136afb57170bfb8feab008c5d7550?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="shrink-0 mt-96 max-w-full max-md:mt-10" />
              </div>
              <div className="flex flex-col ml-5 w-[72%]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa814d79-271f-46a5-9df1-cdba877e3301?apiKey=8b5c844c9e604efba227618c0cf9b444&" alt="" className="grow w-full aspect-[0.93] max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Banner;