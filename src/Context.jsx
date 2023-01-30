import React,{useState,createContext} from 'react';

export const Content = createContext();

const Context = ({children}) => {
  const [currency,setCurrency] = useState('inr');
  
  return (
    <Content.Provider value={{currency,setCurrency}}>
        {children}
    </Content.Provider>
  )
}

export default Context