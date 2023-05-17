import React, { useEffect } from 'react';

const ContactForm = () => {


  useEffect(() => {
    const $ = window.$;

    $('.footer-area.style-two').removeClass('mg-top-100');
  }, []);

  let publicUrl = process.env.PUBLIC_URL + '/'
  return (
    <div className="contact-page-area pd-top-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 mb-5 mb-lg-0">
            <div className="contact-details-inner mng-box-shadow">
              <h4>Ponerse en contacto.</h4>
              <p>Envia un mensaje completando el formulario con tus datos y nos pondremos en contacto contigo lo antes posible o llamanos en los siguientes números.</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-single-list">
                    <h5>Teléfonos</h5>
                    <ul>
                      <li><img src={publicUrl + "assets/img/icon/phone2.png"} alt="img" /> <a href="tel:+595 983 263 018">+(595) 983 263 018</a></li>                      
                      <li><i className="fab fa-whatsapp"></i> <a href='https://wa.link/qktc51' target='_blank'>+(595) 983 263 018</a></li>                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                {/* <div className="col-md-6">
                  <div className="contact-single-date">
                    <p><strong>Monday-Friday:</strong> 9am - 8pm</p>
                    <p><strong>Saturday:</strong> 10 am to 3 pm</p>
                    <p><strong>Sunday: </strong> Clossed</p>
                  </div>
                </div> */}
                <div className="col-md-6 align-self-start text-md-left">
                  <ul className="social-area style-3">
                    <li><a href="https://www.facebook.com/Sunsetrealtypy"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                    {/* <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li> */}
                    {/* <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <form>
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="single-select-inner style-bg-border">
                    <select>
                      <option value={1}>Informacion general</option>
                      <option value={2}>Compra de casas</option>
                      <option value={3}>Alquiler de casas</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <label className="single-input-inner style-bg-border">
                    <input type="text" placeholder="Asunto" />
                  </label>
                </div>
                <div className="col-xl-12 col-lg-6">
                  <label className="single-input-inner style-bg-border">
                    <input type="text" placeholder="Nombre" />
                  </label>
                </div>
                <div className="col-md-6">
                  <label className="single-input-inner style-bg-border">
                    <input type="text" placeholder="Correo electrónico" />
                  </label>
                </div>
                <div className="col-md-6">
                  <label className="single-input-inner style-bg-border">
                    <input type="text" placeholder="Teléfono" />
                  </label>
                </div>
                <div className="col-12">
                  <label className="single-input-inner style-bg-border">
                    <textarea placeholder="Mensaje" defaultValue={""} />
                  </label>
                </div>
                <div className="col-12 mb-4">
                  <button className="btn btn-base">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="contact-page-map mg-top-100">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-84.68048827338674!3d39.13652252762691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" />
      </div> */}
    </div>
  )
}

export default ContactForm

