"use client";
import * as React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <main className="flex overflow-hidden flex-col items-center pt-4 pb-14 mx-auto w-full text-center text-black bg-white max-w-[480px]">
      <HeaderSection />
      <ContentSection />
      <ActionSection />
    </main>
  );
}

function HeaderSection() {
  return (
    <>
      <img
        src="images/MBJLS-PS.png"
        alt="Logo"
        className="object-contain max-w-full aspect-square w-[188px] "
      />
      <h1 className="ml-6 text-8xl">HELLO</h1>
    </>
  );
}

function ContentSection() {
  return (
    <section className="w-full mt-28">
      <img
        src="images/image1.png"
        alt="Featured content"
        className="object-contain h-[300px] w-full "
      />
    </section>
  );
}

function ActionSection() {
  return (
    <section className="mt-24">
      <Link to='/home'>
        <button className="px-16 py-3 max-w-full text-3xl bg-indigo-200 w-[338px]">
          Let´s go
        </button>
      </Link>
    </section>
  );
}

export default Welcome;
