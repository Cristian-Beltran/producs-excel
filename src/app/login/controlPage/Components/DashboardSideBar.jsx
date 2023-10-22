function SideBar() {
  return (
    <>
      <div className="h-screen bg-slate-900 text-slate-300 flex flex-col relative px-1 text-xl font-semibold">
        <div className="py-3 text-2xl text-green-500 ">PSS Evolution</div>
        <div>Productos</div>
        <div>Categorias</div>
        <div className="absolute bottom-2  ">salir</div>
      </div>
    </>
  );
}
export default SideBar;
