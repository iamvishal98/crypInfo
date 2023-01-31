import axios from 'axios';
import DOMPurify from 'dompurify';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Coininfo.css'

const Coininfo = () => {

  const params = useParams();
  const [coin,setCoin] = useState({});
  const URL=`https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(()=>{
    axios.get(URL).then((response)=> {
      setCoin(response.data);
    }).catch((err) => {
      console.log(err);
    })
  },[])

//chartjs

  return (

    <div className='coin_container'>

      <div className="content">
        <h1>{coin.name}</h1>
      </div>

      <div className="content">

        <div className="rank">
          <span>Rank #{coin.market_cap_rank}</span>
        </div>

        <div className="info">

          <div className="coin_heading">
            {coin.image ? <img src={coin.image.small} alt='' /> : null}
            {coin.symbol ? <p>{coin.symbol.toUpperCase()}</p> : null}
          </div>
          <div className="coin_price">
            {coin.market_data ? <h1>{coin.market_data.current_price.inr}</h1> : null}
          </div>

        </div>

      </div>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th>1d</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>1y</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{coin.market_data?.price_change_percentage_24h_in_currency && coin.market_data.price_change_percentage_24h_in_currency.inr != undefined ? <p>{coin.market_data.price_change_percentage_24h_in_currency.inr.toFixed(1)}%</p> : null}</td>
            <td>{coin.market_data?.price_change_percentage_7d_in_currency && coin.market_data.price_change_percentage_7d_in_currency.inr != undefined ? <p>{coin.market_data.price_change_percentage_7d_in_currency.inr.toFixed(1)}%</p> : null}</td>
            <td>{coin.market_data?.price_change_percentage_14d_in_currency && coin.market_data.price_change_percentage_14d_in_currency.inr != undefined ? <p>{coin.market_data.price_change_percentage_14d_in_currency.inr.toFixed(1)}%</p> : null}</td>
            <td>{coin.market_data?.price_change_percentage_30d_in_currency && coin.market_data.price_change_percentage_30d_in_currency.inr != undefined ? <p>{coin.market_data.price_change_percentage_30d_in_currency.inr.toFixed(1)}%</p> : null}</td> 
            <td>{coin.market_data?.price_change_percentage_1y_in_currency && coin.market_data.price_change_percentage_1y_in_currency.inr != undefined ? <p>{coin.market_data.price_change_percentage_1y_in_currency.inr.toFixed(1)}%</p> : null}</td>
            </tr> 
          </tbody>
        </table>

      </div>
      <div className="content">
        <div className="coin_stat">
          <div className="left">
            <div className="row">

              <h4>24 Hour low</h4>
              {coin.market_data ?<p>{coin.market_data.low_24h.inr}</p> : null}
            </div>

            <div className="row">
              <h4>24 Hour High</h4>
              {coin.market_data ? <p>{coin.market_data.high_24h.inr}</p> :null}
            </div>
          </div>

          <div className="right">
            <div className="row">
              <h4>Market Cap</h4>
              {coin.market_data ? <p>{coin.market_data.market_cap.inr}</p> : null}
            </div>

            <div className="row">
              <h4>Circulation</h4>
              {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
            </div>

          </div>
        </div>
      </div>

      <div className="content">
        <div className="about">
          <h3>About</h3>
          <p dangerouslySetInnerHTML={{
            __html : DOMPurify.sanitize(coin.description ? coin.description.en : '')
          }}></p>
        </div>    
      </div>

    </div>
  )
  
}

export default Coininfo