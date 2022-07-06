import React from 'react';
import { Link } from 'react-router-dom';



const Client = () => {
  let publicUrl = process.env.PUBLIC_URL + '/'
  return <div>
    <div className="client-area client-area-pd bg-overlay pd-top-118" style={{ background: 'url(' + publicUrl + 'assets/img/other/1.png)' }}>
      <div className="container">
        <div className="row justify-content-center text-lg-left text-center">
          <div className="col-lg-9">
            <div className="section-title style-white mb-0">
              <h6>Confianza</h6>
              <h2>Nuestros clientes</h2>
              <p>Trabajamos con clientes de Banco Atlas, Itaú,  BASA, Bancoop , GNB, Familiar, Visión, también con socios de las cooperativas Universitaria, Lambaré, Nazareth, Coomecipar, Medalla  Milagrosa, Coop. 8 de Marzo .
                Y las financieras  Solar S.A, Paraguayo Japonesa</p>
            </div>
          </div>
          <div className="col-lg-3 align-self-end text-lg-right mt-4 mt-lg-0 go-top">

          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="client-slider style-two owl-carousel">
        <div className="item">
          <div className="thumb">
            <img src={publicUrl + "assets/img/client/BASA.jpg"} alt="img" />
          </div>
        </div>

        <div className="item">
          <div className="thumb">
            <img src={publicUrl + "assets/img/client/gnb.jpg"} alt="img" />
          </div>
        </div>
        <div className="item">
          <div className="thumb">
            <img src={publicUrl + "assets/img/client/visionbanco.png"} alt="img" />
          </div>
        </div>
        <div className="item">
          <div className="thumb">
            <img src={publicUrl + "assets/img/client/atlas.jpg"} alt="img" />
          </div>
        </div>
        <div className="item">
          <div className="thumb">
            <img src={publicUrl + "assets/img/client/bancofamiliar.jpg"} alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
}


export default Client;
