function ContentBar() {
  return (
    <>
      <div className=" min-h-screen bg-slate-500 relative">
        <div className="h-64 bg-red-700">aca va el dash</div>
        <div>los demas datos</div>

        <div className="absolute top-1/3 w-full">
          <div className="flex justify-center border  border-solid p-4">
            <div className="w-max border  border-solid text-lg ">
              <table >
                <thead>
                  <tr>
                    <th>Encabezado 1</th>
                    <th>Encabezado 2</th>
                    <th>Encabezado 3</th>
                    <th>Encabezado 4</th>
                    <th>Encabezado 5</th>
                    <th>Encabezado 6</th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <td>Fila 1, Celda 1</td>
                    <td>Fila 1, Celda 2</td>
                    <td>Fila 1, Celda 3</td>

                    <td>Fila 1, Celda 1</td>
                    <td>Fila 1, Celda 2</td>
                    <td>Fila 1, Celda 3</td>
                  </tr>
                  <tr>
                    <td>Fila 2, Celda 1</td>
                    <td>Fila 2, Celda 2</td>
                    <td>Fila 2, Celda 3</td>
                  </tr>
                  <tr>
                    <td>Fila 3, Celda 1</td>
                    <td>Fila 3, Celda 2</td>
                    <td>Fila 3, Celda 3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContentBar;
