import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialInstagram,
} from "react-icons/ti";

import Style from "./Form.module.css";
import { Button } from "../../components/componentsindex.js";

const Form = () => {
    return (
        <div className={Style.form}>
            <div className={Style.form_box}>
                <form action="">
                    <div className={Style.form_box_input}>
                        <label htmlFor="name">UserName</label>
                        <input
                            type="text"
                            placeholder='sho'
                            className={Style.form_box_input_username} />
                    </div>

                    <div className={Style.form_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={Style.form_box_input_box}>
                            <div className={Style.form_box_input_box_icon}>
                                <HiOutlineMail />
                            </div>
                            <input
                                type="email"
                                placeholder='Enter your email'
                            />
                        </div>
                    </div>

                    <div className={Style.form_box_input}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="6"
                            placeholder="something about yourself in few words"
                        ></textarea>
                    </div>

                    <div className={Style.form_box_input}>
                        <label htmlFor="website">Website</label>
                        <div className={Style.form_box_input_box}>
                            <div className={Style.form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>

                            <input type="text" placeholder="website" />
                        </div>
                    </div>

                    <div className={Style.form_box_input_social}>
                        <div className={Style.form_box_input}>
                            <label htmlFor="facebook">facebook</label>
                            <div className={Style.form_box_input_box}>
                                <div className={Style.form_box_input_box_icon}>
                                    <TiSocialFacebook />
                                </div>
                                <input type="text" placeholder="http://shoaib" />
                            </div>
                        </div>
                        <div className={Style.form_box_input}>
                            <label htmlFor="Twitter">Twitter</label>
                            <div className={Style.form_box_input_box}>
                                <div className={Style.form_box_input_box_icon}>
                                    <TiSocialTwitter />
                                </div>
                                <input type="text" placeholder="http://shoaib" />
                            </div>
                        </div>
                        <div className={Style.form_box_input}>
                            <label htmlFor="Instragram">Instragram</label>
                            <div className={Style.form_box_input_box}>
                                <div className={Style.form_box_input_box_icon}>
                                    <TiSocialInstagram />
                                </div>
                                <input type="text" placeholder="http://shoaib" />
                            </div>
                        </div>
                    </div>

                    <div className={Style.form_box_input}>
                        <label htmlFor="wallet">Wallet address</label>
                        <div className={Style.form_box_input_box}>
                            <div className={Style.form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input
                                type="text"
                                placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
                            />
                            <div className={Style.form_box_input_box_icon}>
                                <MdOutlineContentCopy />
                            </div>
                        </div>
                    </div>

                    <div className={Style.form_box_btn}>
                        <Button
                            btnName="Upload profile"
                            handleClick={() => { }}
                            classStyle={Style.button}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form