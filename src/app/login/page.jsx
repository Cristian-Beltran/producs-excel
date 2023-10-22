'use client';
import {  useState } from "react";
function PageLogin() {
    const [data, setData] = useState({
      name: "",
      pass: "",
    });
    const handleSubmitForm = async(event) => {
      event.preventDefault();
      await fetch("http://localhost:3000/userData", {
        method: "POST",
        headers: { 
        //---------------------------------------------------
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
  return (
    <>
      <div className="h-screen w-full bg-gradient-to-r from-sky-500 to-green-400 p-4 flex justify-center items-center ">
        <div className="w-2/6 max-sm:w-3/5 max-md:w-2/4 h-auto bg-slate-200/30 p-8 rounded-2xl shadow-md shadow-slate-300 ">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold py-6 ">Ingresa a tu cuenta</h1>
          </div>
          <div className="flex flex-col">
            <form  >
              <p className="text-xl py-3 ">Usuario</p>
              <input
                className="p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-cyan-600 "
                type="text"
                placeholder="Escribe tu usuario"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              
              />
              <p className="text-xl py-3 ">Contraseña</p>
              <input
                className="p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-cyan-600 "
                type="password"
                placeholder="Escribe tu contraseña"
                value={data.pass}
                onChange={(e) => setData({ ...data, pass: e.target.value })}
              
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
