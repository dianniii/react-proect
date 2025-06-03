import React from 'react';
import { useState } from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import WordCard from "../WordCard/WordCard";

const Carousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex(prev => prev === 0 ? data.length - 1 : prev - 1);
  const handleNext = () => setIndex(prev => prev === data.length - 1 ? 0 : prev + 1);

  return (
    <CardWrapper
      onPrev={handlePrev}
      onNext={handleNext}
      currentIndex={index}
      total={data.length}
    >
      <WordCard info={data[index]} />
    </CardWrapper>
  );
};

export default Carousel;

