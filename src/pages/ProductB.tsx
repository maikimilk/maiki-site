import React from "react";
import Layout from "../components/Layout";
import { Image , Box } from '@chakra-ui/react'
import "../styles/Styles.css";


const ProductB:React.FC = () =>{
    return(
        <Layout>
            <main className = 'styles'>
                <h1>Product A</h1>
                <Box boxSize='1000px'>
                    <Image src= '../images/product-b.png' alt='Product-B' />
                </Box>
                <article>
                    <h2>概要</h2>
                    <p>プロダクトBは革新的な製品で、高度な機能、使いやすさ、セキュリティを備えたパフォーマンス向上製品です。</p>
                </article>
            </main>
        </Layout>
    )
}

export default ProductB;