import {graphql, Link, PageProps} from "gatsby";
import React from "react";
import { Image , Box } from '@chakra-ui/react'
import img from "../images/maiki-back.png"
import Layout from "../components/Layout.tsx";
import {fromatDate} from '../data'
import index from './index';
import ScrollProducts from "../components/ScrollProducts";
import {StaticImage} from "gatsby-plugin-image";
import '../styles/Styles.css';

const Home:React.FC = () =>{
    return(
        <Layout>
        <main className="styles">
            <Box boxSize='1000px'>
                <Image src= {img} alt='maiki-technology' />
            </Box>
            <h1>Welcome to omaiki web</h1>
            <p>このサイトはmaiki.incの紹介サイトになります</p>
            <h2>Products</h2>
            <ScrollProducts images={[
                <Link to="/ProductA"><StaticImage src ='../images/product-a.png'/></Link>,
                <Link to="/ProductB"><StaticImage src ='../images/product-b.png'/></Link>,
                <Link to="/ProductC"><StaticImage src ='../images/product-c.png'/></Link>]}
            />
            <h3>About</h3>
            <Link to="/About">Link to about</Link>
        </main>
        </Layout>
    )
}

export default Home;