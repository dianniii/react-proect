import React from "react";
import styles from './Button.module.css';

const Button = ({ text, type, onClick }) => {
    return <button onClick={onClick} className={type ==='close' ? styles.close : styles.check}>{text}</button>;
};

export default Button;
