import ButLogin from "./ButtonLogin";
import SearchProd from "./Search";

function Nav() {
  return (
    <>
      <section className="h-64 w-full relative text-slate-50 font-semibold  fondo">
        <nav className="bg-slate-400 bg-transparent/25 flex items-center justify-between px-5 py-4 border-b border-slate-50  max-sm:flex-col max-sm:gap-2 ">
          <div className="text-xl" >PSS Evolution Forever</div>
          <div className="max-sm:order-last" >
            <SearchProd/>
          </div>
          <div>
            <ButLogin/>
          </div>
        </nav>
        <h1 className="absolute bottom-4 left-4 text-4xl font-semibold">Coleccion Electronicos</h1>
      </section>
    </>
  );
}
export default Nav;
