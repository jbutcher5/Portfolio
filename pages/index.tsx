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
    <div className='grid place-items-center h-screen'>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/icon1.png" />
      </Head>
      <div className='flex flex-col px-6 py-4 max-w-sm mx-auto bg-pisswhite rounded-xl space-y-4 ring ring-lime'>
        <div className='flex flex-row items-center space-x-4'>
          <div className='ring-lime hover:ring top-1 rounded-full w-16 h-16'>
            <Link href={githubProfile}>
              <Image className='fixed rounded-full cursor-pointer' width='64' height='64' src={profilePicture} priority></Image>
            </Link>
          </div>
          <div>
            <div className='text-xl font-medium text-black'>{GithubInfo["name"]}</div>
            <p className='text-sm text-gray-500'>{GithubInfo["bio"]}</p>
          </div>
        </div>
        <Link href="/projects">
          <button className='p-1 ring-lime hover:ring bg-darkgreen rounded text-white'>Projects</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
