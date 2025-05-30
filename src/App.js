import React from 'react';
import Header from './components/Layout/Header';
import WordsCardList from './components/WordsCardList/WordsCardList ';
import TableWords from './components/TableWords/TableWords'
import Carusel from './components/Carusel/Carusel';
import { WordsData } from './WordData/WordsData';



function App() {
  return (
    <div className="App">
      <Header />
      <WordsCardList />
      <TableWords/>
      <Carusel data={WordsData} />
    </div>
  );
}

export default App;
