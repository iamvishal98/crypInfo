import React from 'react';
import './Indcoin.css';

const Indcoin = ({coin}) => {
  return (
    <div className='coin_row'>
        {coin.market_cap_rank ? <p>{coin.market_cap_rank}</p> : <p>NR</p>}
        <div className="img_div">
            <img src={coin.image} alt='' />
            <p>{coin.symbol.toUpperCase()}</p>
        </div>
        {coin.current_price ?<p>{coin.current_price.toLocaleString()}</p> : <p>No info</p>}
        {coin.price_change_percentage_24h ? <p>{coin.price_change_percentage_24h.toFixed(2)}%</p> : <p>No info</p>}
        {coin.total_volume ? <p className='hide'>{coin.total_volume.toLocaleString()}</p> : <p className='hide'>No info</p>}
        {coin.market_cap ? <p className='hide'>{coin.market_cap.toLocaleString()}</p> : <p className='hide'>No info</p>}
    </div>
  )
}

export default Indcoin