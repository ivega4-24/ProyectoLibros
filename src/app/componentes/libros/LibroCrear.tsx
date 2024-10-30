export const LibroCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6">
              <label htmlFor="nomb" className="form-label">
                Título del libro
              </label>
              <input
                type="text"
                className="form-control"
                id="nomb"
                name="nomb"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="auto" className="form-label">
                Autor
              </label>
              <input
                type="text"
                className="form-control"
                id="auto"
                name="auto"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="isbn" className="form-label">
                ISBN
              </label>
              <input
                type="text"
                className="form-control"
                id="isbn"
                name="isbn"
                required
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="edit" className="form-label">
                Editorial
              </label>
              <select className="form-select" id="edit" name="edit" required>
                <option selected disabled value="">
                  Seleccione la editorial
                </option>
                <option>Grupo planeta</option>
                <option>Santillana</option>
                <option>Rama</option>
                <option>Sudamericana</option>
              </select>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Registrar libro
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
