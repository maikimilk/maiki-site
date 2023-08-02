import {graphql, Link, PageProps} from "gatsby";
import React from "react";
import Layout from "../components/Layout.tsx";
import "../styles/About.css";
import ExperienceList from "../components/ExperienceList";
import { IconContext } from 'react-icons'
import { FaTwitterSquare } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import {fromatDate} from '../data'
import index from './index';
import NavigationButton from "../components/NavigationButton";



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
            <h3>考え方</h3>
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
            </main>
        </Layout>
    )
}

export default About;