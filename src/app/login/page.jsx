function PageLogin() {
  const handleSubmitForm = async(event) => {
  };
  return (
    <>
      <div className="h-screen w-full bg-gradient-to-r from-sky-500 to-green-400 p-4 flex justify-center items-center fondo">
        <div className="w-2/6 max-sm:w-3/5 max-md:w-2/4 h-auto bg-slate-200/30 p-8 rounded-2xl shadow-md shadow-slate-300 ">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold py-6 ">Ingresa a tu cuenta</h1>
          </div>
          <div className="flex flex-col">
            <form >
              <p className="text-xl py-3 ">Usuario</p>
              <input
                className="p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-cyan-600 "
                type="text"
                placeholder="Escribe tu usuario"
              />
              <p className="text-xl py-3 ">Contraseña</p>
              <input
                className="p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-cyan-600 "
                type="password"
                placeholder="Escribe tu contraseña"
              />
              <button
                type="submit"
                className="bg-cyan-600 rounded w-full my-7 py-2 hover:bg-cyan-400  font-semibold text-slate-100 "
              >
                ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default PageLogin;
