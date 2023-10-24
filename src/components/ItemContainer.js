import React,{useEffect, useState} from 'react';
import { ItemDesktop } from './ItemDesktop';
import { ItemOnSmDevices } from './ItemOnSmDevices';
import {LoadingScreen} from './LoadingScreen'
import { Header } from './Header';
import { scroller } from "react-scroll";
import { KiemeltHirdetesekContainer } from './KiemeltHirdetesekContainer';
import { FilterMobile } from './FilterMobile';
import { useMonitors } from '../contexts/MonitorsContext';
import FilterDesktop from './FilterDesktop';


export function ItemContainer() {
  const{array,screenSize,scrolling}=useMonitors()


  const [sortBy, setSortBy] = useState("input");

  const [marka,setMarka] = useState("input")

  function scrollToItem() {
    scroller.scrollTo("0", {
      duration: 200, // Görgetés időtartama
      smooth: "easeInOutQuart", // Sima görgetési stílus
      offset: -50, // A görgetés végénél elhelyezkedő elem pozíciója
    });
  }
  let sorted=[...array]

  const sortingOptions = {
    input: (array) => array,
    '1': (array) => array.slice().sort((a, b) => Number(a.ar) - Number(b.ar)),
    '2': (array) => array.slice().sort((a, b) => Number(b.ar) - Number(a.ar)),
    '3': (array) => array.slice().sort((a, b) => Date.parse(a.ido) - Date.parse(b.ido)),
    marka:(array)=>array,
    "HP":(array)=> array.filter((item)=>item.megnevezes.includes("HP")),
    "Dell":(array)=> array.filter((item)=>item.megnevezes.includes("Dell")),
    "LG":(array)=> array.filter((item)=>item.megnevezes.includes("LG")),
    "Sony":(array)=> array.filter((item)=>item.megnevezes.includes("Sony")),
    "Samsung":(array)=> array.filter((item)=>item.megnevezes.includes("Samsung")),
    "MSI":(array)=> array.filter((item)=>item.megnevezes.includes("MSI")),
  };

  if (sortBy in sortingOptions) {
    sorted = sortingOptions[sortBy](sorted);
   
  }
  if (marka in sortingOptions) {
    sorted = sortingOptions[marka](sorted);
  
  }
 
  if(array.length===0)
  {
    return <LoadingScreen></LoadingScreen>
  }
  

  if (screenSize <= 768) {
    return (
      <div className="container">
        <h2 className='kiemelth2 mb-5 mt-5'>Kiemelet hírdetések</h2>
        <FilterMobile scroll={scrolling} scrollTo={scrollToItem} marka={marka} setMarka={setMarka} sortBy={sortBy} setSortBy={setSortBy}></FilterMobile>
        <KiemeltHirdetesekContainer screenSize={screenSize} array={array}></KiemeltHirdetesekContainer>
        <Header></Header>
        {sorted.map((item,i) => <ItemOnSmDevices id={i} key={i} szarmhely={item.webhely} ar={item.ar} nev={item.megnevezes} link={item.link} ido={item.ido} kep={item.kep}>
        </ItemOnSmDevices>
        )}
      </div>
    );

  }
  return (
    <div className="container">
      <FilterDesktop sortBy={sortBy} setSortBy={setSortBy} setMarka={setMarka} marka={marka}></FilterDesktop>
      <KiemeltHirdetesekContainer screenSize={screenSize} array={array}></KiemeltHirdetesekContainer>
      <Header></Header>
      {sorted.map((item,i) => <ItemDesktop key={i} id={i} szarmhely={item.webhely} ar={item.ar} nev={item.megnevezes} link={item.link} ido={item.ido} kep={item.kep}>
      </ItemDesktop>
      )}
    </div>
  );

}


