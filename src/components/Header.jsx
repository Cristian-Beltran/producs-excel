import ButLogin from "./ButtonLogin";
import SearchProd from "./Search";

function Nav() {
  return (
    <>
      <section className="h-64 w-full relative bg-slate-600 text-slate-50 font-semibold ">
        <nav className="flex items-center justify-between px-5 py-4 border-b border-slate-50  max-sm:flex-col max-sm:gap-2 ">
          <div>Titulo empresa</div>
          <div className="max-sm:order-last" >
            <SearchProd/>
          </div>
          <div>
            <ButLogin/>
          </div>
        </nav>
        <h1 className="absolute bottom-4 left-4 text-3xl font-semibold">Coleccion Electronicos</h1>
      </section>
    </>
  );
}
export default Nav;
