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
            <>
              <div
                key={work.company}
                className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:shadow-xl"
              >
                <div className="relative mb-4 h-48 w-full">
                  <Image
                    src={work.image}
                    alt="website image"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>

                <h3 className="mb-2 text-sm font-semibold text-gray-900">
                  {work.company}
                </h3>
                {/* <p className="mb-4 text-sm text-gray-700">{work.description}</p> */}

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

                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <button className="w-full rounded-lg bg-black px-6 py-3 text-sm uppercase text-white transition duration-300 hover:bg-gray-800">
                    Visit
                  </button>
                </a>
              </div>
            </>
          ))}
        </div>
      </Element>
    </section>
  );
};

export { MyWork };
