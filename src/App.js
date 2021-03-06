import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Coin from './Coin';



function App() {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() =>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoin(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[]);

  const handleChange =(e) =>{
    setSearch(e.target.value)
  }

  const coinFilter = coin.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="coin_app">
      <div >
        <div className="coin_search">
        <h1 className='coin_text'>Search a Crypto Currency</h1>
          <form>
            <input type="text" placeholder='Enter a Currency' className='coin_input' onChange={handleChange}  />
          </form>
        </div>
        {coinFilter.map(coin =>{
          const {id,name,image,symbol,market_cap,current_price,total_volume,price_change_percentage_24h} = coin
          return(
            <Coin key={id} name={name} image={image} symbol={symbol} priceChange={price_change_percentage_24h}
              market_cap={market_cap} price={current_price} volume={total_volume}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
