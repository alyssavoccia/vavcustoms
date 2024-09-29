const Services = () => {
  return (
    <section className="py-28 mt-28 px-10 mx-auto bg-fixed" style={{ backgroundColor: '#f4f4f5', backgroundImage: `url('https://www.transparenttextures.com/patterns/retina-wood.png')` }}>
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-center text-4xl text-zinc-800 font-bold">What We Provide</h2>
        <div className="flex flex-wrap gap-6 justify-around mt-12">
          <div className="flex flex-col text-center w-full md:w-1/2 lg:w-1/4">
            <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto flex items-center justify-center">
              <svg className="size-8 text-[#c6ac8f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-2xl font-bold">One-of-a-Kind</h3>
              <p className="text-xl leading-tight text-stone-700">Custom one-of-a-kind wood pieces. Select from one of our pre-made pieces, or message us to create your dream item.</p>
            </div>
          </div>
          <div className="flex flex-col text-center w-full md:w-1/2 lg:w-1/4">
            <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto flex items-center justify-center">
              <svg className="size-8 text-[#c6ac8f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-2xl font-bold">High Quality</h3>
              <p className="text-xl leading-tight text-stone-700">High quality products require high quality materials. We source only the best raw materials to create our products.</p>
            </div>
          </div>
          <div className="flex flex-col text-center w-full md:w-1/2 lg:w-1/4">
            <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto flex items-center justify-center">
              <svg className="size-8 text-[#c6ac8f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-2xl font-bold">Customer Service</h3>
              <p className="text-xl leading-tight text-stone-700">Customer service you can count on. This is an investment and we want to ensure that you are getting your dream piece.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Services;