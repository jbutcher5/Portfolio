import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const viewProjects = [
    "Wlanguage/core",
    "KJ002/Boids",
    "KJ002/read-yaml",
    "Wlanguage/wi",
    "KJ002/simple_status",
    "KJ002/Tetris",
    "KJ002/ghstat",
    "KJ002/quick_file",
    "Wlanguage/python-core",
    "KJ002/Portfolio",
    "KJ002/Muon",
    "KJ002/anagram_solver",
    "KJ002/MicroClock",
    "KJ002/MathEvaluator",
    "KJ002/Raymarching",
    "KJ002/Pong",
    "KJ002/Thunder",
    "KJ002/Neo"
];

function generateProjectHtml(name: string){
    const link: string = "https://github.com/"+name;
    const image: string = "https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/"+name;

    return (
        <Link href={link} key={name}>
            <Image className="rounded-md cursor-pointer" width="400" height="200" src={image}></Image>
        </Link>
    )
}

const Projects: NextPage = () => {
    return (
        <div>
            <Head>
            <title>Projects</title>
            <link rel="icon" href="/icon1.png" />
            </Head>
            <div className='p-10 flex flex-wrap h-full w-full content-start justify-center items-center gap-10'>
                {viewProjects.map(projectName => generateProjectHtml(projectName))}
            </div>
        </div>
    )
}

export default Projects
