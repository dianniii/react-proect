
import {WordsData} from "../../WordData/WordsData";
import WordCard from "../WordCard/WordCard";
import styles from "./WordsCardList.module.css";

function WordsCardList (){
    return(
        <div className={styles.cardList}>
            {
                WordsData.map((info, index) => {
                    return <WordCard info={info} key={index}/>
            })
        }
        </div>
    )
}

export default WordsCardList;