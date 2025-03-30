"use client";
import * as React from "react";

function Home() {
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
        className="object-contain max-w-full aspect-square w-[188px] h-[10px]"
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
        className="object-contain self-stretch w-full aspect-[1.2] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
      />
    </section>
  );
}

function ActionSection() {
  return (
    <section className="mt-24">
      <button className="px-16 py-3 max-w-full text-3xl bg-indigo-200 w-[338px]">
        Let´s go
      </button>
    </section>
  );
}

export default Home;
