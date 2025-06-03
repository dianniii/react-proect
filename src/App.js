import React from 'react';
import Header from './components/Layout/Header';
import WordsCardList from './components/WordsCardList/WordsCardList ';
import TableWords from './components/TableWords/TableWords'
import Carusel from './components/Carusel/Carusel';
import { WordsData } from './WordData/WordsData';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<TableWords />} />
          <Route path='/words' element={<WordsCardList />} />
          <Route path='/training' element={<Carusel  data={WordsData}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
