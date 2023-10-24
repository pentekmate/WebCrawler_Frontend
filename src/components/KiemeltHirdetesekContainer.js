import React from 'react';
import { KiemeltItemDesktop } from './KiemeltItemDesktop';
import { KiemeltHirdetesekSm } from './KiemeltHirdetesekSm';


export function KiemeltHirdetesekContainer({ screenSize,array }) {
  if(screenSize <= 768)
  {
    return (
      <div className='kiemelt-container'>
        {array.map((item, i) => <KiemeltHirdetesekSm key={i} szarmhely={item.webhely} ar={item.ar} nev={item.megnevezes} link={item.ut} ido={item.ido} kep={item.kep}></KiemeltHirdetesekSm>
      )}
      </div>
    )
  }
  return (
    <div className='kiemelt-containers'>
      <h2 className='kiemelth2 mb-5'>Kiemelet hírdetések</h2>
      {array.map((item, i) => <KiemeltItemDesktop key={i}  szarmhely={item.webhely} ar={item.ar} nev={item.megnevezes} link={item.ut} ido={item.ido} kep={item.kep}></KiemeltItemDesktop>
      )}
    </div>
  );
}


