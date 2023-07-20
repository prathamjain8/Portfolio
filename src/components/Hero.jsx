import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative hero-bg w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FFE5B4]'/>
          <div className='w-1 sm:h-80 h-40 grey-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#FFE5B4]'>Pratham</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>
          Builds interactive and responsive user
          <br className='sm:block hidden'/> interfaces with HTML, CSS, JavaScript and ReactJs.
          </p>
        </div> 
      </div>
        <ComputersCanvas />
        <div className='absolute xs:bottom-10 w-full flex justify-center items-center'>
          <a href="#about">
            <div className=' w-[30px]  h-[50px] rounded-3xl border-4 border-[#FFE5B4] flex justify-center items-start p-1'>
              <motion.dev //used to crerate the framer motion
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              
              className="w-3 h-3 rounded-full bg-[#FFE5B4] mb-1"
              />   
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero