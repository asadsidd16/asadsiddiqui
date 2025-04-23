import { Section } from '@/layout/Section';

const Services = () => (
  <Section
    title="HOW CAN I HELP YOU?"
    description="Frustrated with websites that don't reflect your brand or drive growth? I craft premium web experience that captivate and help you focus on growing your business."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <h2 className="text-primary-500">
              Service Details Custom Frontend Development
            </h2>
            <p>Build fast, responsive websites using React, Vue, Angular</p>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <h2 className="text-primary-500">Landing Page Development</h2>
            <p>High-converting, mobile-optimized landing pages</p>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <h2 className="text-primary-500">UI Implementation from Designs</h2>
            <p>Turn Figma, XD, or Sketch designs into pixel-perfect code</p>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <h2 className="text-primary-500">Analytics Integration</h2>
            <p>Google Analytics, event tracking on buttons, forms, pages</p>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <h2 className="text-primary-500">Basic CMS Integrations</h2>
            <p> Front-end hooks into WordPress headless, Contentful, etc.</p>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <h2 className="text-primary-500">Site Optimization</h2>
            <p>Speed improvements, SEO basics, accessibility best practices</p>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Services };
