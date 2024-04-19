import React, { useState } from 'react'
import Style from './LoginAndSignUp.module.css'
import Image from 'next/image'
import images from '../img'
import { Button } from '../components/componentsindex'


const LoginAndSignUp = () => {
    const [activeBtn, setActiveBtn] = useState(1);
    const socialImage = [
        {
            social: images.facebook,
            name: "Continue with Facebook",
        },
        {
            social: images.twitter,
            name: "Continue with twitter",
        },
        {
            social: images.facebook,
            name: "Continue with Facebook",
        },
    ];
    return (
        <div className={Style.user}>
            <div className={Style.user_box}>
                <div className={Style.user_box_social}>
                    {
                        socialImage.map((el, i) => (
                            <div
                                key={i + 1}
                                className={`${Style.user_box_social_item} ${activeBtn === i + 1
                                    ? Style.user_box_social_box_active
                                    : ""
                                    }`}
                                onClick={() => setActiveBtn(i + 1)}
                            >
                                <Image
                                    src={el.social}
                                    alt="social"
                                    width={30}
                                    height={30}
                                    className={Style.user_box_social_item_img}
                                />
                                <p>{el.name}</p>
                            </div>
                        ))
                    }
                </div>
                <p className={Style.user_box_or}>OR</p>

                <div className={Style.user_box_input}>
                    <div className={Style.user_box_input_box}>
                        <label htmlFor="eamil">Email Address</label>
                        <input type="text" placeholder="example@emample.com" />
                    </div>
                </div>

                <div className={Style.user_box_input_box}>
                    <label
                        htmlFor="password"
                        className={Style.user_box_input_box_label}
                    >
                        <p>Password</p>
                        <p>
                            <a href="#">Forget password</a>
                        </p>
                    </label>
                    <input type="password" />
                </div>

                <Button btnName="Continue" classStyle={Style.button} />
            </div>
        </div>
    )
}

export default LoginAndSignUp