import React,{useState,createContext} from 'react';

export const Content = createContext();

const Context = ({children}) => {
  const [currency,setCurrency] = useState('inr');
  const [order,setOrder] = useState('market_cap_desc')
  
  return (
    <Content.Provider value={{currency,setCurrency,order,setOrder}}>
        {children}
    </Content.Provider>
  )
}

export default Context