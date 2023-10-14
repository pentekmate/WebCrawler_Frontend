import React, { useState, useEffect } from 'react';
import { scroller } from "react-scroll";
import { BiUpArrowCircle, BiDownArrowCircle } from "react-icons/bi";
import { useSpring, animated } from 'react-spring';
import { useMonitors } from '../contexts/MonitorsContext';

export function ScrollUpandDown() {
  const{array}=useMonitors()
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollY]);
  function scrollToItemTop() {
    scroller.scrollTo("filter", {
      duration: 200,
      smooth: "easeInOutQuart",
      offset: -50, // A görgetés végénél elhelyezkedő elem pozíciója
    });
  }
  function scrollToItemBottom() {
    scroller.scrollTo(String(array.length - 1), {
      duration: 200,
      smooth: "easeInOutQuart",
      offset: -50, // A görgetés végénél elhelyezkedő elem pozíciója
    });
  }
  const springProps = useSpring({
    opacity: scrolling ? 1 : 0,
    transform: scrolling ? 'translateY(0)' : 'translateY(-100px)',
  });
  if (scrolling)
    return (
      <animated.div style={springProps} className='scrollbuttons-container d-none  d-xl-block '>
        <button onClick={() => scrollToItemTop()} className='scrollbuttons mb-3'>
          <BiUpArrowCircle size={"2rem"}></BiUpArrowCircle>
        </button>
        <br></br>
        <button onClick={() => scrollToItemBottom()} className='scrollbuttons'>
          <BiDownArrowCircle size={"2rem"}></BiDownArrowCircle>
        </button>
      </animated.div>
    );
}
