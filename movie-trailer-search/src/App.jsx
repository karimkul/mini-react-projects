import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

import "./App.css";

function App() {
    const [video, setVideo] = useState("inseption");
    const [videoUrl, setVideoUrl] = useState("https://youtu.be/qi2XeXQWRx4");
    const [inputValue, setInputValue] = useState("");

    function handleButton() {
        movieTrailer(video)
            .then((res) => {
                setVideoUrl(res);
            })
            .catch((err) => console.log("Trailer not found", err));
        setInputValue("");
    }
    return (
        <div className="app">
            <div className="search-box">
                <label>Search for any movies/shows: </label>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        setVideo(e.target.value);
                        setInputValue(e.target.value);
                    }}
                />
                <button onClick={handleButton}>Search</button>
            </div>
            <ReactPlayer url={videoUrl} controls={true} />
        </div>
    );
}

export default App;
