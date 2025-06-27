import React, { createContext, useState, useEffect } from 'react';

export const ContextWords = createContext();

const ContextWordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch('https://itgirlschool.justmakeit.ru/api/words')
      .then((response) => response.json())
      .then((data) => setWords(data))
      .catch((error) => console.error("Error fetching words:", error));
  }, []);

  const data = { words, setWords };

  return (
    <ContextWords.Provider value={data}>
      {children}
    </ContextWords.Provider>
  );
};

export default ContextWordsProvider;
