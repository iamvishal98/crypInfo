import React ,{ useState,useEffect } from 'react';
import { Route,Routes  } from 'react-router-dom';
import axios from 'axios';
import Coin from './components/Coin/Coin';
import Navbar from './components/Navbar/Navbar';
import Pagination from './components/Pagination/Pagination';
import Coininfo from './Routes/Coininfo/Coininfo';

function App() {

  const [data,setData] = useState([]);
  const URL='https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false';


  const [currentPage,setCurrentPage] = useState(1);
  const [dataPerPage,setDataPerPage] = useState(10);
  const lastIndex = currentPage * dataPerPage;
  const firstIndex= lastIndex-dataPerPage;
  //Pagination


  useEffect(()=>{
    axios.get(URL).then((res) => {
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[]);

  const currentPageData = data.slice(firstIndex,lastIndex)



  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element=
        {<Coin coindata={currentPageData}  dataPerPage={dataPerPage}   
        setCurrentPage={setCurrentPage} currentPage={currentPage} data={data}/>} 
      />
      <Route path='/coin' element={<Coininfo/>}> 
        <Route path=':coinId' element={<Coininfo/>}/>
      </Route>
    </Routes>
  {/*   <Pagination totalPages={data.length} dataPerPage={dataPerPage} setCurrentPage={setCurrentPage} 
    currentPage={currentPage}
  /> */}
    </>
  )
}

export default App
