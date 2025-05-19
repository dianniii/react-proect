import React from "react";
import {WordsData} from "../../WordData/WordsData";
import TableRow from "./TableRow";
import styles from "./TableWords.module.css";


function TableWords() {
    return (
    <div className={styles.tableConteiner}>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.title}>English</th>
                    <th className={styles.title}>Transcription</th>
                    <th className={styles.title}>Translation</th>
                    <th className={styles.title}>Action</th>
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
    </div>
    );
}

export default TableWords;