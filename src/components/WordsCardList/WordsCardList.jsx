import { useEffect, useState } from "react";
import WordCard from "../WordCard/WordCard";
import styles from "./WordsCardList.module.css";
import { fetchWords } from "../api";

function WordsCardList (){

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

    return(
        <div className={styles.cardList}>
            {
                words.map((word) => {
                    return <WordCard word={word} key={word.id}/>
            })
        }
        </div>
    )
}

export default WordsCardList;