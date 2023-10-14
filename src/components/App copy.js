import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './ScrollButtons.css'
import { ItemContainer } from './ItemContainer';
import {LoadingScreen} from './LoadingScreen'
import { ScrollUpandDown } from './ScrollUpandDown';
export const hibaJelzes=["törött","hibás","sérült"];
export const joAjanlat=["helyett,HELYETT","áronalul","áron alul","ÁRON ALUL","ÚJ","új","jó ajánlat","olcsóbb","sérülésmentes","Bontatlan"]
AOS.init();
//const array=[{ ár :" 54 990 ",megnevezés:"ASUS  TUF VG249Q Gaming monitor, 23.8 , IPS, Full HD, 1 ms, 144Hz, FreeSync, HDMI, D-Sub, DP",ut:"https://hardverapro.hu/apro/asus_tuf_vg249q_gaming_monitor_23_8_ips_full_hd_1_4/hsz_1-50.html",ido:"ma 18:48",kep:"//cdn.rios.hu/dl/uad/2023-09/6225256/img_6712.jpeg/100"},{ár:"15 000",megnevezés:"Samsung 24\" monitor - törött kijelzős",ut:"https://hardverapro.hu/apro/samsung_24_monitor_torott_kijelzos/hsz_1-50.html",ido:"ma 18:46",kep:"//cdn.rios.hu/dl/uad/2023-09/6231401/samu_mon.jpg/100"},{ár:"30 000",megnevezés:"LG monitor 24MP59G-P",ut:"https://hardverapro.hu/apro/lg_monitor_24mp59g-p/hsz_1-50.html",ido:"ma 18:42",kep:"//cdn.rios.hu/dl/uad/2023-09/6209109/24mp59g-p.webp/100"}]

function App() {
  const [screenSize,setScreenSize]=useState(getCurrentScreenSize())
  const [array,setArray]=useState([])
  const [loading,setLoading]=useState(false)

  function getCurrentScreenSize()
  {
    return window.innerWidth;
  }
 async function fetchData()
  {
    try{
      const response = await fetch("http://192.168.1.124:3001/hardverapro");
      const movies = await response.json();
      setArray(movies)
      setTimeout(()=>{
        setLoading(false)
      },3000)
     
    }
    catch(e)
    {
      console.log(e)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  useEffect(() => {
    console.log("start")
    const updateDimension = () => {
      setScreenSize(getCurrentScreenSize())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])
 if(loading)
  {
    return <LoadingScreen></LoadingScreen>
  
  }
  return (
      <div  data-aos="fade-in" className="App container-fluid position-relative">
      <div className='pt-5'>
      <ScrollUpandDown ar={array}></ScrollUpandDown>
      <ItemContainer ar={array} screenSize={screenSize}></ItemContainer>
      </div>
    </div>
    
  );
}
export default App;
