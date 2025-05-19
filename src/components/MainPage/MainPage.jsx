import React from "react";
import WordsCardsList from "../WordsCardList/WordsCardList ";
import TableWords from "../TableWords/TableWords";



function MainPage () {
    return(
        <main>
            <WordsCardsList/>
            <TableWords/>
        </main>
    )
}

export default MainPage;