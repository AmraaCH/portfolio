import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { isMobile } from '../../../utils/isMobile';
import myImg from '../../../assets/images/my_img.webp';
import SocialLinkList from '../../../components/main/SocialList';
import ScrollArrow from '../../../components/main/ScrollArrow';
import InfoWrap from '../../../components/main/InfoWrap';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '../../../utils/constant/constant';
import TextWrap from '../../../components/main/TextWrap';
import { MainComponent, Img } from './Main.styled';
import MainBackground from '../../../components/atoms/background/MainBackground';

function Main() {
  const { pathname } = useLocation();
  const vhRef = useRef(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const isPosition = useSelector((state: RootState) => state.position.isPosition);
  const ismobile = isMobile ? 'true' : 'false';


  useEffect(() => {
    if (isMobile) {
      vhRef.current = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vhRef.current}px`);
    }
  }, []);

 
  useEffect(() => {
    const mainSection = mainRef.current?.getBoundingClientRect();
    if (mainSection?.top === 0) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        if (pathname === '/') {
          document.body.style.overflow = ''
        }
      }, 3000)
    }
  }, [])

  const goToTarget = () => {
    const aboutme = document.querySelector('#aboutme');
    aboutme?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <motion.div className={`top-0 ${isPosition}`}>
      <MainComponent ref={mainRef} ismobile={ismobile}>
        <MainBackground
          initial={{ ...OPACITY_0, scale: 1.25 }}
          animate={{ ...OPACITY_1, scale: 1 }}
          transition={{ ...ANI_TRANSITION, delay: 3 }}
        />

        <ScrollArrow delay={3.9} />

        <SocialLinkList delay={3} width='w-full' />

        <TextWrap />

        <Img
          onClick={goToTarget}
          initial={OPACITY_0}
          animate={OPACITY_1}
          transition={{ ...ANI_TRANSITION, delay: 3 }}
          src={myImg}
          ismobile={ismobile}
          alt='Portrait Photo'
          loading='lazy'
          className='w-[800px] md:w-[800px] h-auto rounded-full cursor-pointer'
        />

        <InfoWrap delay={3} />

      </MainComponent>
    </motion.div>
  )
}

export default Main;
