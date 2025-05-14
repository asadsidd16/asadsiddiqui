import Image from 'next/image';
import React from 'react';
import { Element } from 'react-scroll';

const mywork = [
  {
    company: 'neatMon',
    image: '/neatMonHome.png',
    description:
      'Built and maintained internal tools using Vue and TypeScript.',
    technologies: ['React', 'TypeScript'],
    link: 'https://neatmon.com',
  },
  {
    company: 'Rover ERP',
    image: '/roverHome.png',
    description:
      'Collaborated with design and product teams to revamp user flows.',
    technologies: ['TypeScript', 'Vue', 'Figma'],
    link: 'https://rovererp.com',
  },
  {
    company: 'OroCarrot',
    image: '/orocarrotHome.png',
    description:
      'Collaborated with design and product teams to revamp user flows.',
    technologies: ['Shopify'],
    link: 'https://orocarrottanning.com/',
  },
  {
    company: 'Coastal Viticultural Consultants, Inc.',
    image: '/cvcHome.png',
    description:
      'Collaborated with design and product teams to revamp user flows.',
    technologies: ['PHP', 'Contentful'],
    link: 'https://coastalvit.com',
  },
  {
    company: 'DishOut',
    image: '/dishOutHome.png',
    description:
      'Collaborated with design and product teams to revamp user flows.',
    technologies: ['React', 'JavaScript'],
    link: 'https://mydishoutapp.com/',
  },
];

const MyWork = () => {
  return (
    <section>
      <Element name="mywork">
        <div className="flex flex-col items-center gap-2 py-10 text-center">
          <h3 className="text-2xl font-bold text-gray-900">My Recent Work</h3>
          <p className="max-w-xl text-gray-600">
            A selection of projects I have contributed to.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
          {mywork.map((work) => (
            <div
              key={work.company}
              className="group relative rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:shadow-xl"
            >
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={work.image}
                  alt="website image"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Button Overlay */}
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100">
                    Visit Site
                  </span>
                </a>
              </div>

              <h3 className="mb-2 text-sm font-semibold text-gray-900">
                {work.company}
              </h3>

              <div className="mb-4 flex flex-wrap gap-2">
                {work.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Element>
    </section>
  );
};

export { MyWork };
