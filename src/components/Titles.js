import React from 'react';
import '../css/Titles.css';

export default function({ titles }) {
  return (
    <ul>
      {titles.map(title => (
        <li>{title}</li>
      ))}
    </ul>
  );
}
