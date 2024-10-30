export const LibroListar = () => {
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
                <th style={{ width: "35%" }} className="text-center">
                  Título libro
                </th>
                <th style={{ width: "30%" }} className="text-center">
                  Autor
                </th>
                <th style={{ width: "15%" }} className="text-center">
                  ISBN
                </th>
                <th style={{ width: "15%" }} className="text-center">
                  Editorial
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
              </tr>
              <tr>
                <th scope="row" className="text-center">
                  2
                </th>
                <td className="text-center">La casa de los espíritus</td>
                <td className="text-center">Isabel Allende</td>
                <td className="text-center">4138543</td>
                <td className="text-center">Rama</td>
              </tr>
              <tr>
                <th scope="row" className="text-center">
                  3
                </th>
                <td className="text-center">LEl tunel</td>
                <td className="text-center">Ernesto Sabato</td>
                <td className="text-center">3438545</td>
                <td className="text-center">Grupo planeta</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
