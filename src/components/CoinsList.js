import React from "react"; 
import CoinDetail from "./CoinDetail";

const CoinsList = ({allCoins}) => {

    const coinDetails = allCoins.map((coin, index) => {
        return <CoinDetail key={index} coin={coin}></CoinDetail>
    })

    return (
        <div className="CoinsList">
            <br></br>
        {coinDetails}
        </div>
    )

};

export default CoinsList; 