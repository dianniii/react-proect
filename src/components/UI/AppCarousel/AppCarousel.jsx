import React, { useEffect, useState } from 'react';
import CardWrapper from "../AppCardWrapper/AppWrapper";
import WordCard from "../../WordCard/WordCard";
import { fetchWords } from '../../api'; 

    const Carousel = () => {
      const [words, setWords] = useState([]);
      const [wordsLearned, setWordsLearned] = useState(0);
      const [index, setIndex] = useState(0);

      useEffect(() => {
        const loadWords = async () => {
          try {
            const words = await fetchWords();
            setWords(words);
          } catch (error) {
          }
        };
        loadWords();
      }, []);

      const handleViewTranslation = () =>
        setWordsLearned(prev => prev + 1);

      const handlePrev = () =>
        setIndex(prev => (prev === 0 ? words.length - 1 : prev - 1));

      const handleNext = () =>
        setIndex(prev => (prev === words.length - 1 ? 0 : prev + 1));

      if (!Array.isArray(words) || words.length === 0) {
        return <div>Нет данных для отображения</div>;
      }
      return (
        <div>
          <CardWrapper
            onPrev={handlePrev}
            onNext={handleNext}
            currentIndex={index}
            total={words.length}
            wordsLearned={wordsLearned}
          >
            <WordCard word={words[index]} onViewTranslation={handleViewTranslation} />
          </CardWrapper>
        </div>
      );
    };
    export default Carousel;
    


