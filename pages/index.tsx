import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="p-6 max-w-sm mx-auto bg-nord5 rounded-xl shadow-md space-x-4 h-48 ring ring-nord9">
        <a href='https://github.com/KJ002'>
          <Image className='fixed top-1 rounded-full' width='64' height='64' src='https://avatars.githubusercontent.com/u/36408549?s=64&v=4'></Image>
        </a>
        <div className="text-xl font-medium text-nord1">James Butcher</div>
        <p className="text-gray-500">C/C++, Python, Nim developer</p>
        <a href="/projects">
          <button className='p-1 ring-nord9 hover:ring bg-nord10 rounded text-nord4'>Projects</button>
        </a>
      </div>
    </div>
  )
}

export default Home
