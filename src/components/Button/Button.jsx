import React from "react";
import styles from './Button.module.css';

const Button = ({ text, type, onClick }) => {
    return <button onClick={onClick} className={type ==='primary' ? styles.primary : styles.secondary}>{text}</button>;
};

export default Button;
