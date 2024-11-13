import acercadeslide from "../../../assets/img/slidefaq.jpg"

export const AcercaDe = () => {
    return (
      <>
        <div className="pt-4 d-flex justify-content-center">
          <div className="col-md-10">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={acercadeslide}
                    className="d-block w-100"
                    alt="Esta es la Slide 1"
                  />
                </div>
              </div>
            </div>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      ¿Cuánto tiempo tarda en llegar un libro desde el momento de la compra?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      El tiempo de envío depende de tu ubicación y del método de entrega que elijas. En general, los envíos nacionales tardan entre 3 a 5 días hábiles, mientras que los envíos internacionales pueden demorar entre 7 y 14 días. Recibirás un número de rastreo para que puedas seguir tu pedido en todo momento.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      ¿Qué hago si el libro que quiero está agotado?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Si el libro que buscas está agotado, puedes suscribirte a nuestra notificación de disponibilidad en la página del producto. Te avisaremos por correo electrónico en cuanto esté disponible nuevamente. También puedes contactarnos para ver si es posible hacer un pedido especial.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      ¿Puedo devolver un libro si no estoy satisfecho con la compra?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Sí, ofrecemos una política de devoluciones para garantizar tu satisfacción. Si el libro no cumple con tus expectativas o llega en malas condiciones, tienes hasta 30 días para realizar una devolución o solicitar un cambio. Solo necesitas conservar el comprobante de compra y asegurarte de que el libro esté en buen estado.
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </>
    );
  };
  