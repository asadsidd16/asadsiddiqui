import { Section } from '@/layout/Section';

const services = [
  {
    title: 'Custom Frontend Development',
    description: 'Build fast, responsive websites using React, Vue, Angular',
  },
  {
    title: 'Landing Page Development',
    description: 'High-converting, mobile-optimized landing pages',
  },
  {
    title: 'UI Implementation from Designs',
    description: 'Turn Figma, XD, or Sketch designs into pixel-perfect code',
  },
  {
    title: 'Analytics Integration',
    description: 'Google Analytics, event tracking on buttons, forms, pages',
  },
  {
    title: 'Basic CMS Integrations',
    description: 'Front-end hooks into WordPress headless, Contentful, etc.',
  },
  {
    title: 'Site Optimization',
    description: 'Speed improvements, SEO basics, accessibility best practices',
  },
];

const Services = () => (
  <Section
    title="HOW CAN I HELP YOU?"
    description="Frustrated with websites that don't reflect your brand or drive growth? I craft premium web experiences that captivate and help you focus on growing your business."
  >
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="flex h-56 flex-col rounded-md border-2 border-gray-300 bg-white p-4"
        >
          <h2 className="text-lg font-semibold text-primary-500">
            ({idx + 1}) {service.title}
          </h2>
          <p className="text-gray-700">{service.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export { Services };
