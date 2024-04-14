import React from 'react';
import Layout from "../components/Layout";
import "../styles/Styles.css";

const ThanksPage: React.FC = () => {
    return (
        <Layout>
            <main className= 'styles'>
                <h2>お問い合わせありがとうございます！</h2>
                <p>お問い合わせ内容を受け付けました。</p>
                <p>ご入力いただいた情報を確認のうえ、追ってご連絡させていただきます。</p>
            </main>
        </Layout>
    );
};

export default ThanksPage;
