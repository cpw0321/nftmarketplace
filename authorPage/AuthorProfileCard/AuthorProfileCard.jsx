import React, { useState } from 'react'
import Image from "next/image";
import {
    MdVerified,
    MdCloudUpload,
    MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialYoutube,
    TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import Style from "./AuthorProfileCard.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";

const AuthorProfileCard = () => {
    const [share, setShare] = useState(false);
    const [report, setReport] = useState(false);

    //copyAddress function
    const copyAddress = () => {
        const copyText = document.getElementById("myInput");

        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    };

    const openShare = () => {
        if (!share) {
            setShare(true);
            setReport(false);
        } else {
            setShare(false);
        }
    };

    const openReport = () => {
        if (!report) {
            setReport(true);
            setShare(false);
        } else {
            setReport(false);
        }
    };
    return (
        <div className={Style.authorProfileCard}>
            <div className={Style.authorProfileCard_box}>
                <div className={Style.authorProfileCard_box_img}>
                    <Image
                        src={images.nft_image_1}
                        alt="author"
                        width={220}
                        height={220}
                        className={Style.authorProfileCard_box_img_img}
                    />
                </div>
                <div className={Style.authorProfileCard_box_info}>
                    <h2>
                        Dony Herrera
                        <span>{""}{" "}
                            <MdVerified />
                        </span>{" "}
                    </h2>
                    <div className={Style.authorProfileCard_box_info_address}>
                        <input
                            type="text"
                            defaultValue="0x829BD824B03D092293333..A830"
                            id="myInput"
                            readOnly
                        />
                        <FiCopy
                            onClick={() => copyAddress()}
                            className={Style.authorProfileCard_box_info_address_icon}
                        />
                    </div>
                    <p>
                        Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
                        Contributing to @ether_cards, an NFT Monetization Platform.
                    </p>
                    <div className={Style.authorProfileCard_box_info_social}>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                        <a href="#">
                            <TiSocialLinkedin />
                        </a>
                        <a href="#">
                            <TiSocialYoutube />
                        </a>
                    </div>
                </div>

                <div className={Style.authorProfileCard_box_share}>
                    <Button btnName="Follow" handleClick={() => { }} />
                    <MdCloudUpload
                        onClick={() => openShare()}
                        className={Style.authorProfileCard_box_share_icon}
                    />

                    {share && (
                        <div className={Style.authorProfileCard_box_share_upload}>
                            <p>
                                <span>
                                    <TiSocialFacebook />
                                </span>{" "}
                                {""}
                                Facebook
                            </p>
                            <p>
                                <span>
                                    <TiSocialInstagram />
                                </span>{" "}
                                {""}
                                Instragram
                            </p>
                            <p>
                                <span>
                                    <TiSocialLinkedin />
                                </span>{" "}
                                {""}
                                LinkedIn
                            </p>
                            <p>
                                <span>
                                    <TiSocialYoutube />
                                </span>{" "}
                                {""}
                                YouTube
                            </p>
                        </div>
                    )}

                    <BsThreeDots
                        onClick={() => openReport()}
                        className={Style.authorProfileCard_box_share_icon}
                    />

                    {report && (
                        <p className={Style.authorProfileCard_box_share_report}>
                            <span>
                                <MdOutlineReportProblem />
                            </span>{" "}
                            {""}
                            Report abouse
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AuthorProfileCard