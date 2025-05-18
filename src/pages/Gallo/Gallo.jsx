import Logo from "../../components/Logo/Logo";
import Icon from "../../components/BuhoIcon/BuhoIcon";
import Divider from "../../components/Divider/Divider";
import { paradasGallo } from "../../constants/paradasGallo";
import Button from "../../components/Button/Button";

function Gallo() {
  return (
    <main className="p-4 w-full mx-auto max-w-[412px] min-h-[917px] max-md:w-full max-sm:w-full bg-fixed bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('/src/assets/images/home-img.png')" }}>
      <section className="bg-white/80 min-h-screen flex flex-col justify-center items-center  rounded-3xl">
        <section className="">
          <Logo />
          <section className="flex justify-center items-center gap-4 mb-10">
            <Icon src="src/assets/icons/gallo-icon.png" widht="w-[60px]" />
            <p className="text-4xl font-extrabold">Gallo</p>
          </section>
        </section>
        <figure className="mx-4 rounded-2xl overflow-hidden shadow-lg">
          <img src="src/assets/images/gallo-preview.jpg" alt="gallo-preview" />
        </figure>
        <div className="text-center mt-5">
          <p className="text-2xl font-semibold text-gray-800">
            Precio del pasaje:
          </p>
          <p className="text-3xl font-bold text-green-600">$0.00</p>
        </div>
        <Divider />
        <section>
          <img src="src/assets/maps/route-fallo.png" alt="" />
        </section>
        <TablaHorarios />
        <section className="flex justify-center mt-5 mb-10">
          <Button title='Inicio' to='/home' />
        </section>
      </section>
    </main>
  );
}

export default Gallo;

const TablaHorarios = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-6xl bg-gray-100 shadow-md rounded-2xl p-2">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Paradas y Horarios - Orizaba, Veracruz
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-1 py-3">Parada</th>
                <th className="px-1 py-3">Dirección</th>
                <th className="px-1 py-3">Horario Estimado</th>
              </tr>
            </thead>
            <tbody>
              {paradasGallo.map((p, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-1 py-3">{p.parada}</td>
                  <td className="px-1 py-3">{p.direccion}</td>
                  <td className="px-1 py-3">{p.horario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">
          El servicio es gratuito y los horarios pueden variar según las
          condiciones del tráfico.
        </p>
      </div>
    </div>
  );
};
