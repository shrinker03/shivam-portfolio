import { getAllProjectsIds, getProjectData } from '@/lib/projects'
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot, RxDotFilled } from 'react-icons/rx';

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const projectData = getProjectData(params.id);
  return {
    props: {
      projectData,
    }
  }
}

const Project = ({ projectData }) => {
  const [currentIdx, setCurrentIdx] = useState(0)

  const data = useRouter();
  const theme = data.query.theme

  const handlePrevSlide = () => {
    const isFirstSlide = currentIdx === 0;
    const newSlide = isFirstSlide ? projectData.image.length - 1 : currentIdx - 1
    setCurrentIdx(newSlide)
  }

  const handleNextSlide = () => {
    const isLastSlide = currentIdx === projectData.image.length - 1;
    const newSlide = isLastSlide ? 0 : currentIdx + 1
    setCurrentIdx(newSlide)
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Head>
        <title>Shivam Damre</title>
        <meta name="description" content="Shivam Damre - Portfolio Project Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-slate-100 text-gray-800 px-3 md:px-20 lg:px-40 dark:bg-gray-800 dark:text-gray-50 min-h-[100vh]'>
        <div className='max-w-[1400px] h-[300px] sm:h-[780px] w-full m-auto py-16 px-4 relative group'>
          <div style={{ backgroundImage: `url(${projectData?.image[currentIdx]})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
          </div>
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-slate-50 text-black/80 cursor-pointer'>
            <BsChevronCompactLeft onClick={handlePrevSlide} size={30} />
          </div>
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-slate-50 text-black/80 cursor-pointer'>
            <BsChevronCompactRight onClick={handleNextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-4'>
            {projectData?.image.map((img, idx) => (
              <div key={idx} className='text-2xl cursor-pointer' onClick={() => setCurrentIdx(idx)}>
                {currentIdx === idx ? (<RxDotFilled />) : (<RxDot />)}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-8 px-4">
          <div className='col-span-1 sm:col-span-2'>
            <div className='flex justify-between'>
              <div className='flex justify-center flex-col gap-2'>
                <h1 className="text-2xl sm:text-4xl">{projectData?.name}</h1>
                <p className='text-slate-600 dark:text-slate-300'>{projectData?.timeline}</p>
              </div>
              <Link href={projectData?.demoUrl} target='_blank'>
                <button
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 sm:px-6 py-3 text-center mr-2 my-6"
                >
                  Live Demo
                </button>
              </Link>
            </div>
            <p className="text-lg mt-5">{projectData?.description}</p>
          </div>
          <div className='col-span-1 dark:shadow-2xl shadow-lg rounded-md p-3 dark:bg-slate-900'>
            <h1 className="text-2xl p-2">Technology Used</h1>
            <hr className='mb-5' />
            <div>
              {projectData?.technologies?.map((t) => <span className='bg-slate-400 text-slate-50 px-3 py-1 m-1 rounded-3xl inline-block' key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Project