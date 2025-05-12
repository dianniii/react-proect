import React from "react";
import {WordsData} from "../constants/WordsData";
import WordCard from "./WordCard";

function WordsCards (){
    return(
        <div>
            {
                WordsData.map((info, index) => {
                    return <WordCard info={info} key={index}/>
            })
        }
        </div>
    )
}

export default WordsCards;