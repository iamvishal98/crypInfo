import React, { useState,useEffect, useContext, useRef } from 'react';
import './Sort.css';
import {RxEnter} from 'react-icons/rx'
import { Content } from '../../Context';

const Sort = () => {
  const {currency,setCurrency} = useContext(Content);
  const currencyRef = useRef(null);

  const handler= (e) => {
    e.preventDefault();
    setCurrency(currencyRef.current.value);
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
            <div className="sort_by">
                <p>sortBy</p>
            </div>
        
        </div>
    </div>
  )
}

export default Sort