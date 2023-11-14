import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export function LoadingScreen() {
  return (
    <div className="App vh-100 d-flex justify-content-center align-items-center container-fluid ">
      <TailSpin
        width='200'
        color="#12486b" />
    </div>
  );
}
