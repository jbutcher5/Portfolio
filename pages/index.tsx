import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-800">
    <div className="grid place-items-center h-screen">
      <div className="p-6 max-w-sm mx-auto bg-gray-100 rounded-xl shadow-md flex space-x-4 h-48 flex-wrap">
        <div className="text-xl font-medium text-black">Portfolio</div>
        <p className="text-gray-500">C/C++, Python, Nim developer</p>
      </div>
    </div>
    </div>
  )
}

export default Home
