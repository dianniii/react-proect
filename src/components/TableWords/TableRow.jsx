import React from "react";
import styles from "./TableRow.module.css";

function TableRow ({word}){
    return(
        <tr className={styles.row}>
            <td>{word.english}</td>
            <td>{word.transcription}</td>
            <td>{word.translation}</td>
            <td>
            </td>
        </tr>
    )
};
export default TableRow;