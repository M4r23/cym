import Logo from "../../components/Logo/Logo";
import Divider from "../../components/Divider/Divider";
import Button from "../../components/Button/Button";
import buhoIcon from "/icons/buho-icon-home.png";
import galloIcon from "/icons/gallo-icon-home.png";

function Home() {
  return (
    <main className="p-4 mx-auto w-full min-h-screen max-w-[412px] max-md:p-4 max-sm:p-3 bg-fixed bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('/images/home-img.png')" }}>
      <section className="bg-white/75 min-h-screen flex flex-col justify-center items-center px-6 rounded-3xl">
        <header>
          <Logo />
        </header>
        <section className="w-full">
          <h5 className="mb-5 text-3xl font-semibold text-gray-800 max-sm:text-3xl">Zona</h5>
          <p className=" text-xl font-semibold text-gray-700 ">Orizaba Pueblo Magico</p>
          {/* <div className="flex gap-2.5 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0426148a0778426aab7005ca2c824ae704f10f25"
              className="h-[45px] w-[136px] max-sm:h-auto max-sm:w-[100px]"
              alt="GPS Icon"
            />
          </div> */}
        </section>
        <Divider />
        <section>
          <h2 className="max-sm:text-3xl text-3xl font-semibold text-gray-800 mb-6">Autobuses</h2>
          <div className="flex flex-col items-center gap-5 mb-5 max-sm:gap-4">
            <Button icon={galloIcon} title='Gallo' to='/gallo'/>
            <Button icon={buhoIcon} title='Buho' to='/buho'/>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
