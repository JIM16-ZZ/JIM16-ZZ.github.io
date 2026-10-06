import React from 'react';

export default function Protection() {
  const text = 'PORTFOLIO - PROTECTED COPYRIGHT © 2026 ALL RIGHTS RESERVED';
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='260' height='160'>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='black' fill-opacity='0.12' font-family='Inter, Arial, sans-serif' font-size='20' transform='rotate(-25 130 80)'>${text}</text>
    </svg>`;

  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  const style = {
    backgroundImage: `url("${dataUri}")`
  };

  return (
    <div>
      <div className="watermark-overlay" aria-hidden="true">{text}</div>
      <div className="watermark-tile" style={style} aria-hidden="true" />
    </div>
  );
}
