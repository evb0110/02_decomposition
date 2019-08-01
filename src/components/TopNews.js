import React from 'react';
import '../css/TopNews.css'

export default function TopNews({ news }) {
  return (
    <div>
      {news.map(newly => (
        <div>
          <span class="material-icons">{newly.icon}</span>
          <span className="newly-text">{newly.text}</span>
        </div>
      ))}
    </div>
  );
}
