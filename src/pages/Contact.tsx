import {graphql, Link, PageProps} from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import "../styles/Styles.css";
import {fromatDate} from '../data'


export default function ContactPage(){
    return(
        <Layout>
            <main className= 'styles'>
                <strong>Contact</strong>
                <p>ご連絡の際は以下のフォームからご連絡ください。</p>
                <h1>form</h1>
                <ContactForm />
            </main>
        </Layout>
    )
}

