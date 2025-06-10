import React from 'react';
import Header from './components/Layout/Header';
import WordsCardList from './components/WordsCardList/WordsCardList';
import TableWords from './components/TableWords/TableWords'
import Carusel from './components/Carusel/Carusel';
import { WordsData } from './WordData/WordsData';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/home' element={<TableWords />} />
          <Route path='/training' element={<Carusel  data={WordsData}/>} />
          <Route path='/words' element={<WordsCardList />} />
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
