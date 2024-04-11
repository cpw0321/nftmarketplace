import React from 'react'

import Style from "../styles/author.module.css"
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex";
import { Brand, Title } from "../components/componentsindex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "../img";
import {
  AuthorProfileCard,
//   AuthorTaps,
//   AuthorNFTCardBox,
} from "../authorPage/componentIndex";

const author = () => {
  return (
    <div>
        <AuthorProfileCard />
        <Brand />
    </div>
  )
}

export default author