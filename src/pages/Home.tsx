import {graphql, Link, PageProps} from "gatsby";
import React from "react";
import { Image , Box } from '@chakra-ui/react'
import Layout from '../components/Layout';
import  img from "../images/maiki-back-2.png";
import index from './index';
import ScrollProducts from "../components/ScrollProducts";
import {StaticImage} from "gatsby-plugin-image";
import '../styles/Styles.css';

const Home:React.FC = () =>{
    return(
        <Layout>
        <main className="styles">
            <Box  width="100%"
                  minWidth="800px"
                  maxWidth="1200px"
                  margin="auto">
                <Image src= {img} alt='maiki-technology'
                       height="100%"
                       width="100%" />
            </Box>
            <strong>Welcome to omaiki web</strong>
            <p>このサイトはmaiki.incの紹介サイトになります</p>
            <br/>
            <strong>Products</strong>
            <ScrollProducts images={[
                <Link to="/ProductA"><StaticImage src ='../images/product-a.png' alt='Product-A'/></Link>,
                <Link to="/ProductB"><StaticImage src ='../images/product-b.png' alt='Product-A'/></Link>,
                <Link to="/ProductC"><StaticImage src ='../images/product-c.png' alt='Product-A'/></Link>]}
            />
        </main>
        </Layout>
    )
}

export default Home;