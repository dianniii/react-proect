import React from 'react';
import { useState } from "react";
import CardWrapper from "../AppCardWrapper/AppWrapper";
import WordCard from "../../WordCard/WordCard";

const Carousel = ({ data }) => {
  const [wordsLearned, setWordsLearned] = useState(0);
  const handleViewTranslation = () =>
    setWordsLearned (prev => prev  +1 );

  const [index, setIndex] = useState(0);
  const handlePrev = () =>
    setIndex(prev => prev === 0
      ? data.length - 1 : prev - 1);
      
  const handleNext = () => 
    setIndex(prev => prev === data.length - 1 
      ? 0 : prev + 1);

  return (
    <div>
      <CardWrapper
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={index}
        total={data.length}
        wordsLearned={wordsLearned}
      >
        <WordCard info={data[index]} onViewTranslation={handleViewTranslation} />
      </CardWrapper>
    </div>
  );
};

export default Carousel;

