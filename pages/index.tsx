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
    props: { GithubInfo: data},
    revalidate: 21600,
  };
}

const Home: NextPage = ({ GithubInfo }: any) => {

  const githubProfile = 'https://github.com/'+GithubInfo["login"];
  const profilePicture = 'https://avatars.githubusercontent.com/u/'+GithubInfo["id"].toString()+'?s=64&v=4';

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/icon1.png" />
      </Head>
      <div className="grid place-items-center h-screen">
        <div className="p-6 max-w-sm mx-auto bg-nord5 rounded-xl shadow-md space-x-4 h-48 ring ring-nord9">
          <div className='ring-nord9 hover:ring top-1 rounded-full w-16 h-16'>
            <Link href={githubProfile}>
              <Image className='fixed rounded-full' width='64' height='64' src={profilePicture}></Image>
            </Link>
          </div>
          <div className="text-xl font-medium text-nord1">{GithubInfo["name"]}</div>
          <p className="text-gray-500">{GithubInfo["bio"]}</p>
          <Link href="/projects">
            <button className='p-1 ring-nord9 hover:ring bg-nord10 rounded text-nord4'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
