import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-nord1">
    <div className="grid place-items-center h-screen">
      <div className="p-6 max-w-sm mx-auto bg-nord5 rounded-xl shadow-md flex space-x-4 h-48 flex-wrap ring">
        <div className="text-xl font-medium text-black">Portfolio</div>
        <p className="text-gray-500">C/C++, Python, Nim developer</p>
      </div>
    </div>
    </div>
  )
}

export default Home
