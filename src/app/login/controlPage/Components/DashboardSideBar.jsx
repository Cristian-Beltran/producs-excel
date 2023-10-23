"use client"
import CreateElement from "./ComponentCreateElement";
import { LuSettings } from "react-icons/lu";
import { BiExit } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { useEffect, useState } from "react";

function SideBar() {
// NOTA .- existe un sobre renderizado con este componente, la investigacion parece indicar que el es react.strict.mode que hace que se renderice dos veces para debuguear y eso descontaria dos veces la renderizacion del elemento junto a del effect, pero sigue existiendo dos renderizadas mas de la funcion 
  const [isSideBar , SetisSideBar] = useState(true);
  const [style , Setstyle] = useState("");
//  console.log("iniciando componente : " + isSideBar);
  useEffect(()=>{
//    console.log("iniciando effect : " + isSideBar);
    if(isSideBar){
      Setstyle("bg-slate-100");
      // Setstyle("w-1/6");

    }else{
      // Setstyle("w-1/12");
      Setstyle("bg_Dashboard");

    }
  },[isSideBar]);

  const handleSideBar=()=>{
    /**aca poner una funcion que al presionar se expanda o se encoja el panel de navegacion **/
    SetisSideBar(!isSideBar);
    console.log("el valor presionando el boton es  : " + isSideBar);
  }
  return (
    <>
      <div className={`h-screen ${style} text-slate-400 flex flex-col relative px-1 text-xl font-semibold shadow-xl`}>
        <div className="px-2 py-3 text-2xl text-green-400 ">
          <span>PSS Evolution</span>
          <span>
            <button onClick={handleSideBar} >Encoger</button>
          </span>
        </div>
        <div className="text-lg">
          <div className="flex items-center gap-1 text-xl border-b border-slate-400 p-2">
            <LuSettings className="pb-1 text-3xl" />
            <span>Opciones</span>
          </div>
          <div className="p-2">
            <div className="flex items-center gap-1">
              {" "}
              <span className="text-2xl">
                <HiPlus />
              </span>
              <CreateElement name="Crear Producto" />{" "}
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <span className="text-2xl">
                <HiPlus />
              </span>
              <CreateElement name="Crear Categoria" />{" "}
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-1 absolute bottom-0 p-2 text-slate-200 ">
          <BiExit className="pb-1 text-3xl" />
          <span className="">Salir</span>
        </div>
      </div>
    </>
  );
}
export default SideBar;
