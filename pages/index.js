import Head from 'next/head'
import Link from 'next/link'
import { BsFillMoonStarsFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { MdOutlineWork } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { FaReact, FaHome } from 'react-icons/fa';
import { BsPeopleFill, BsFillChatDotsFill } from 'react-icons/bs';
import { FiExternalLink, FiMoreVertical } from 'react-icons/fi';
import welcome from '../public/welcome.gif';
import welcomeBlack from '../public/welcome-black.gif';
import Image from 'next/legacy/image';
import GadgetsStore from '../public/projects/Gadgets-Store.png';
import OurStyle from '../public/projects/Our-Style.png';
import ColorFactory from '../public/projects/Color-Factory.png';
import Dashkart from '../public/projects/Dashkart.png';
import Blog1 from '../public/Blog1.png';
import Blog2 from '../public/Blog2.png';
import Blog3 from '../public/Blog3.png';
import Recommendation1 from '../public/Recommendation-1.png';
import Recommendation2 from '../public/Recommendation-2.png';
import footer from '../public/footer.png'
import { useCallback, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HtmlSvg from '../components/HtmlSvg';
import CSSSvg from '../components/CSSSvg';
import JSSvg from '../components/JSSvg';
import ReactSvg from '../components/ReactSvg';
import NextJsSvg from '../components/NextJsSvg';
import GitSvg from '../components/GitSvg';
import ReduxSvg from '../components/ReduxSvg';
import NpmSvg from '../components/NpmSvg';
import TruscholarSvg from '../public/TruscholarLogo.svg';
import TruscholarLogoDark from '../public/TruscholarLogoDark.svg';
import NodeJsSvg from '../components/NodeJsSvg';
import ExpressJsSvg from '../components/ExpressJsSvg';
import MongoDbSvg from '../components/MongoDbSvg';
import FigmaSvg from '../components/FigmaSvg';
import { projects } from '@/lib/projects';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showExtraMenu, setShowExtraMenu] = useState(false)

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleScroll = useCallback(() => {
    setShowExtraMenu(false);
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Shivam Damre | Frontend Developer | React Developer</title>
        <meta name="description" content="Shivam Damre is a frontend developer. Check out his portfolio to see his latest work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-slate-100 text-gray-800 px-10 md:px-20 lg:px-40 dark:bg-gray-800 dark:text-gray-50'>
        <section className='min-h-screen'>
          <div className='flex justify-center'>
            {visible && (
              <nav className='mb-12 flex justify-center items-center fixed w-[300px] md:w-[600px] mt-3 h-[50px] md:h-[70px] rounded-full dark:bg-gray-700 bg-slate-100 z-50 shadow-md'>
                <ul className='flex items-center justify-center lg:gap-10 gap-6 px-3'>
                  <li>
                    <Link href='#projects' className='flex flex-col items-center'>
                      <FaReact className='cursor-pointer text-lg lg:text-xl' />
                      <span className='hidden sm:inline-block'>Projects</span>
                    </Link>
                  </li>
                  <li>
                    <Link href='#experience' className='flex flex-col items-center'>
                      <MdOutlineWork className='cursor-pointer text-lg lg:text-xl' />
                      <span className='hidden sm:inline-block'>Experience</span>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <button className='bg-gradient-to-r from-blue-500 to-blue-300 text-gray-900 text-xl px-2 py-1 md:p-3 rounded-md shadow-sm'>
                        <FaHome />
                      </button>
                    </Link>
                  </li>
                  <li className='flex flex-col items-center'>
                    <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-lg lg:text-xl' />
                    <span className='hidden sm:inline-block'>Theme</span>
                  </li>
                  <li className='flex flex-col items-center cursor-pointer' onClick={() => setShowExtraMenu(!showExtraMenu)} >
                    <FiMoreVertical className='cursor-pointer text-lg lg:text-xl' />
                    <span className='hidden sm:inline-block'>More</span>
                    {showExtraMenu && (
                      <div className='w-[180px] h-[100px] rounded-md shadow-md absolute mt-10 sm:mt-16 dark:bg-gray-900 bg-slate-100 flex flex-col ml-[-100px]'>
                        <Link href='#skills' className='flex items-center px-3 py-1'>
                          <AiFillHtml5 className='cursor-pointer text-lg lg:text-xl mr-2' />
                          <span>Skills</span>
                        </Link>
                        <Link href='#references' className='flex items-center px-3 py-1'>
                          <BsPeopleFill className='cursor-pointer text-lg lg:text-xl mr-2' />
                          <span>References</span>
                        </Link>
                        <Link href='#blogs' className='flex items-center px-3 py-1'>
                          <BsFillChatDotsFill className='cursor-pointer text-lg lg:text-xl mr-2' />
                          <span>Blogs</span>
                        </Link>
                      </div>
                    )}
                  </li>
                </ul>
              </nav>
            )}
          </div>
          <div className='flex flex-wrap pt-[25%] lg:pt-[15%]' data-aos='fade-up' data-aos-delay='300' data-aos-duration='900'>
            <div className=''>
              <div className='text-center p-10'>
                <h2 className='text-5xl py-2 font-medium md:text-6xl'><span className='dark:text-yellow-200'>Shivam</span> Damre</h2>
                <h3 className='text-2xl py-2 md:text-3xl'>Frontend Developer</h3>
                <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-50'>Crafting captivating user experiences through innovative front-end solutions</p>
                <Link href='mailto:shivamdamre913@gmail.com'><button className='btn-connect'>Let&apos;s Connect</button></Link>
              </div>
              <div className='text-4xl flex justify-center gap-10 py-3 text-gray-500'>
                <Link href="https://www.linkedin.com/in/shivam-damre-b84538170/" target="_blank">
                  <AiFillLinkedin />
                </Link>
                <Link href="https://github.com/shrinker03" target="_blank">
                  <AiFillGithub />
                </Link>
              </div>
            </div>
            <div className='w-80 h-80 overflow-hidden md:h-96 md:w-96 mx-auto'>
              {darkMode ? (
                <Image src={welcomeBlack} style={{ objectFit: 'cover' }} alt='shivam damre portfolio welcome image' />
              ) : (
                <Image src={welcome} style={{ objectFit: 'cover' }} alt='shivam damre portfolio welcome image' />
              )}
            </div>
          </div>
        </section>
        <section className='mb-10 sm:mb-20' id='skills'>
          <div>
            <h3 className='text-3xl py-1 pb-5'>Skills</h3>
          </div>
          <div className='flex flex-wrap gap-12 max-w-[800px] mx-auto justify-center'>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-200 rounded-full p-3 shadow-lg'>
              <HtmlSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">HTML</span>
            </div>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-200 rounded-full p-3 shadow-lg'>
              <CSSSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">CSS</span>
            </div>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-200 rounded-full p-3 shadow-lg'>
              <JSSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Javascript</span>
            </div>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-200 rounded-full p-3 shadow-lg'>
              <ReactSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">ReactJS</span>
            </div>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-200 rounded-full p-3 shadow-lg'>
              <ReduxSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">ReduxJS</span>
            </div>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-300 rounded-full p-3 shadow-lg'>
              <NextJsSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">NextJS</span>
            </div>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-200 rounded-full p-3 shadow-lg'>
              <GitSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">GIT</span>
            </div>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-200 rounded-full p-3 shadow-lg'>
              <NpmSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">NPM</span>
            </div>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-200 rounded-full p-3 shadow-lg'>
              <NodeJsSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">NodeJS</span>
            </div>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-200 rounded-full p-3 shadow-lg'>
              <ExpressJsSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">ExpressJS</span>
            </div>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-200 rounded-full p-3 shadow-lg'>
              <MongoDbSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">MongoDB</span>
            </div>
            <div className='flex group relative justify-center bg-slate-100 dark:bg-gray-200 rounded-full p-3 shadow-lg'>
              <FigmaSvg className="w-[50px] h-[50px]" />
              <span className="absolute top-20 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Figma</span>
            </div>
          </div>
        </section>
        <section className='mb-5 sm:mb-14' id='projects'>
          <div>
            <h3 className='text-3xl py-1'>Projects</h3>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:gap-10 gap-8 py-10'>
            <div className='shadow-xl'>
              <Link href={{ pathname: '/projects/Gadgets-Store', query: { theme: darkMode ? 'dark' : 'light' } }}>
                <Image src={GadgetsStore} alt="shivam damre project1: Gadgets Store" className='rounded-lg object-contain' layout='responsive' />
              </Link>
            </div>
            <div className='shadow-xl'>
              <Link href={{ pathname: '/projects/DashKart', query: { theme: darkMode ? 'dark' : 'light' } }}>
                <Image src={Dashkart} alt="shivam damre project2: DashKart" className='rounded-lg object-contain' layout='responsive' />
              </Link>
            </div>
            <div className='shadow-xl'>
              <Link href={{ pathname: '/projects/Our-Style', query: { theme: darkMode ? 'dark' : 'light' } }} >
                <Image src={OurStyle} alt="shivam damre project3: Our-style" className='rounded-lg object-contain' layout='responsive' />
              </Link>
            </div>
            <div className='shadow-xl'>
              <Link href={{ pathname: '/projects/Color-Factory', query: { theme: darkMode ? 'dark' : 'light' } }}>
                <Image src={ColorFactory} alt="shivam damre project4: Color-Factory" className='rounded-lg object-contain' layout='responsive' />
              </Link>
            </div>
          </div>
          <div className='flex justify-center'>
            <Link href="https://github.com/shrinker03?tab=repositories" target='_blank'>
              <button className='bg-blue-500 md:p-3 p-2 rounded-md text-white'>See More</button>
            </Link>
          </div>
        </section>
        <section id='experience'>
          <div>
            <h3 className='text-3xl py-1'>Experience</h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-5 md:my-10 dark:bg-gray-700'>
              <Image src={darkMode ? TruscholarSvg : TruscholarLogoDark} alt='shivam damre Exp1: TruScholar' width={150} height={60} />
              <div className='my-auto py-5'>
                <span className='font-semibold text-lg'>TruScholar
                  <Link href='https://www.truscholar.io/' target='_blank'>
                    <FiExternalLink className='inline-block ml-1 mb-1 cursor-pointer' />
                  </Link>
                </span>
                <div className='text-gray-400'>(Blockchain based certificate issuance platform)</div>
                <div className='mt-2'>Full Stack Engineer</div>
                <div>(MERN)</div>
                <div className='text-gray-400'>06/2022 - Present</div>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-5 md:my-10 dark:bg-gray-700'>
              <Image src={darkMode ? TruscholarSvg : TruscholarLogoDark} alt='shivam damre Exp2: TruScholar' width={150} height={60} />
              <div className='my-auto py-5'>
                <span className='font-semibold text-lg'>TruScholar
                  <Link href='https://www.truscholar.io/' target='_blank'>
                    <FiExternalLink className='inline-block ml-1 mb-1 cursor-pointer' />
                  </Link>
                </span>
                <div className='text-gray-400'>(Blockchain based certificate issuance platform)</div>
                <div className='mt-2'>Full Stack Engineer - Intern</div>
                <div>(MERN)</div>
                <div className='text-gray-400'>11/2021 - 05/2022</div>
              </div>
            </div>
          </div>
        </section>
        <section id='references'>
          <div>
            <h3 className='text-3xl py-1'>Reference</h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10'>
            <div className='text-center shadow-lg rounded-xl my-5 md:my-10 dark:bg-gray-700'>
              <Image src={Recommendation1} alt='shivam damre Ref1: Akshay Saini' />
              <div className='my-auto py-2'>
                <span className='font-semibold text-lg'>Akshay Saini
                  <Link href='https://www.linkedin.com/in/akshaymarch7/' target='_blank'>
                    <FiExternalLink className='inline-block ml-1 mb-1 cursor-pointer' />
                  </Link>
                </span>
                <div className='text-gray-400'>(Founder of NamasteDev)</div>
                <div className='text-xs px-5 py-2'>Got recommended on linkedin for being one of the top performer of Namaste React Bootcamp</div>
              </div>
            </div>
            <div className='text-center shadow-lg rounded-xl my-5 md:my-10 dark:bg-gray-700'>
              <Image src={Recommendation2} alt='shivam damre Ref2: Priya Jangid' />
              <div className='my-auto py-2 mt-8'>
                <span className='font-semibold text-lg'>Priya Jangid
                  <Link href='https://www.linkedin.com/in/priya-jangid-data-analyst-data-scientist-machine-learning-artificial-intelligence-python/' target='_blank'>
                    <FiExternalLink className='inline-block ml-1 mb-1 cursor-pointer' />
                  </Link>
                </span>
                <div className='text-gray-400'>(Analyst @Amazon)</div>
                <div className='text-xs px-5 py-2'>Priya was my colleague @TruScholar now currently she is working at Amazon as an Analyst</div>
              </div>
            </div>
          </div>
        </section>
        <section id='blogs'>
          <h3 className='text-3xl py-1'>Blogs</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3'>
            <div className='text-center shadow-lg rounded-xl my-5 md:my-10 dark:bg-gray-700'>
              <Link href='https://shivamdamre913.substack.com/p/a-comprehensive-guide-to-front-end' target='_blank'>
                <Image src={Blog1} alt='shivam damre Blog1: substack' />
              </Link>
              <div className='my-auto py-2'>
                <span className='font-semibold text-lg'>A comprehensive guide to Front-end development tools and techniques
                  <Link href='https://shivamdamre913.substack.com/p/a-comprehensive-guide-to-front-end' target='_blank'>
                    <FiExternalLink className='inline-block ml-1 mb-1 cursor-pointer' />
                  </Link>
                </span>
                <div className='text-gray-400'>(April-2023)</div>
              </div>
            </div>
            <div className='text-center shadow-lg rounded-xl my-5 md:my-10 dark:bg-gray-700'>
              <Link href='https://shivamdamre913.substack.com/p/all-about-jsx' target='_blank'>
                <Image src={Blog2} alt='shivam damre Blog2: substack' />
              </Link>
              <div className='my-auto py-2'>
                <span className='font-semibold text-lg'>All about JSX...
                  <Link href='https://shivamdamre913.substack.com/p/all-about-jsx' target='_blank'>
                    <FiExternalLink className='inline-block ml-1 mb-1 cursor-pointer' />
                  </Link>
                </span>
                <div className='text-gray-400'>(April-2023)</div>
              </div>
            </div>
            <div className='text-center shadow-lg rounded-xl my-5 md:my-10 dark:bg-gray-700'>
              <Link href='https://shivamdamre913.substack.com/p/i-just-found-out-free-resource-for' target='_blank'>
                <Image src={Blog3} alt='shivam damre Blog3: substack' />
              </Link>
              <div className='my-auto py-2'>
                <span className='font-semibold text-lg'>I just found out...
                  <Link href='https://shivamdamre913.substack.com/p/i-just-found-out-free-resource-for' target='_blank'>
                    <FiExternalLink className='inline-block ml-1 mb-1 cursor-pointer' />
                  </Link>
                </span>
                <div className='text-gray-400'>(Feb-2022)</div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <Link href="https://shivamdamre913.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile" target='_blank'>
              <button className='bg-blue-500 md:p-3 p-2 rounded-md text-white'>See More</button>
            </Link>
          </div>
        </section>
      </main>
      <footer className='flex justify-center flex-col items-center bg-slate-100 text-gray-800 pt-16 lg:px-40 dark:bg-gray-800 dark:text-gray-50'>
        <div>Made with</div>
        <div>
          <BsFillSuitHeartFill className='text-red-500 w-5 h-5' />
        </div>
        <div>in <span className='dark:text-yellow-200 font-medium'>India</span></div>
        <div className='w-[100%] sm:w-[600px]'>
          <Image src={footer} alt='shivam damre portfolio footer' />
        </div>
      </footer>
    </div>
  )
}
