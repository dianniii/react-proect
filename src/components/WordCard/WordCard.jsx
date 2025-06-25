import React, { useEffect, useRef, useState } from "react";
import styles from "./WordCard.module.css";
import Button from "../UI/AppButton/AppButton";

const WordCard = ({ info, onViewTranslation }) => {
    const [isButtonPressed, setIsButtonPressed] = useState(false);

    const { english, transcription, translation } = info;

    const handleButtonClick = () => {
        if (!isButtonPressed && onViewTranslation){
            onViewTranslation();
        }
        setIsButtonPressed((prev) => !prev);
    };

    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current){
            buttonRef.current.focus();
        }
    }, [info]); //эффект запускается каждый раз при смене карточки 

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
                <Button ref={buttonRef} type='check' text="Check" onClick={handleButtonClick} />
            )}
        </div>
    );
};

export default WordCard;



