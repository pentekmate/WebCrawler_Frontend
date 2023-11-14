import React from 'react';
import { scroller } from "react-scroll";
import './NavigatorButton.css'
import { useMonitors } from '../../contexts/MonitorsContext';

function NavigatorButton({ totalPages,setCurrentPage,currentPage}) {
    const {setshowLoading} = useMonitors()

    function scrollToItemTop() {
        scroller.scrollTo("header", {
          duration: 200,
          smooth: "easeInOutQuart",
          offset: -50,
        });
      }
    function handleClick(e){
        e.preventDefault()
        setshowLoading(true)
        setTimeout(() => {
            setshowLoading(false);
          }, 300);
        setCurrentPage(e.target.value)
        scrollToItemTop()
    } 
    
    return (
        <div className='navigatorButton-container'>
        {
            Array.from({ length: totalPages }, (_, i) => (
                <button  onClick={(e)=>handleClick(e)} value={i+1} className={`navigator mt-3 mb-3  ${Number(currentPage)===i+1?'active':''}`} key={i}>
                    {i + 1}
                </button>
            ))
        }
        </div>
    );
}
export default NavigatorButton