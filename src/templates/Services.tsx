import Image from 'next/image';
import { Element } from 'react-scroll';

const services = [
  {
    title: 'Custom Frontend Development',
    description: 'Build fast, responsive websites using React, Vue, Angular',
    image: `/frameworks.png`,
  },
  {
    title: 'Landing Page Development',
    description: 'High-converting, mobile-optimized landing pages',
    image: `/landing.png`,
  },
  {
    title: 'UI Implementation from Designs',
    description: 'Turn Figma, XD, or Sketch designs into pixel-perfect code',
    image: `/design.png`,
  },
  {
    title: 'Analytics Integration',
    description: 'Google Analytics, event tracking on buttons, forms, pages',
    image: `/datatrend.png`,
  },
  {
    title: 'Basic CMS Integrations',
    description: 'Front-end hooks into WordPress headless, Contentful, etc.',
    image: `/cms.png`,
  },
  {
    title: 'Site Optimization',
    description: 'Speed improvements, SEO basics, accessibility best practices',
    image: `/speed.png`,
  },
];

const Services = () => (
  <section>
    <Element name="services">
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-md border-2 border-gray-300 bg-white p-4"
          >
            <h2 className="mb-2 text-lg font-semibold text-primary-500">
              {service.title}
            </h2>
            <p className="mb-4 text-gray-700">{service.description}</p>
            <div className="flex justify-center">
              <Image
                src={service.image}
                alt="service image"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </Element>
  </section>
);

export { Services };
