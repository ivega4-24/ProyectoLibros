export const LibroAdmin = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-light table-bordered">
            <thead>
              <tr>
                <th style={{ width: "5%" }} className="text-center">
                  No.
                </th>
                <th style={{ width: "25%" }} className="text-center">
                  Título libro
                </th>
                <th style={{ width: "20%" }} className="text-center">
                  Autor
                </th>
                <th style={{ width: "15%" }} className="text-center">
                  ISBN
                </th>
                <th style={{ width: "15%" }} className="text-center">
                  Editorial
                </th>
                <th style={{ width: "10%" }} className="text-center">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-center">
                  1
                </th>
                <td className="text-center">100 Años de soledad</td>
                <td className="text-center">Gabriel Garcia Marquez</td>
                <td className="text-center">5485483</td>
                <td className="text-center">Sudamericana</td>
                <td className="text-center">
                    <a href="/libact/3">
                <i className="fa-solid fa-pen-to-square"
                style={{color: "#ff3cde" }}
                ></i>
                    </a>
                &nbsp;
                <i className="fa-solid fa-trash"></i>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-center">
                  2
                </th>
                <td className="text-center">La casa de los espíritus</td>
                <td className="text-center">Isabel Allende</td>
                <td className="text-center">4138543</td>
                <td className="text-center">Rama</td>
                <td className="text-center">Iconos</td>
              </tr>
              <tr>
                <th scope="row" className="text-center">
                  3
                </th>
                <td className="text-center">LEl tunel</td>
                <td className="text-center">Ernesto Sabato</td>
                <td className="text-center">3438545</td>
                <td className="text-center">Grupo planeta</td>
                <td className="text-center">Iconos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
