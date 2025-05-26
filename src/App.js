import Header from './components/Layout/Header';
import WordsCardList from './components/WordsCardList/WordsCardList ';
import TableWords from './components/TableWords/TableWords'



function App() {
  return (
    <div className="App">
      <Header />
      <WordsCardList />
      <TableWords/>
    </div>
  );
}

export default App;
