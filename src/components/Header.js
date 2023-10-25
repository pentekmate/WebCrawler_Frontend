import React from 'react';
import { useMonitors } from '../contexts/MonitorsContext';

export function Header() {
  const {userEmail}=useMonitors()
  return (
    <div className='container mt-5 mb-5'>
      <h2 className='legfrissebb'>Legfrisebb hirdetések</h2>
    </div>
  );
}
