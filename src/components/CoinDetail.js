import React from "react"; 

const CoinDetail = ({coin}) => {

    return (
        <div className="CoinDetail">
            <div className="CoinRow">

                <div className="Coin">
                    <p className="Market-Cap-Rank">{coin.market_cap_rank}</p>
                    <img src={coin.image} alt="Crypto token image"></img>
                    <h1>{coin.name}</h1>
                    <p className="Coin-Symbol">{coin.symbol}</p>
                </div>

                <div className="Coin-Data">
                    <p className="Coin-Price"> Current price: £{coin.current_price.toLocaleString()}</p>
                    <p className="Coin-Market-Cap">Mkt cap: £{coin.market_cap.toLocaleString()}</p>
                    {coin.price_change_percentage_24h < 0 ? (
                        <p className="Coin-Change-Red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    ): (
                        <p className="Coin-Change-Green">{coin.price_change_percentage_24h.toFixed(2)}%</p>

                    )}
                </div>

            </div>
        </div>
    );

};

export default CoinDetail; 