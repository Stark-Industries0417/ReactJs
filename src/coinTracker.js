import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [inputCash, setInputCash] = useState(0);
    const [bitPrice, setBitPrice] = useState(1);

    const onChange = e => setInputCash(e.target.value);

    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
            .then(response => response.json())
            .then(json => {
                setCoins(json);
                setLoading(false);
            });
    }, [])
    return (
        <div>
            <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
            <input value={inputCash} onChange={onChange}type='number' placeholder="Enter cash" />
            {loading ? <strong>Loading...</strong> : 
                <div>
                    <select onChange={e => setBitPrice(e.target.value)}>
                        {coins.map(coin => {
                            return <option 
                                        value={coin.quotes.USD.price} 
                                        key={coin.id}>
                                    {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                                    </option>
                        })}
                    </select>
                </div>
            }
            <h3>구매 가능한 코인 수 : {inputCash/bitPrice}</h3>
        </div>
    )
}

export default CoinTracker;