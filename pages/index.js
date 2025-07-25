// next image
import Image from 'next/image'
import Head from 'next/head'

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../variants'

const Home = () => {
  return (
    <>
      <Head>
        <title>Inicio - Mauro Portfolio</title>
        <meta name="description" content="Bienvenido al portfolio de Mauro. Transformando ideas en realidad digital." />
      </Head>
      <div className='bg-primary/60 h-full'>
      {/*  text  */}
        <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/*  title  */}
            <motion.h1
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h1'>
              Transforming Ideas <br/> Into
              <span className='text-accent'> Digital Reality</span>
            </motion.h1>
          {/*  subtitle  */}
            <motion.p
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>This is more than a motto for me; It is the essence of my passion and dedication. Always someone presents an idea to me, I look beyond the simple concept: I envision its digital potential and how it could come to life in the vast digital world. I am passionate about taking those seeds of creative thinking and cultivating them into innovative and functional digital solutions.
            </motion.p>
          {/*  btn  */}
            <motion.div
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='hidden xl:flex'
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
      {/*  image  */}
        <div className='w-full h-full absolute right-0 bottom-0'>
          {/*  bg img */}
          <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
          {/*  particles  */}
          <ParticlesContainer />
          {/*  avatar img  */}
          <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              transition={{duration: 1, ease: 'easeInOut'}}
              className='w-full h-full max-w-[737px] max-h-[780px] absolute bottom-0
          lg:bottom-0 lg:right-[8%]'
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
