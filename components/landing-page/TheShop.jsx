const TheShop = () => {
  return (
    <div className="pt-28 px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 items-center">
        <div className="text-center">
          <h2 className="text-2xl text-zinc-800 font-bold">Want to see what goes on behind the scenes?</h2>
          <p className="text-xl">See the shop setup, what tools I use, and what I recommend to get started!</p>
        </div>
        <div className="justify-self-center">
          <a className="text-xl font-semibold px-20 py-5 bg-[#c6ac8f] hover:bg-[#d1bda5] transition-all duration-200" href="the-shop.html">Check out The Shop!</a>
        </div>
      </div>
    </div>
  )
};

export default TheShop;