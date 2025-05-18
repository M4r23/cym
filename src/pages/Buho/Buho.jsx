"use client";
import * as React from "react";
import { Link } from "react-router-dom";

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



const TablaBuho = () => {
  const paradasBuho = [
  {
    parada: 'Poniente 7 (Casa de la Asegurada)',
    direccion: 'Poniente 7 entre Sur 20 y 22, Orizaba, Ver.',
    horario: '11:00 p.m.',
  },
  {
    parada: 'Mercado Cerritos',
    direccion: 'Norte 8, Cerritos, Orizaba, Ver.',
    horario: '11:15 p.m.',
  },
  {
    parada: 'Aeroparque',
    direccion: 'Calle 20 de Noviembre, Rincón Grande, Orizaba, Ver.',
    horario: '11:30 p.m.',
  },
  {
    parada: 'Parque Unidad Habitacional Pluviosilla',
    direccion: 'Calle 12, Pluviosilla, Orizaba, Ver.',
    horario: '11:45 p.m.',
  },
  {
    parada: 'Plaza Valle',
    direccion: 'Oriente 6, Emiliano Zapata Sur, Orizaba, Ver.',
    horario: '12:00 a.m.',
  },
  {
    parada: 'Tobogán de la Montaña',
    direccion: 'Calle Sur 15, Barrio Nuevo, Orizaba, Ver.',
    horario: '12:15 a.m.',
  },
  {
    parada: 'Casavegas',
    direccion: 'Oriente 6, Centro, Orizaba, Ver.',
    horario: '12:30 a.m.',
  },
  {
    parada: 'Poliforum Mier y Pesado',
    direccion: 'Sur 10, Centro, Orizaba, Ver.',
    horario: '12:45 a.m.',
  },
  {
    parada: 'Secundaria Federal Margarita Maza',
    direccion: 'Norte 5, Centro, Orizaba, Ver.',
    horario: '1:00 a.m.',
  },
  {
    parada: 'Jardín Botánico BIORI',
    direccion: 'Poniente 7, Centro, Orizaba, Ver.',
    horario: '1:15 a.m.',
  },
  {
    parada: 'La Placa',
    direccion: 'Calle Real, Barrio Nuevo, Orizaba, Ver.',
    horario: '1:30 a.m.',
  },
];
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Horarios del Autobús "El Búho" - Orizaba, Veracruz
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-3">Parada</th>
                <th className="px-4 py-3">Dirección</th>
                <th className="px-4 py-3">Horario Estimado</th>
              </tr>
            </thead>
            <tbody>
              {paradasBuho.map((p, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{p.parada}</td>
                  <td className="px-4 py-3">{p.direccion}</td>
                  <td className="px-4 py-3">{p.horario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">
          * El servicio es gratuito y los horarios pueden variar según las condiciones del tráfico.
        </p>
      </div>
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
      <Link to='/home'>
        <HomeIndicator />
      </Link>
    <TablaBuho/>
    </main>
  );
}

export default Buho;
