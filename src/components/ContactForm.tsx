import React, { useState } from "react";
import {Link} from "gatsby";
import "../styles/ContactForm.css";

const ContactForm = (props: any) => {
    return (
        <div>
            <form className="c-form"
                  action="contact url"
                  method="POST"
            >
                <div className="c-form__item">
                    <label className="c-form__label" htmlFor="field-name">
                        名前・会社名<span className="c-form__required">必須</span>
                    </label>
                    <input
                        name="entry id1"
                        className="c-form__input"
                        id="field-name"
                        placeholder="株式会社 佐藤"
                        type="text"
                        required
                    />
                </div>
                <div className="c-form__item">
                    <label className="c-form__label" htmlFor="field-mail">
                        メールアドレス<span className="c-form__required">必須</span>
                    </label>
                    <input
                        name="entry id2"
                        className="c-form__input"
                        id="field-mail"
                        placeholder="sample@gmail.com"
                        type="email"
                        required
                    />
                </div>
                <div className="c-form__item">
                    <label className="c-form__label" htmlFor="field-message">
                        メッセージ内容
                    </label>
                    <textarea
                        name="entry id3"
                        className="c-form__input"
                        id="field-message"
                        placeholder="お問い合わせ内容"
                    ></textarea>
                </div>
                <div className="c-form__submit">
                    <button type="submit"><Link to="/ThanksPage">送信する</Link></button>
                </div>
            </form>
        </div>
    );
};
export default ContactForm;