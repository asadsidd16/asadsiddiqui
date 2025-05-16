import Image from 'next/image';
import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  secondDescription?: string;
  thirdDescription?: string;
  yPadding?: string;
  children: ReactNode;
  image?: string;
};

const Section = (props: ISectionProps) => {
  return (
    <div
      className={`mx-auto max-w-screen-lg px-3 ${
        props.yPadding ? props.yPadding : 'py-16'
      }`}
    >
      {(props.title || props.description) && (
        <div
          className="mb-12 p-12 text-center"
          style={{ background: '#6c63ff', borderRadius: 20 }}
          data-aos="fade-up"
        >
          {props.title && (
            <h2
              className="text-4xl font-bold text-gray-100"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              {props.title}
            </h2>
          )}
          {props.description && (
            <div
              className="mt-4 text-xl text-gray-100 md:px-20"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {props.description}
            </div>
          )}
          {props.secondDescription && (
            <div
              className="mt-4 text-xl text-gray-100 md:px-20"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {props.secondDescription}
            </div>
          )}
          {props.thirdDescription && (
            <div
              className="mt-4 text-xl text-gray-100 md:px-20"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {props.thirdDescription}
            </div>
          )}
          {props.image && (
            <div
              className="my-6 flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="relative size-32 overflow-hidden rounded-full shadow-lg md:size-48">
                <Image
                  src={props.image}
                  alt="Asad image"
                  width={1200}
                  height={600}
                />
              </div>
            </div>
          )}
        </div>
      )}

      <div data-aos="fade-up" data-aos-delay="200">
        {props.children}
      </div>
    </div>
  );
};

export { Section };
