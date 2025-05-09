import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const mywork = [
  {
    company: 'neatMon',
    description:
      'Built and maintained internal tools using Vue and TypeScript.',
    technologies: ['React', 'TypeScript'],
    link: 'https://neatmon.com',
  },
  {
    company: 'Rover ERP',
    description:
      'Collaborated with design and product teams to revamp user flows.',
    technologies: ['TypeScript', 'Vue', 'Figma'],
    link: 'https://rovererp.com',
  },
  {
    company: 'OroCarrot',
    description:
      'Collaborated with design and product teams to revamp user flows.',
    technologies: ['Shopify'],
    link: 'https://orocarrot.com',
  },
  {
    company: 'Coastal Viticultural Consultants, Inc.',
    description:
      'Collaborated with design and product teams to revamp user flows.',
    technologies: ['PHP', 'Contentful'],
    link: 'https://coastalvit.com',
  },
  {
    company: 'DishOut',
    description:
      'Collaborated with design and product teams to revamp user flows.',
    technologies: ['React', 'JavaScript'],
    link: 'https://dishout.com',
  },
];

const MyWork = () => {
  return (
    <Background color="#FFF">
      <Section yPadding="py-6">
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
          {mywork.map((work) => (
            <div
              key={work.company}
              className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 text-sm font-semibold text-gray-900">
                {work.company}
              </h3>
              <p className="mb-4 text-sm text-gray-700">{work.description}</p>

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
          ))}
        </div>
      </Section>
    </Background>
  );
};

export { MyWork };
