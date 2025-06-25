import React from "react";
import {WordsData} from "../../data/WordsData";
import TableRow from "./TableRow";
import styles from "./Table.module.css";


function TableWords() {
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.headerRow}>
                    <th className={styles.headerCell}>ENGLISH</th>
                    <th className={styles.headerCell}>TRANSCRIPTION</th>
                    <th className={styles.headerCell}>TRANSLATION</th>
                    <th className={styles.headerCell}>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    WordsData.map((word) => (
                        <TableRow key={word.id} word={word} />
                    ))
                }
            </tbody>
        </table>
    );
}

export default TableWords;