import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { About } from './About';
import { Banner } from './Banner';
import { Collab } from './Collab';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { MyWork } from './MyWork';
import { Services } from './Services';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <About />
    <Services />
    <Collab />
    <MyWork />

    <Banner />
    <Footer />
  </div>
);

export { Base };
