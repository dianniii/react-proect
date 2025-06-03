import React from "react";
import { Link } from "react-router-dom";

function Header () {
    return (
        <header>
            <h1>English Vocabulary</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>HOME </Link >
                    </li>
                    <li>
                        <Link to={'/training'}>TRAINING </Link >
                    </li>
                    <li>
                        <Link to={'/words'}>ALL THE WORDS </Link >
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;