import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Projects: NextPage = () => {
    return (
        <div className='p-10 flex flex-wrap h-screen w-screen content-start justify-center items-center gap-10'>
            <a className='rounded-xl hover:shadow-xl' href='https://github.com/KJ002/Portfolio'>
                <Image className="rounded-xl" width="400" height="200" src="https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/KJ002/Portfolio"></Image>
            </a>
            <a className='rounded-xl hover:shadow-xl' href='https://github.com/KJ002/Tetris'>
                <Image className="rounded-xl" width="400" height="200" src="https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/KJ002/Tetris"></Image>
            </a>
            <a className='rounded-xl hover:shadow-xl' href='https://github.com/KJ002/Muon'>
                <Image className="rounded-xl" width="400" height="200" src="https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/KJ002/Muon"></Image>
            </a>
            <a className='rounded-xl hover:shadow-xl' href='https://github.com/KJ002/read-yaml'>
                <Image className="rounded-xl" width="400" height="200" src="https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/KJ002/read-yaml"></Image>
            </a>
            <a className='rounded-xl hover:shadow-xl' href='https://github.com/KJ002/MicroClock'>
                <Image className="rounded-xl" width="400" height="200" src="https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/KJ002/MicroClock"></Image>
            </a>
            <a className='rounded-xl hover:shadow-xl' href='https://github.com/KJ002/MathEvaluator'>
                <Image className="rounded-xl" width="400" height="200" src="https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/KJ002/MathEvaluator"></Image>
            </a>
            <a className='rounded-xl hover:shadow-xl' href='https://github.com/KJ002/Raymarching'>
                <Image className="rounded-xl" width="400" height="200" src="https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/KJ002/Raymarching"></Image>
            </a>
            <a className='rounded-xl hover:shadow-xl' href='https://github.com/KJ002/Pong'>
                <Image className="rounded-xl" width="400" height="200" src="https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/KJ002/Pong"></Image>
            </a>
            <a className='rounded-xl hover:shadow-xl' href='https://github.com/KJ002/Thunder'>
                <Image className="rounded-xl" width="400" height="200" src="https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/KJ002/Thunder"></Image>
            </a>
            <a className='rounded-xl hover:shadow-xl' href='https://github.com/KJ002/Neo'>
                <Image className="rounded-xl" width="400" height="200" src="https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/KJ002/Neo"></Image>
            </a>
        </div>
    )
}

export default Projects