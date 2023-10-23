import CreateElement from "./ComponentCreateElement";
import { AiOutlineDownload, AiOutlineUpload } from "react-icons/ai";

function ContentBar() {
  console.log("se renderiza con componente dashboard content")
  return (
    <>
      <div className=" min-h-screen bg-slate-50 ">
        <section className="p-4 flex font-semibold justify-between items-center border-b-stone-300 border  ">
          <h3 className="text-2xl font-bold">Catalogo</h3>
          <div className=" flex items-center gap-4">
            <div className="flex items-center gap-1 bg-slate-200 shadow-md text-slate-500 p-2 rounded-xl hover:text-slate-900  ">
              <span className="text-2xl">
                <AiOutlineDownload />
              </span>
              <CreateElement name="Descargar Excel" />
            </div>
            <div className="bg-green-500 flex items-center gap-1 shadow-md text-slate-50 p-2 rounded-xl hover:bg-green-600 ">
              <span className="text-2xl">
                <AiOutlineUpload />
              </span>
              <CreateElement name="Subir Excel" />
            </div>
          </div>
        </section>
        <section className=" ">
          <div className="text-base text-slate-500">
            <table className="min-w-full text-center  border  border-solid">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Codigo</th>
                  <th>Producto</th>
                  <th>Precio Unitario</th>
                  <th>Precio Docena</th>
                  <th>Precio Caja</th>
                  <th>Categoria</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fila 1, Celda 1</td>
                  <td>Fila 1, Celda 2</td>
                  <td>Fila 1, Celda 3</td>
                  <td>Fila 1, Celda 4</td>
                  <td>Fila 1, Celda 5</td>
                  <td>Fila 1, Celda 6</td>
                  <td>Fila 1, Celda 7</td>
                  <td>Fila 1, Celda 8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
export default ContentBar;
