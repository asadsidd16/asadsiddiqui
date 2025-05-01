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
    <>
      <div
        className={`mx-auto max-w-screen-lg px-3 ${
          props.yPadding ? props.yPadding : 'py-16'
        }`}
      >
        {(props.title || props.description) && (
          <div
            className="mb-12 p-5 text-center"
            style={{ background: '#6c63ff', borderRadius: 20 }}
          >
            {props.title && (
              <h2 className="text-4xl font-bold text-gray-100">
                {props.title}
              </h2>
            )}
            {props.description && (
              <div className="mt-4 text-xl text-gray-100 md:px-20">
                {props.description}
              </div>
            )}
            {props.secondDescription && (
              <div className="mt-4 text-xl text-gray-100 md:px-20">
                {props.secondDescription}
              </div>
            )}
            {props.thirdDescription && (
              <div className="mt-4 text-xl text-gray-100 md:px-20">
                {props.thirdDescription}
              </div>
            )}
            {props.image && (
              <div className="my-6 flex justify-center">
                <div className="relative size-32 overflow-hidden rounded-full shadow-lg md:size-48">
                  {props.image}
                  <Image
                    src={props.image}
                    alt="Asad"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {props.children}
      </div>
    </>
  );
};

export { Section };
