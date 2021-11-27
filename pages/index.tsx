import { data } from 'autoprefixer';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import type { AppProps } from 'next/app'

export const getStaticProps = async () => {

  const response = await fetch('https://api.github.com/users/KJ002')
  const data = await response.json();

  
  return {
    props: { GithubInfo: data }
  };

}

const Home: NextPage = ({ GithubInfo }: any) => {

  console.log(typeof GithubInfo);

  let githubProfile = 'https://github.com/'+GithubInfo["login"];
  let profilePicture = 'https://avatars.githubusercontent.com/u/'+GithubInfo["id"].toString()+'?s=64&v=4';

  return (
    <div className="grid place-items-center h-screen">
      <div className="p-6 max-w-sm mx-auto bg-nord5 rounded-xl shadow-md space-x-4 h-48 ring ring-nord9">
        <a href={githubProfile}>
          <Image className='fixed top-1 rounded-full' width='64' height='64' src={profilePicture}></Image>
        </a>
        <div className="text-xl font-medium text-nord1">{GithubInfo["name"]}</div>
        <p className="text-gray-500">{GithubInfo["bio"]}</p>
        <Link href="/projects">
          <button className='p-1 ring-nord9 hover:ring bg-nord10 rounded text-nord4'>Projects</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
