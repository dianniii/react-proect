import React from "react";

const WordCard = ({ info }) => {
    const { english, transcription, translation, tags} = info;
    return (
        <div> 
            <div>{english}</div>
            <div>{transcription}</div>
            <div>{translation}</div>
            <div>{tags}</div>
        </div>
    )
};

export default WordCard;