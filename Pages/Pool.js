import React from "react";
import Image from "next/image";
import images from "./../assets";
import style from "./../styles/Pools.module.css"

import { PoolAdd, PoolConnect } from "@/Components/index";

const Pool = () => {
    return(
        <div className={style.Pool}>
            <PoolAdd />
            {/* <PoolConnect /> */}
        </div>
    );
};

export default Pool;
