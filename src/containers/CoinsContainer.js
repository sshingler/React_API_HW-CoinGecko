import React, {useEffect, useState} from "react"; 
import CoinDetail from "../components/CoinDetail";
import CoinsList from "../components/CoinsList";


const CoinsContainer = () => {
    const [allCoins, setAllCoins] = useState ([]);
    const [search, setSearch] = useState(""); 


    useEffect (() => {
        getCoins();
    }, []);

    const getCoins = function () {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
        .then(res => res.json())
        .then(allCoins =>setAllCoins(allCoins))
    };

    const handleChange = event => {
        setSearch(event.target.value)
    }

    const filteredCoins = allCoins.filter(coin => 
       coin.name.toLowerCase().includes(search.toLowerCase())
       );



    return (
        <div className="CoinsContainer">       
            <h1>I'm a coin container</h1>
            <div className="CoinSearch">
                <h2>Search a currency</h2>
                <form>
                    <input className="SearchInput" 
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}>
                    </input>
                </form>
            </div>

            {filteredCoins.map((coin, index) => {
                return (
                    <CoinDetail key={index} coin={coin}></CoinDetail>
                )
            }
                )};
            <CoinsList allCoins={allCoins} handleChange={handleChange}/>
        </div>
  
    );
};

export default CoinsContainer; 