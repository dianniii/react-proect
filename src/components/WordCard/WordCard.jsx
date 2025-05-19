import React from "react";
import styles from "./WordCard.module.css";

const WordCard = ({ info }) => {
    const { english, transcription, translation} = info;
    return (
        <div className={styles.card}> 
            <div>{english}</div>
            <div>{transcription}</div>
            <div>{translation}</div>
        </div>
    )
};

export default WordCard;