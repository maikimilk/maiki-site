import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import "../styles/Styles.css";

const CenterStyle = {
    display: 'flex',
    justifyContent: 'center'
};

export default function ContactPage(){
    return(
        <Layout>
            <main className= 'styles' >
                <strong>Contact</strong>
                <p style={CenterStyle}>ご連絡の際は以下のフォームからご連絡ください。</p>
                <p style={CenterStyle}>お気軽にお問い合わせください。</p>
                <ContactForm/>
            </main>
        </Layout>
    )
}

