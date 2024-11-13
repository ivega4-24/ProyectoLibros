import { useState } from "react";
import { Libro } from "../../modelos/Libro";
import { ARREGLO_LIBROS } from "../../mocks/Libro-mocks";
import { ARREGLO_LIBRO_GENEROS } from "../../utilidades/dominios/DomGenero";

export const LibroListar = () => {
const [arrLibros] = useState<Libro[]>(ARREGLO_LIBROS);

const obtenerNombre = (valor: string)=>{
  for(const objGen of ARREGLO_LIBRO_GENEROS)
    if (objGen.codGenero == valor){
      return objGen.nombreGenero;
    }
}


  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-light table-bordered">
            <thead>
              <tr>
                <th style={{ width: "5%" }} className="text-center">
                  Código
                </th>
                <th style={{ width: "35%" }} className="text-center">
                  Título libro
                </th>
                <th style={{ width: "30%" }} className="text-center">
                  Autor
                </th>
                <th style={{ width: "15%" }} className="text-center">
                  Género
                </th>
                <th style={{ width: "15%" }} className="text-center">
                  Imagen
                </th>
              </tr>
            </thead>
            <tbody>

              {arrLibros.map((miLib: Libro)=>(
                
              <tr key={miLib.codLibro} className="align-middle">

                <th scope="row" className="text-center">
                  {miLib.codLibro}
                </th>
                <td className="text-center">{miLib.tituloLibro}</td>
                <td className="text-center">{miLib.autorLibro}</td>
                <td className="text-center">{obtenerNombre(miLib.codGeneroLibro)}</td>
                <td>
                  <img src={miLib.imagenLibroBase64} alt="La imagen" className="imagenListado" />
                  <br />
                  {miLib.imagenLibro}
                </td>
              </tr>

              ))}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
