import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loadingScreen">
      {/* Replace the img with this h1 */}
      <h1 className="loadingScreen__logo">TRAILEX</h1>
    </div>
  );
}

export default LoadingScreen;