import React, { useState } from 'react';
import { BiFilterAlt } from "react-icons/bi";
import Modal from 'react-bootstrap/Modal';
import { useSpring, animated } from 'react-spring';

export function FilterMobile({scroll,scrollTo, marka, setMarka, sortBy, setSortBy }) {
  const [show, setShow] = useState(false);
  const springProps = useSpring({
    opacity: scroll ? 1 : 0,
    transform: scroll ? 'translateY(0)' : 'translateY(-100px)',
  });

  const handleClose = () => {
    scrollTo();
    setShow(() => false);
  };
  const handleShow = () => setShow(!show);

  return (
    <div className='mb-3'>
    
     <button className='filter-button' onClick={handleShow}>
        <h5> <BiFilterAlt className='mb-1' size={"1rem"}></BiFilterAlt> Szűrők</h5>
    </button>
    <animated.div className="animate" style={springProps}>
      <button className='filter-button-circle' onClick={handleShow}>
          <h5><BiFilterAlt  size={"1.5rem"}></BiFilterAlt></h5>
      </button>
     </animated.div>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select defaultValue={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Rendezés</option>
            <option value="1">Árszerint növekvő</option>
            <option value="2">Árszerint csökkenő</option>
            <option value="3">Dátum szerint</option>
          </select>

          <select className='mt-3' defaultValue={marka} onChange={(e) => setMarka(e.target.value)}>
            <option value="input">Márka kereső</option>
            <option value="HP">HP</option>
            <option value="Dell">Dell</option>
            <option value="LG">LG</option>
            <option value="Sony">Sony</option>
            <option value="Samsung">Samsung</option>
            <option value="MSI">MSI</option>
          </select>

        </Modal.Body>
        <Modal.Footer>
          <button className="modal-close" onClick={handleClose}>
            Szűrők alkalmazása
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
