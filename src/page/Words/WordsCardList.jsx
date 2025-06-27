import useFetchWords from "../../hooks/useFetchWords";
import WordCard from "../../components/AppWordCard/AppWordCard";
import styles from "./WordsCardList.module.css";

function WordsCardList() {
  const { words, loading } = useFetchWords();
  
  return (
    <div className={styles.cardList}>
      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        words.map((word) => (
          <WordCard word={word} key={word.id} />
        ))
      )}
    </div>
  );
}

export default WordsCardList;

