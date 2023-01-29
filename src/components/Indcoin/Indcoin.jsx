import React from 'react';
import './Indcoin.css';

const Indcoin = ({coin}) => {
  return (
    <div className='coin_row'>
        <p>{coin.market_cap_rank}</p>
        <div className="img_div">
            <img src={coin.image} alt='' />
            <p>{coin.symbol.toUpperCase()}</p>
        </div>
        <p>{coin.current_price.toLocaleString()}</p>
        <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide'>₹{coin.total_volume.toLocaleString()}</p>
        <p className='hide'>₹{coin.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default Indcoin