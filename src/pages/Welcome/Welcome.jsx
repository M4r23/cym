import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";

function Welcome() {
  return (
    <main
      className="relative p-4 mx-auto w-full  max-w-[412px] bg-fixed bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/images/home-img.png')" }}
    >
      <section className="min-h-screen flex flex-col items-center px-4 rounded-3xl">
        <Logo />
        <section className="bg-white/0 p-4 shadow rounded-2xl backdrop-blur-xs" >
          <h2 className="text-3xl font-bold  text-gray-900 mb-4">
            !Bienvenido a Rutas Orizaba¡
          </h2>
          {/* <p className="text-3xl font-bold text-gray-800 mb-4">Explira fácilmente las rutas de camiones de la ciudad</p> */}
          <p className="text-gray-800 text-lg font-medium ">
            Consulta rutas, paradas y horarios desde tu celular.
            <span className="font-bold"> ¡Viajar nunca fue tan fácil!</span>
          </p>
        </section>
        <section className="absolute bottom-24 left-0 right-0 flex place-items-center justify-center">
        <Button title="Comenzar" to="/home" />

        </section>
      </section>
    </main>
  );
}

export default Welcome;
