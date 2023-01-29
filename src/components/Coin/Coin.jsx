import React from 'react';
import Indcoin from '../Indcoin/Indcoin';
import { Link } from 'react-router-dom';
import './Coin.css'
import Coininfo from '../../Routes/Coininfo/Coininfo';
import Pagination from '../Pagination/Pagination';

const Coin = ({coindata,dataPerPage,setCurrentPage,currentPage,data}) => {
  return (
    <div className='container'>
        <div>
            <div className="heading">
                <p>#</p>
                <p className='name'>Coin</p>
                <p>Price</p>
                <p>24H</p>
                <p className='hide'>Volume</p>
                <p className='hide'>Market Cap</p>
            </div>

            {coindata.map((coin) => (
                <Link to={`/coin/${coin.id}`} element={<Coininfo/>} key={coin.id}>
                  <Indcoin coin={coin} />
                </Link>
            ))}
        </div>
        <Pagination totalPages={data.length} dataPerPage={dataPerPage} setCurrentPage={setCurrentPage} 
                    currentPage={currentPage} />
    </div>
  )
}

export default Coin