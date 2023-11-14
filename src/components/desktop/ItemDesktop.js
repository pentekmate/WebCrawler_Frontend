import React from 'react';
import { hibaJelzes } from '../App';
import hvlogo from '../logo/logo.png'
import vatlogo from '../logo/logovatera.svg'
import { useMonitors } from '../../contexts/MonitorsContext';
import { LoadingScreen } from '../ui/LoadingScreen';


export function ItemDesktop({array}) {
  const {showLoading}=useMonitors()
  
  if(showLoading)
  {
    return <LoadingScreen></LoadingScreen>
  }
  
  return (
    <>
    {array.map((item,i)=>
    <div key={i}>
      <div id={String(i)}  data-aos="fade-right"  data-aos-once="true" className="row p-2 mb-4 results align-items-center">
      <div className="col-lg-4 col-md-12 picturebox">
        <a target="_blank" rel="search noreferrer" href={item.link}>
          <img loading='lazy' className='imgDesk' alt={item.megnevezes} src={item.kep}></img>
        </a>
      </div>
      <div className="col-lg-5 col-md-12 row  d-flex justify-content-start namebox">
        <h4 className={hibaJelzes.some(i => item.megnevezes.includes(i)) ? "hibas" : ""}>
          {item.megnevezes}</h4>
          <div className='logo-container'>{item.szarmhely==="hardverapro"?
           <img loading='lazy' className='hardverapro' alt={item.szarmhely} src={hvlogo}></img>
          :
          <img loading='lazy' className='vatera' alt={item.szarmhely} src={vatlogo}></img>}
          </div>
      </div>
      <div className="col-lg-3 col-md-12  pricebox row">
        <div className='col-lg-6 col-md-6 price d-flex justify-content-center'>
        <span className='mt-1 price'>{item.ar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ft</span>
        </div>
        <div className='col-lg-6 col-md-6 d-flex justify-content-center'>
          <span className='mt-1 time'>{item.ido!=="none"?<>{item.ido.length===4?item.ido:item.ido}</>:"nincs adat"}</span>
        </div>
        <div className='col-lg-12 d-md-none d-lg-block'>  
        <button className='mt-5 ' onClick={()=>window.open(item.link,"blank")} type="button" value="Keresés">
         Keresés
        </button></div>
      </div>
      </div>
    </div>
    )}
    </>
  );
}



