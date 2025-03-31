import { useState } from "react";
import { Button } from "./Button";
import { InfinitySpin } from "react-loader-spinner";

function Joke() {
    const [joke, setJoke] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchApi() {
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch(
                "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
            );

            if (!res.ok) {
                throw new Error("Failed to fetch joke");
            }

            const data = await res.json();
            setJoke(data.joke);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="joke">
            <Button callApi={fetchApi} />

            {error && <h2 style={{ color: "red" }}>Error: {error}</h2>}
            {isLoading ? (
                <InfinitySpin
                    visible={true}
                    width="200"
                    color="#4fa94d"
                    ariaLabel="infinity-spin-loading"
                />
            ) : error ? (
                <p style={{ color: "red" }}>Error: {error}</p>
            ) : (
                <p>{joke}</p>
            )}
        </div>
    );
}

export default Joke;
