import {graphql, Link, PageProps} from "gatsby";
import React from "react";
import Layout from "../components/Layout.tsx";
import "../styles/Styles.css";
import {fromatDate} from '../data'

export default function ContactPage(){
    return(
        <Layout>
            <main className= 'styles'>
                <h1>Contact</h1>
                <p>ご連絡の際は以下のフォームからご連絡ください。</p>
                <h2>form</h2>
            </main>
        </Layout>
    )
}

