import React from 'react';
import { BiFilterAlt } from "react-icons/bi";

function FilterDesktop({ sortBy, setSortBy, marka, setMarka }) {
  return (
    <div className='mt-5 mb-5 pb-5 pb-5 row filters'>
      <h5 className='filtersh1'> <BiFilterAlt size={22}></BiFilterAlt> Szűrők</h5>
      <div className='row m-0 p-0'>
        <div className='col-lg-6 p-0'>
          <select id="filter" defaultValue={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Rendezés</option>
            <option value="1">Árszerint növekvő</option>
            <option value="2">Árszerint csökkenő</option>
            <option value="3">Dátum szerint</option>
          </select>
        </div>
        <div className='col-lg-6 p-0'>
          <select defaultValue={marka} onChange={(e) => setMarka(e.target.value)}>
            <option value="input">Márka kereső</option>
            <option value="HP">HP</option>
            <option value="Dell">Dell</option>
            <option value="LG">LG</option>
            <option value="Sony">Sony</option>
            <option value="Samsung">Samsung</option>
            <option value="MSI">MSI</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export default FilterDesktop