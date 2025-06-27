import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import styles from "./Table.module.css";
import ErrorBoundary from "../ErrorBoundary";
import { fetchWords } from "../api";


function TableWords() {
    const [words, setWords] = useState([]);
    useEffect(() => {
            const loadWords = async () => {
                try {
                    const words = await fetchWords();
                    setWords(words);
                } catch (error) {
                }
            };
            loadWords();
            }, []);
    
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
                    words.map((word) => (
                        <ErrorBoundary key={word.id}>
                            <TableRow key={word.id} word={word} />
                        </ErrorBoundary>
                    ))
                }
            </tbody>
        </table>
    );
}

export default TableWords;