import React from "react";

import Style from "../styles/search.module.css";
import { SearchBar } from "../searchPage/searchPageIndex";
import { Filter, Slider, Brand } from "../components/componentsindex";

import { NftCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";

const search = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  return (
    <div className={Style.search}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar />
      <Filter />
      <NftCardTwo nftData={collectionArray} /> 
      <Slider />
      <Brand />
    </div>
  );
};

export default search;
