"use client";
import * as React from "react";


function Gallo() {
  return (
    <main className="flex flex-col items-center w-full bg-white min-h-[screen]">
      <section className="flex flex-col items-center pt-8 w-full max-w-[412px]">
      <figure>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b66bd7c9e7fb2c767717fdfaaa654d7ad7369214"
        alt="MBJLS-PS"
        className="w-[188px] h-[188px] object-contain"
      />
    </figure>
    <section className="flex gap-5 items-center mt-5">
      <figure>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a89974e3983364d468e6a679503d31062be8d21b"
          alt="Gallo logo"
          className="w-[141px] h-[113px] object-contain"
        />
      </figure>
      <h2 className="text-xl leading-normal text-black">GALLO</h2>
    </section>
        <hr className="mt-24 w-full h-px bg-black" />
        <figure className="mt-[116px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a79c9857ea3e084b7843fa76a6669ecea199ccc5"
        alt="Map route"
        className="w-full max-w-[420px] h-[238px] object-contain"
      />
    </figure>
    <button className="mt-20 text-xl leading-normal text-black bg-zinc-300 h-[53px] w-[206px] flex items-center justify-center">
      home
    </button>
      </section>
    </main>
  );
}

export default Gallo;
