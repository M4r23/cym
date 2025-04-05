import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="p-6 mx-auto my-0 w-full min-h-screen bg-white max-w-[412px] max-md:p-4 max-sm:p-3">
      <header className="flex justify-center mb-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b66bd7c9e7fb2c767717fdfaaa654d7ad7369214"
        className="h-[188px] w-[188px] max-md:h-[150px] max-md:w-[150px] max-sm:h-[120px] max-sm:w-[120px]"
        alt="MBJLS-PS Logo"
      />
    </header>
    <section className="mb-10">
      <h1 className="mb-5 text-3xl text-black max-sm:text-3xl">Zona</h1>
      <div className="flex gap-2.5 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0426148a0778426aab7005ca2c824ae704f10f25"
          className="h-[45px] w-[136px] max-sm:h-auto max-sm:w-[100px]"
          alt="GPS Icon"
        />
      </div>
      <hr className="mx-0 my-5 h-px bg-black" />
    </section>
    <section>
      <h2 className="max-sm:text-3xl text-3xl">Autobuses</h2>
      <div className="flex flex-col gap-5 mb-5 max-sm:gap-4">
        <Link to="/gallo">
        <button className="cursor-pointer focus:outline-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ba43c0adf8a75a727d72a3e4b9ce5f8ec1a6f0"
            className="h-[113px] w-[273px] max-sm:w-full max-sm:h-auto"
            alt="Gallo"
          />
        </button>
        </Link>
        <Link to="/buho">
        <button className="cursor-pointer focus:outline-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/957a0bd572995b7eee5540a15c2da10bd687b1f1"
            className="h-[60px] w-[273px] max-sm:w-full max-sm:h-auto"
            alt="Búho"
          />
        </button>
        </Link>
      </div>
    </section>
    <figure className="mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5d2ff576b5a5686630c70fe6b7ca0b287129890"
        className="w-72 h-72 max-sm:w-full max-sm:h-auto"
        alt="Route Map"
      />
    </figure>
    </main>
  );
}

export default Home;
