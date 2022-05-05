import React from 'react'

const Coin = ({image,name,price,symbol,volume}) => {
  return (
    <div className='coin_container'>
      <div className="coin_row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className='coin_symbol'>{symbol}</p>
        </div>
        <div className="coin_data">
          <p className="coin_price">
            ${price}
          </p>
          <p className="coin_volume">
            ${volume.toLocaleString()}
          </p>
        </div>
      </div>


    </div>
  )
}

export default Coin