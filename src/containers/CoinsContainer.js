import React, {useEffect, useState} from "react"; 
import CoinsList from "../components/CoinsList";

const CoinsContainer = () => {
    const [allCoins, setAllCoins] = useState ([]);


    useEffect (() => {
        getCoins();
    }, []);

    const getCoins = function () {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
        .then(res => res.json())
        .then(allCoins =>setAllCoins(allCoins))
    };

    return (
        <div className="CoinsContainer">       
            <h1>I'm a coin container</h1>
            <div className="CoinSearch">
                <h2>Search a currency</h2>
                <form>
                    <input className="SearchInput" 
                    type="text"
                    placeholder="Search">
                    </input>
                </form>
            </div>
            <CoinsList/>
        </div>
  
    );
};

export default CoinsContainer; 