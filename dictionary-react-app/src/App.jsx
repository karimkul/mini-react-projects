import Axios from "axios";

import { React, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import "./App.css";

function App() {
    const [data, setData] = useState(null);
    const [searchWord, setSearchWord] = useState("");
    const [inputValue, setInputValue] = useState("");

    function getMeaning() {
        if (!searchWord.trim()) return;

        Axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
        ).then((response) => {
            setData(response.data[0]);
        });

        setInputValue("");
    }

    function playAudio() {
        let audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }

    return (
        <div className="App">
            <h1>Free Dictionary</h1>
            <div className="searchBox">
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Search..."
                    onChange={(e) => {
                        setSearchWord(e.target.value);
                        setInputValue(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        getMeaning();
                    }}
                >
                    <FaSearch size="20px" />
                </button>
            </div>
            {data && (
                <div className="showResults">
                    <h2>
                        {data.word}
                        <button
                            onClick={() => {
                                playAudio();
                            }}
                        >
                            <FcSpeaker size="26px" />
                        </button>
                    </h2>
                    <h4>Parts of speech:</h4>

                    <p>{data.meanings[0].partOfSpeech}</p>

                    <h4>Definition:</h4>

                    <p>{data.meanings[0].definitions[0].definition}</p>

                    <h4>Example:</h4>

                    <p>
                        {data.meanings[0].definitions[0].example ||
                            "No example available."}
                    </p>
                </div>
            )}
        </div>
    );
}

export default App;
