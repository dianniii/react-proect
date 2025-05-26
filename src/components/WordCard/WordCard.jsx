import React, { useState } from "react";
import styles from "./WordCard.module.css";
import Button from "../Button/Button";

const WordCard = ({ info }) => {
    const [isButtonPressed, setIsButtonPressed] = useState(false);

    const { english, transcription, translation } = info;

    const handleButtonClick = () => {
        setIsButtonPressed((prev) => !prev);
    };

    return (
        <div className={styles.cardContent}>
            <div className={styles.cardDetails}>{english}</div>
            <div className={styles.cardDetails}>{transcription}</div>
            {isButtonPressed ? (
                <div>
                    <div className={styles.cardDetails}>{translation}</div>
                    <div className={styles.buttonWrapper}>
                        <Button type='close' text="Close" onClick={handleButtonClick} />
                    </div>
                </div>
            ) : (
                <Button type='check' text="Check" onClick={handleButtonClick} />
            )}
        </div>
    );
};

export default WordCard;



