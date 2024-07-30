import React from 'react';
import Image from 'next/image';
import images from "../../assets";
import style from "./PoolConnect.module.css";

const PoolConnect = () => {
  return (
    <div className={style.PoolConnect}>
      <div className={style.PoolConnect_box}>

        <div className={style.PoolConnect_box_header}>
          <h2>Pool</h2>
          <p>+ New Position</p>
        </div>

        <div className={style.PoolConnect_box_middle}>
          <Image src={images.wallet} alt='Wallet' height={80} width={80} />
          <p>Your Active V3 liquidity positions will appear here.</p> 
          <button>Connect Wallet</button>
        </div>

        <div className={style.PoolConnect_box_info}>
          <div className={style.PoolConnect_box_info_left}>
            <h5>Learn about providing Liquidity</h5>
            <p>Checkout our v3 LP walkthrough and migrate guide</p>
          </div>
          <div className={style.PoolConnect_box_info_right}>
            <h5>Top Pools</h5>
            <p>Explore DEX Analytics</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default PoolConnect;
