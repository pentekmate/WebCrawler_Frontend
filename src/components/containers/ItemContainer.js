import React, {useEffect, useState } from 'react';
import { ItemDesktop } from '../desktop/ItemDesktop';
import { ItemOnSmDevices } from '../mobile/ItemOnSmDevices';
import { LoadingScreen } from '../ui/LoadingScreen'
import { Header } from '../ui/Header';
import { scroller } from "react-scroll";
import { KiemeltHirdetesekContainer } from './KiemeltHirdetesekContainer';
import { FilterMobile } from '../mobile/FilterMobile';
import { useMonitors } from '../../contexts/MonitorsContext';
import FilterDesktop from '../desktop/FilterDesktop';
import NavigatorButton from '../ui/NavigatorButton';




export function ItemContainer() {
  const { array, screenSize, scrolling,setshowLoading} = useMonitors()
  let sorted = [...array]
  const [sortBy, setSortBy] = useState("");
  const [marka, setMarka] = useState("")
  
  let itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  
  let totalPages = Math.ceil(sorted.length / itemsPerPage);
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex   = startIndex + itemsPerPage;
  let currentItems = sorted.slice(startIndex, endIndex);
  
  
  function scrollToItem() {
    scroller.scrollTo("0", {
      duration: 200,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  }


  const sortingOptions = {
    input: (array) => array,
    '1': (array) => array.slice().sort((a, b) => Number(a.ar) - Number(b.ar)),
    '2': (array) => array.slice().sort((a, b) => Number(b.ar) - Number(a.ar)),
    '3': (array) => array.slice().sort((a, b) => Date.parse(a.ido) - Date.parse(b.ido)),
    marka: (array) => array,
    "HP": (array) => array.filter((item) => item.megnevezes.includes("HP")),
    "Dell": (array) => array.filter((item) => item.megnevezes.includes("Dell")),
    "LG": (array) => array.filter((item) => item.megnevezes.includes("LG")),
    "Sony": (array) => array.filter((item) => item.megnevezes.includes("Sony")),
    "Samsung": (array) => array.filter((item) => item.megnevezes.includes("Samsung")),
    "MSI": (array) => array.filter((item) => item.megnevezes.includes("MSI")),
    
  };
  
  
  if (marka in sortingOptions && marka !== "input") {
    sorted = sortingOptions[marka](sorted);


    totalPages = Math.ceil(sorted.length / itemsPerPage);
    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex   = startIndex + itemsPerPage;
    currentItems = sorted.slice(startIndex, endIndex);
 
   
  }

  if (sortBy in sortingOptions) {
    sorted = sortingOptions[sortBy](sorted);
    totalPages = Math.ceil(sorted.length / itemsPerPage);
    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex   = startIndex + itemsPerPage;
    currentItems = sorted.slice(startIndex, endIndex);    
    console.log(sortBy)
  }
 
  function test(e){
    setSortBy(e.target.value)
    setSortBy((state)=>{
      return state
    })
    
  }
  

  if (array.length === 0) {
    return <LoadingScreen></LoadingScreen>
  }

  if (screenSize <= 768) {
    return (
      <div className="container">
        <h2 className='kiemelth2 mb-5 mt-5'>Kiemelt hírdetések</h2>
        <FilterMobile scroll={scrolling} scrollTo={scrollToItem} marka={marka} setMarka={setMarka} sortBy={sortBy} setSortBy={setSortBy}></FilterMobile>
        <KiemeltHirdetesekContainer screenSize={screenSize} array={array}></KiemeltHirdetesekContainer>
        <Header></Header>
        {sorted.map((item, i) => <ItemOnSmDevices id={i} key={i} szarmhely={item.webhely} ar={item.ar} nev={item.megnevezes} link={item.linkeq} ido={item.ido} kep={item.kep}>
        </ItemOnSmDevices>
        )}
      </div>
    );

  }
  return (
  
    <div className='container'>
      <FilterDesktop sortBy={sortBy} test={test} setSortBy={setSortBy} marka={marka} sorted={sorted} setMarka={setMarka} ></FilterDesktop>
      <KiemeltHirdetesekContainer screenSize={screenSize} array={array}></KiemeltHirdetesekContainer>
      <Header></Header>
      <NavigatorButton totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}></NavigatorButton>
      <ItemDesktop array={currentItems}  ></ItemDesktop>
      <NavigatorButton totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}></NavigatorButton>
    </div>
   


  );

}


