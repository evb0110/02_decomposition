import React from 'react';
import './App.css';
import Titles from './components/Titles';
import DateComponent from './components/Date';
import TopNews from './components/TopNews';
import Currencies from './components/Currencies';
import Education from './components/Education';
import SearchBlock from './components/SearchBlock';
import Banner from './components/Banner';
import Weather from './components/Weather';
import Popular from './components/Popular';
import MapLink from './components/MapLink';
import TVSchedule from './components/TVSchedule';
import RadioSchedule from './components/RadioSchedule';
import topNews from './data/top_news';


import titles from './data/titles'

function App() {
  return (
    <div className="App">
      <Titles titles={titles} />
      <DateComponent />
      <TopNews news={topNews} />
      <Currencies />
      <Education />
      <SearchBlock />
      <Banner />
      <Weather />
      <Popular />
      <MapLink />
      <TVSchedule />
      <RadioSchedule />
    </div>
  );
}

export default App;
