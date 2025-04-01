import { useEffect, useState } from "react";
import "./App.css";
import { MagnifyingGlass } from "react-loader-spinner";

function App() {
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(crypto);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                "X-API-KEY": "D/ipytrlVpMglzKN1eM2hbLj9RbJTI3hH+ocSlxdQbg="
            }
        };

        fetch("https://openapiv1.coinstats.app/coins", options)
            .then((res) => res.json())
            .then((res) => {
                setCrypto(res.result);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="App">
            <h1>All Cryptocurrencies </h1>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading ? (
                <>
                    <MagnifyingGlass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="magnifying-glass-loading"
                        wrapperStyle={{}}
                        wrapperClass="magnifying-glass-wrapper"
                        glassColor="#c0efff"
                        color="#e15b64"
                    />
                    <p>Loading data...</p>
                </>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <td>Rank</td>
                            <td>Name</td>
                            <td>Symbol</td>
                            <td>Market Cap</td>
                            <td>Price</td>
                            <td>Available Supply</td>
                            <td>Volume(24hrs)</td>
                        </tr>
                    </thead>
                    <tbody>
                        {crypto
                            .filter((val) =>
                                val.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            )
                            .map((val, id) => {
                                return (
                                    <tr key={id}>
                                        <td className="rank">{val.rank}</td>
                                        <td className="logo">
                                            <a
                                                href={val.explorers[0]}
                                                target="_blank"
                                            >
                                                <img
                                                    src={val.icon}
                                                    alt="logo"
                                                    width="30px"
                                                />
                                            </a>
                                        </td>
                                        <td className="symbol">{val.symbol}</td>
                                        <td>${val.marketCap}</td>
                                        <td>${val.price.toFixed(2)}</td>
                                        <td>{val.availableSupply}</td>
                                        <td>{val.volume.toFixed(0)}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default App;
