import Image from 'next/image';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <section>
      <Element name="about">
        <div
          className="mb-12 p-12 text-center"
          style={{ background: '#6c63ff', borderRadius: 20 }}
          data-aos="fade-up"
        >
          <h2
            className="text-4xl font-bold text-gray-100"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Hey, I’m Asad 👋
          </h2>

          <div
            className="mt-4 text-xl text-gray-100 md:px-20"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I help businesses grow by building websites that convert.
          </div>

          <div
            className="mt-4 text-xl text-gray-100 md:px-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Whether it is a high-converting landing page or a full website
            overhaul, I focus on performance, clarity, and user experience to
            help you win more customers and increase sales.
          </div>

          <div
            className="my-6 flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="relative size-32 overflow-hidden rounded-full shadow-lg md:size-48">
              <Image
                src="/Asad.webp"
                width={300}
                height={300}
                alt="A pitcure of asad"
                // priority
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export { About };
