import React, {useState} from 'react'
import Image from 'next/image'
import style from './SearchToken.module.css'
import images from '../../assets'

const SearchToken = ({openToken, tokens, tokenData}) => {
  
  const [active, setActive] = useState(1)
  const coin = [
    {
      img: images.ether,
      name: "ETH"
    },
    {
      img: images.ether,
      name: "DAI"
    },
    {
      img: images.ether,
      name: "USDT"
    },
    {
      img: images.ether,
      name: "WBTC"
    },
    {
      img: images.ether,
      name: "WETH"
    }
  ]

  return (
    <div className={style.SearchToken}>
      <div className={style.SearchToken_Box}>

        <div className={style.SearchToken_Box_heading}>
          <h4>Sealect a Token</h4>
          <Image src={images.close} alt='close' width={50} height={50} onClick={()=>openToken(false) } />
        </div>

        <div className={style.SearchToken_Box_search}>
          <div className={style.SearchToken_Box_search_img}>
            <Image src={images.search} alt='search' width={20} height={20} />
          </div>
          <input type='text' placeholder='Search Name or Paste token Address'/>
        </div>

        <div className={style.SearchToken_Box_tokens}>
         
          {coin.map((ele, i)=>(
            <span 
              key={i+1} 
              className={active == i+1 ? `${style.active}` : ""}
              onClick={()=>(setActive(i + 1), tokens({ name: ele.name, img: ele.img })) }>

                <Image src={ele.img || images.ether} alt='image' width={30} height={30} />
                {ele.name}

            </span>
          ))}

        </div>
      
      </div>
    </div>
  )
}

export default SearchToken
