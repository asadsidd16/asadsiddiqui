import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { MyWork } from './MyWork';
import { Services } from './Services';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Services />
    <VerticalFeatures />
    <MyWork />
    <Banner />
    <Footer />
  </div>
);

export { Base };
