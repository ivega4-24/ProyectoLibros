import fotoUno from "../../../../src/assets/img/slide1.jpg";
import fotoDos from "../../../../src/assets/img/slide2.jpg";
import fotoTres from "../../../../src/assets/img/slide3.jpg";
import cardUno from "../../../../src/assets/img/lini1.jpg";
import cardDos from "../../../../src/assets/img/lini2.jpg";
import cardTres from "../../../../src/assets/img/lini3.jpg";

export const Inicio = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={fotoUno}
                  className="d-block w-100"
                  alt="Esta es la Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={fotoDos}
                  className="d-block w-100"
                  alt="Esta es la Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={fotoTres}
                  className="d-block w-100"
                  alt="Esta es la Slide 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>

        <h1 className="pt-4 d-flex justify-content-center">Best Sellers</h1>


        <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-8">
            <div className="card-group">
  <div className="card ">
    <img src={cardUno} className="card-img-top" alt="Bestseller1" />
    <div className="card-body">
      <h5 className="card-title">Bestseller Uno</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src={cardDos} className="card-img-top" alt="Bestseller2" />
    <div className="card-body">
      <h5 className="card-title">Bestseller Dos</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src={cardTres} className="card-img-top" alt="Bestseller3" />
    <div className="card-body">
      <h5 className="card-title">Bestseller Tres</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
     </div>
     </div>
          </div>
        </div>
      </div>
    </>
  );
};
