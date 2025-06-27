import React, { useEffect, useRef, useState } from "react";
import styles from "./AppWordCard.module.css";
import Button from "../AppButton/AppButton";

const WordCard = ({ word, onViewTranslation }) => { 
    const [isButtonPressed, setIsButtonPressed] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [word]);
    
    if (!word) {
        return null;
    }
    
    const { english, transcription, russian } = word;

    const handleButtonClick = () => {
        setIsButtonPressed(!isButtonPressed);
        if (!isButtonPressed && typeof onViewTranslation === 'function') {
            onViewTranslation();
        }
    };

    return (
        <div className={styles.cardContent}>
            <div className={styles.cardDetails}>{english}</div>
            <div className={styles.cardDetails}>{transcription}</div>
            {isButtonPressed ? (
                <div>
                    <div className={styles.cardDetails}>{russian}</div>
                    <div className={styles.buttonWrapper}>
                        <Button type='close' text="Close" onClick={handleButtonClick} />
                    </div>
                </div>
            ) : (
                <Button ref={buttonRef} type='check' text="Check" onClick={handleButtonClick} />
            )}
        </div>
    );
};

export default WordCard;


