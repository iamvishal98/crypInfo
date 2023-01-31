import React, { useState, useContext, useRef } from 'react';
import './Sort.css';
import {RxEnter,IoIosArrowDropdownCircle,IoIosArrowDropupCircle} from 'react-icons/all'
import { Content } from '../../Context';

const Sort = () => {
  const {currency,setCurrency,setOrder} = useContext(Content);
  const currencyRef = useRef(null);

  const [show ,setShow] = useState(false)

  const handler= (e) => {
    e.preventDefault();
    setCurrency(currencyRef.current.value);
    currencyRef.current.value='';
  }



  return (
    <div className="container">
        <div className='sort_container'>
            <div className="sorting">
                <label>
                    <span>currency</span> 
                        <form onSubmit={handler}>
                            <input type='text' ref={currencyRef}/>
                            <button><RxEnter className='enter'/></button>
                        </form>   
                </label>
            </div>
            <div className="sort_by" onClick={() => setShow(!show)}>
                {show ? <IoIosArrowDropupCircle className="sort_icon"/> : <IoIosArrowDropdownCircle  className="sort_icon" />}
               {show ?  <div className="sort_option">
                  <p onClick={() => setOrder('market_cap_desc')}>market cap ⬇️</p>
                  <p onClick={() => setOrder('market_cap_asc')}>market cap ⬆️</p>
                  <p onClick={() => setOrder('volume_asc')}>volume ⬆️</p> 
                  <p onClick={() => setOrder('volume_desc')}>volume ⬇️</p> 
                </div> : null}
            </div>
        
        </div>
    </div>
  )
}

export default Sort