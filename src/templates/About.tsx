import Image from 'next/image';
import { useRouter } from 'next/router';
import { Element } from 'react-scroll';

const About = () => {
  const router = useRouter();

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
            I design and build websites that solve real business problems.
          </div>

          <div
            className="mt-4 text-xl text-gray-100 md:px-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            From fast, responsive layouts to clear user flows, I focus on
            performance, clarity, and creating a digital experience that drives
            results.
          </div>

          <div
            className="my-6 flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="relative size-32 overflow-hidden rounded-full shadow-lg md:size-48">
              <Image
                src={`${router.basePath}/Asad.jpeg`}
                alt="Asad"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export { About };
