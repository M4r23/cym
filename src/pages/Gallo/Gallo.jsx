"use client";
import * as React from "react";
import { Link } from "react-router-dom";


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
    
    {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.858208327452!2d-97.11260329999999!3d18.848971400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c502b83944bab9%3A0x27ecd6e8377ce8c3!2sPrivada%20de%20Nte.%2013%20337A%2C%20Centro%2C%2094350%20Orizaba%2C%20Ver.!5e0!3m2!1ses!2smx!4v1743892193899!5m2!1ses!2smx" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>*/}

    <TablaHorarios />

    <Link to='/home'>
    <button className="mt-20 text-xl leading-normal text-black bg-zinc-300 h-[53px] w-[206px] flex items-center justify-center">
      home
    </button>
    </Link>
      </section>
    </main>
  );
}

export default Gallo;


const TablaHorarios = () => {
  const paradas = [
  {
    parada: 'Alameda Francisco Gabilondo Soler',
    direccion: 'Oriente 6, Centro, Orizaba, Ver.',
    horario: '11:00 a.m.',
  },
  {
    parada: 'Ecoparque Río (Familia de hipopótamos)',
    direccion: 'Poniente 18, Centro, Orizaba, Ver.',
    horario: '11:15 a.m.',
  },
  {
    parada: 'Mercado Cerritos',
    direccion: 'Norte 8, Cerritos, Orizaba, Ver.',
    horario: '11:30 a.m.',
  },
  {
    parada: 'Aeroparque',
    direccion: '20 de Noviembre, Rincón Grande, Orizaba, Ver.',
    horario: '11:45 a.m.',
  },
  {
    parada: 'Parque U.H. Pluviosilla',
    direccion: 'Calle 12, Pluviosilla, Orizaba, Ver.',
    horario: '12:00 p.m.',
  },
  {
    parada: 'Plaza Valle',
    direccion: 'Oriente 6, Emiliano Zapata Sur, Orizaba, Ver.',
    horario: '12:15 p.m.',
  },
  {
    parada: 'Tobogán de la Montaña',
    direccion: 'Sur 15, Barrio Nuevo, Orizaba, Ver.',
    horario: '12:30 p.m.',
  },
  {
    parada: 'Casavegas',
    direccion: 'Oriente 6, Centro, Orizaba, Ver.',
    horario: '12:45 p.m.',
  },
  {
    parada: 'Poliforum Mier y Pesado',
    direccion: 'Sur 10, Centro, Orizaba, Ver.',
    horario: '1:00 p.m.',
  },
  {
    parada: 'Secundaria Fed. Margarita Maza',
    direccion: 'Norte 5, Centro, Orizaba, Ver.',
    horario: '1:15 p.m.',
  },
  {
    parada: 'Jardín Botánico BIORI',
    direccion: 'Poniente 7, Centro, Orizaba, Ver.',
    horario: '1:30 p.m.',
  },
  {
    parada: 'La Placa',
    direccion: 'Calle Real, Barrio Nuevo, Orizaba, Ver.',
    horario: '1:45 p.m.',
  },
];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Horarios de la Línea Gallo</h1>
        <div className="overflow-x-auto">
          <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Horarios del Autobús "El Gallo" - Orizaba, Veracruz
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
              {paradas.map((p, idx) => (
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
          * El servicio es gratuito y los horarios pueden variar por condiciones de tráfico.
        </p>
      </div>
    </div>
        </div>
        <p className="text-gray-600 mt-4 text-center">* Los horarios son aproximados y están sujetos a cambios.</p>
      </div>
    </div>
  );
};
