'use client'
import React, {
    useState
} from 'react'
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";

import Style from "./NftCardTwo.module.css";
import { LikeProfile } from "../../components/componentsindex"
const NftCardTwo = ({ nftData }) => {
    const [like, setLike] = useState(false);
    const [likeInc, setLikeInc] = useState(21);

    const likeNFT = () => {
        if (!like) {
            setLike(true);
            setLikeInc(23);
        } else {
            setLike(false);
            setLikeInc(23 + 1);
        }
    };
    return (
        <div className={Style.nftCardTwo}>
            {
                nftData.map((el, i) => (
                    <div className={Style.nftCardTwo_box} key={i + 1}>
                        <div className={Style.nftCardTwo_box_like}>
                            <div className={Style.nftCardTwo_box_like_box}>
                                <div className={Style.nftCardTwo_box_like_box_box}>
                                    <BsImage className={Style.nftCardTwo_box_like_box_box_icon} />
                                    <p onClick={() => likeNFT()}>
                                        {like ? <AiFillHeart /> : <AiOutlineHeart />}
                                        {""}
                                        <span>{likeInc + 1}</span>
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className={Style.nftCardTwo_box_img}>
                            <Image
                                src={el}
                                alt="NFT"
                                width={260}
                                height={260}
                                className={Style.nftCardTwo_box_img_img}
                            />
                        </div>
                        <div className={Style.nftCardTwo_box_info}>
                            <div className={Style.nftCardTwo_box_info_left}>
                                <LikeProfile />
                                <p>Clone #{i + 1}</p>
                            </div>
                            <small>4{i + 2}</small>
                        </div>

                        <div className={Style.nftCardTwo_box_price}>
                            <div className={Style.nftCardTwo_box_price_box}>
                                <small>Current Bid</small>
                                <p>1{i + 5}.000 ETH</p>
                            </div>
                            <p className={Style.nftCardTwo_box_price_stock}>
                                <MdTimer /> <span>{i + 1} hours left</span>
                            </p>
                        </div>

                    </div>))
            }
        </div>
    )
}

export default NftCardTwo