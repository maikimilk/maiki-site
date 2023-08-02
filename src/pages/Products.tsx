import {graphql, Link, PageProps} from "gatsby";
import React from "react";
import {Image, SimpleGrid,Box } from '@chakra-ui/react'
import Layout from "../components/Layout.tsx";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import "../styles/Styles.css";
import {fromatDate} from '../data'
import index from './index';
import img from "../images/product-a.png";
import {StaticImage} from "gatsby-plugin-image";

const Products: React.FC = () =>{
    return(
        <Layout>
        <main className='styles'>
            <h1>Products</h1>
            <p>maikiが制作した物の一覧です</p>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                <Box bg="gray.200" p={4}>
                    <Link to="/ProductA"><StaticImage src ='../images/product-a.png'/></Link>
                    <h2>プロフィールサイト</h2>
                    <Link to="/ProductA">
                        詳細はこちら <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>
                <Box bg="gray.200" p={4}>
                    <Link to="/ProductB"><StaticImage src ='../images/product-b.png'/></Link>
                    <h3>論文通知BOT</h3>
                    <Link to="/ProductB">
                        詳細はこちら <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>
                <Box bg="gray.200" p={4}>
                    <Link to="/ProductC"><StaticImage src ='../images/product-c.png'/></Link>
                    <h4>自律制御マシン</h4>
                    <Link to="/ProductC">
                        詳細はこちら <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>
            </SimpleGrid>
        </main>
        </Layout>
    )
}

export default Products;