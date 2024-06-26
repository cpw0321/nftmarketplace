import React from "react";

import Style from "../styles/collection.module.css"
import images from "../img";
import { Slider, Brand, Filter } from "../components/componentsindex";
import { Banner, CollectionProfile, NftCardTwo } from "../collectionPage/collectionIndex";

const collection = () => {
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
        <div className={Style.collection}>
            <Banner bannerImage={images.creatorbackground1}/>
            <CollectionProfile />
            <Filter />
            <NftCardTwo nftData={collectionArray}/>
            <Slider />
            <Brand />
        </div>
    );
};

export default collection;