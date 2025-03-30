"use client";
import * as React from "react";

// Logo component for the top section
const Logo = () => {
  return (
    <header className="flex justify-center px-0 py-7">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b66bd7c9e7fb2c767717fdfaaa654d7ad7369214"
        className="shrink-0 h-[188px] w-[188px] max-sm:h-[150px] max-sm:w-[150px]"
        alt="MBJLS-PS Logo"
      />
    </header>
  );
};

// Simple divider component
const Divider = () => {
  return <hr className="w-full h-px bg-black border-0" />;
};

// Buho button component
const BuhoButton = () => {
  return (
    <section className="flex justify-center mt-5">
      <button aria-label="Buho Button">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b943a5aaedcfe1750cc68d9e6b559b7e5659033a"
          className="h-[51px] w-[143px]"
          alt="Buho Button"
        />
      </button>
    </section>
  );
};

// Map display component
const MapDisplay = () => {
  return (
    <section className="flex justify-center mt-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a2ffc7dca5bb1b4fd8ea5089e1e4120bb518fef"
        className="object-contain w-full h-[238px] max-w-[420px] max-sm:h-[200px]"
        alt="Map"
      />
    </section>
  );
};

// Home indicator component
const HomeIndicator = () => {
  return (
    <div className="absolute left-2/4 text-xl text-center text-black -translate-x-2/4 bg-zinc-300 bottom-[116px] h-[53px] w-[206px] max-sm:text-lg max-sm:h-[45px] max-sm:w-[180px]">
      <p className="flex items-center justify-center h-full">home</p>
    </div>
  );
};

// Main HomeScreen component that combines all the sections
function Buho() {
  return (
    <main className="relative mx-auto my-0 w-full bg-white max-w-[412px] min-h-[917px] max-md:w-full max-sm:w-full">
      <Logo />
      <Divider />
      <BuhoButton />
      <MapDisplay />
      <HomeIndicator />
    </main>
  );
}

export default Buho;
