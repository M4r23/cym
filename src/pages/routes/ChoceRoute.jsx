"use client";
import React from "react";


function ChoceRoute() {
  return (
    <main className="flex flex-col items-center justify-center p-6 w-full bg-red-100 min-h-screen bg-white max-md:p-4">
      <header className="flex justify-center mb-5 w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b66bd7c9e7fb2c767717fdfaaa654d7ad7369214"
        className="h-[188px] w-[188px] max-sm:h-[140px] max-sm:w-[140px]"
        alt="MBJLS-PS Logo"
      />
    </header>
    <section className="flex flex-col items-start px-6 py-0 mb-10 w-full max-md:px-4 max-md:py-0">
      <h1 className="mb-5 text-3xl text-black max-sm:text-3xl">zona</h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0426148a0778426aab7005ca2c824ae704f10f25"
        className="mb-2.5 h-[45px] w-[136px] max-sm:h-[33px] max-sm:w-[100px]"
        alt="GPS Icon"
      />
      <p className="text-2xl text-black">ORIZABA</p>
    </section>
      <hr className="mx-0 my-5 w-full h-px bg-black" />
      <section className="px-6 py-0 w-full max-md:px-4 max-md:py-0">
        <h2 className="mb-8 text-3xl text-black max-sm:text-3xl">autobuses</h2>
        <div className="flex flex-col gap-5 mb-10">
      <figure className="flex justify-center">
        <button>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ba43c0adf8a75a727d72a3e4b9ce5f8ec1a6f0"
          className="h-[113px] w-[273px] max-sm:w-full max-sm:h-auto"
          alt="Gallo"
        />

        </button>
      </figure>
      <figure className="flex justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/957a0bd572995b7eee5540a15c2da10bd687b1f1"
          className="h-[60px] w-[273px] max-sm:w-full max-sm:h-auto"
          alt="Búho"
        />
      </figure>
    </div>
    <figure>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5d2ff576b5a5686630c70fe6b7ca0b287129890"
        className="w-72 h-72 max-sm:w-full max-sm:h-auto"
        alt="Route Map"
      />
    </figure>
      </section>
    </main>
  );
}

export default ChoceRoute;

