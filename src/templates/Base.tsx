import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { About } from './About';
import { Banner } from './Banner';
import { Collab } from './Collab';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { MyWork } from './MyWork';
import { Services } from './Services';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <Hero />
    <About />
    <Services />
    <MyWork />
    <Collab />
    <Banner />
    <Footer />
  </div>
);

export { Base };
