import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const viewProjects = [
    "Portfolio",
    "Tetris",
    "Muon", 
    "read-yaml", 
    "MicroClock", 
    "MathEvaluator", 
    "Raymarching",
    "Pong",
    "Thunder",
    "Neo"
];

function generateProjectHtml(name: string){
    let link: string = "https://github.com/KJ002/"+name;
    let image: string = "https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/KJ002/"+name;

    return (
        <a className='rounded-md hover:shadow-xl' href={link}>
            <Image className="rounded-md" width="400" height="200" src={image}></Image>
        </a>
    )
}

const Projects: NextPage = () => {
    return (
        <div className='p-10 flex flex-wrap h-screen w-screen content-start justify-center items-center gap-10'>
            {viewProjects.map(projectName => generateProjectHtml(projectName))}
        </div>
    )
}

export default Projects