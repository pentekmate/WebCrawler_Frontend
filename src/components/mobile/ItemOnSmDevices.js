import React from 'react';
import { hibaJelzes } from '../App';


export function ItemOnSmDevices({ id, ar, nev, link, ido, kep }) {
  const openLink = () => {
    window.open(link, '_blank');
  };
  return (
    <div id={String(id)} onClick={() => openLink} className="row pb-1 mt-1 results align-items-center">
      <div className="col-sm-12 namebox d-flex justify-content-start">
        <h4 className={hibaJelzes.some(i => nev.includes(i)) ? "hibas" : ""}>
          {nev}
        </h4>
      </div>
      <div className="col-sm-12  picturebox">
        <a target="_blank" rel="search noreferrer" href={link}>
          <img className='imgSm' alt={nev} src={kep}></img>
        </a>
      </div>
      <div className="col-sm-12 row  align-items-center lastbox col-md-12">
        <div className='col-sm-6 col-md-6 col pricebox'>
          <span className='price'>{ar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ft</span>
        </div>
        <div className="col-sm-6  col timebox">
          <span className='time'>{ido !== "none" ? <>{ido.length === 4 ? ido : ido}</> : "nincs adat"}</span>
        </div>
      </div>


    </div>
  );
}
