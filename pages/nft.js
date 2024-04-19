import React from 'react'
import { Category, Brand } from "../components/componentsindex";
import NFTDetailsPage from '../nftDetailsPage/NFTDetailsPage';
const nft = () => {
  return (
    <div>
        <NFTDetailsPage />
        <Category />
        <Brand />
    </div>
  )
}

export default nft