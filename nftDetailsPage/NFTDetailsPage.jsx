import React from 'react'
import Style from './NFTDetailsPage.module.css'
import { NFTDetailsImg, NFTDescription } from './NFTDetailsIndex';

const NFTDetailsPage = () => {
  return (
    <div className={Style.nftDetailsPage}>
        <div className={Style.nftDetailsPage_box}>
            <NFTDetailsImg />
            <NFTDescription />
        </div>
    </div>
  )
}

export default NFTDetailsPage