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
                    <p className="Coin-Price">£{coin.current_price.toLocaleString()}</p>
                    <p className="Coin-Market-Cap">£{coin.market_cap.toLocaleString()}</p>
                </div>

            </div>
        </div>
    );

};

export default CoinDetail; 