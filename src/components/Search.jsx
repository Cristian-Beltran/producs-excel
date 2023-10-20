function SearchProd() {
  return (
    <>
      <form action="" method="">
        <div className="flex items-center gap-2  text-slate-800">
          <input
            className="border-2 border-collapse border-slate-800 w-full h-full rounded-lg px-2 py-1"
            type="text"
            placeholder="Busqueda"
          />
          <button className=" bg-slate-900 text-slate-100 px-2 py-1 rounded-lg">
            Buscar
          </button>
        </div>
      </form>
    </>
  );
}
export default SearchProd;
