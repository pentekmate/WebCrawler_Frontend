import React from 'react';
import { joAjanlat } from '../App';
import hvlogo from '../logo/logo.png'
import vatlogo from '../logo/logovatera.svg'



export function KiemeltItemDesktop({ szarmhely, ar, nev, link, ido, kep }) {
  if (joAjanlat.some(i => nev.includes(i)))
    return (
      <div data-aos="fade-right" data-aos-once="true" className="row p-2 kiemelt mb-2 results align-items-center">
        <div className="col-lg-4 col-md-12 mt-5 picturebox">
          <a target="_blank" rel="search noreferrer" href={link}>
            <img loading='lazy' className='imgDesk' alt={nev} src={kep}></img>
          </a>
        </div>
        <div className="col-lg-5 col-md-12 row  d-flex justify-content-start namebox">
          <h4>
            {nev}</h4>
          <div className='logo-container'>{szarmhely === "hardverapro" ?
            <img loading='lazy' className='hardverapro' alt={szarmhely} src={hvlogo}></img>
            :
            <img loading='lazy' className='vatera' alt={szarmhely} src={vatlogo}></img>}
          </div>
        </div>
        <div className="col-lg-3 col-md-12  pricebox row">
          <div className='col-lg-6 col-md-6 price d-flex justify-content-center'>
            <span className='mt-1 price'>{ar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ft</span>
          </div>
          <div className='col-lg-6 col-md-6 d-flex justify-content-center'>
            <span className='mt-1'>{ido !== "none" ? <>{ido.length === 4 ? ido : ido}</> : "nincs adat"}</span>
          </div>
          <div className='col-lg-12 d-md-none d-lg-block'>
            <button className='mt-5 ' onClick={() => window.open(link, "blank")} type="button" value="Keresés">
              Keresés
            </button></div>
        </div>
      </div>
    );

}
