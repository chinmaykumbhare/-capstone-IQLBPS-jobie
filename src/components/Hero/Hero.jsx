function Hero() {
  return (
    <div className="bg-dark-gray flex justify-around items-center px-32 small:px-14 small:py-5 medium:py-6 medium:px-16 large:py-8 large:px-18">
      <div className="text-left">
        <h1 className="text-white text-5xl leading-snug font-semibold font-inter small:text-lg medium:text-3xl large:text-4xl">
          10,254 Jobs <br /> Are Listed Here!
        </h1>
        <h3 className="text-xl text-white medium:text-yellow-30 font-inter small:text-xs medium:text-lg large:xl">
          Find your dream job now
        </h3>{' '}
        <div className=" mt-5 w-48 small:w-36 medium:w-56 large:w-72">
          <input
            type="search"
            className="rounded-3xl px-6 py-2 outline-none absolute w-72 small:w-32 small:py-1.5 small:px-3 small:text-xs medium:w-52"
            placeholder="Type to search"
          />
          <button
            type="submit"
            className="py-2 bg-accent px-5 rounded-3xl text-white relative  left-52 hover:bg-red-500 small:py-1.5 small:px-3 small:text-xs small:left-24 medium:left-36 "
          >
            Search
          </button>
        </div>
      </div>

      <div>
        <img
          src="/assets/jobsearch.png"
          alt="a girl searching for job"
          className="w-500 small:w-300 ml-7"
        />
      </div>
    </div>
  );
}

export default Hero;
