import '../styles/global.css';
import 'animate.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // only animate once
      easing: 'ease-out-cubic',
    });
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
