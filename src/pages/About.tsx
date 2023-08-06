import {graphql, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import "../styles/About.css";
import ExperienceList from "../components/ExperienceList";
import {Image, Box, SimpleGrid} from '@chakra-ui/react'
import { IconContext } from 'react-icons'
import { FaTwitterSquare } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import index from './index';
import NavigationButton from "../components/NavigationButton";
import {StaticImage} from "gatsby-plugin-image";
import {ExternalLinkIcon} from "@chakra-ui/icons";



const About: React.FC = () =>{
    const experiences = [
        {
            title: '群馬工業高等専門学校　電子情報工学科',
            duration: '2018.4 - 2023.3',
        },
        {
            title: '立命館大学　理工学部　電子情報工学科',
            duration: '2023.3 - Present',
        },
    ];

    return(
        <Layout>
            <main className='main-content'>
                <title>About</title>
            <h1>Intoroduce of omaiki</h1>
                <br/>
            <p>maikiとはおまいきである。</p>
                <br/>
                <h2>経歴</h2>
                <ExperienceList experiences={experiences} />
                <br/>
            <h3>私について</h3>
                <p>音楽、アニメ、映画、絵画など芸術や、バドミントン、ソフトテニスなどの運動が好き</p>
                <p>APEX、Valorant やカービィなどのゲームもやります</p>
                <br/>
            <h4>SNS</h4>
                <IconContext.Provider value={{ size: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to='https://twitter.com/oh_maikiiii'>
                            <FaTwitterSquare />
                        </Link>
                        <Link to='https://github.com/maikimilk'>
                            <AiFillGithub />
                        </Link>
                    </div>
                </IconContext.Provider>
                <br/>
                <h5>使用可能技術</h5>
                <br/>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                    <Box bg="gray.200" p={4}>
                        <StaticImage src ='../images/product-a.png'/>
                        <h2>プロフィールサイト</h2>
                    </Box>
                    <Box bg="gray.200" p={4}>
                        <StaticImage src ='../images/product-b.png'/>
                        <h3>論文通知BOT</h3>
                    </Box>
                    <Box bg="gray.200" p={4}>
                        <StaticImage src ='../images/product-c.png'/>
                        <h4>自律制御マシン</h4>
                    </Box>
                </SimpleGrid>
            </main>
        </Layout>
    )
}

export default About;