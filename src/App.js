import React, { Suspense } from 'react';
import Header from './components/Layout/Header';
import { WordsData } from './data/WordsData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './components/routes';


function App() {  
  const WordsCardList = React.lazy(() => import('./components/WordsCardList/WordsCardList'));
  const TableWords = React.lazy(() => import('./components/Table/TableWords'));
  const Carusel = React.lazy(() => import('./components/UI/AppCarousel/AppCarousel'));
  const NotFoundPage = React.lazy(() => import('./components/NotFoundPage/NotFoundPage'));

  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROUTES.HOME} element={<TableWords />} />
            <Route path={ROUTES.TRAIN} element={<Carusel data={WordsData} />} />
            <Route path={ROUTES.WORDS} element={<WordsCardList />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;


