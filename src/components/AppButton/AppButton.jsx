import React, { forwardRef } from 'react';
import styles from './AppButton.module.css';

const Button = forwardRef(({ type, text, onClick }, ref) => {
    return (
        <button 
            ref={ref}
            onClick={onClick}
            className={type === 'close' ? styles.close : styles.check}
        >
            {text}
        </button>
    );
});

export default Button;

