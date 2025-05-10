import Image from 'next/image';
import React from 'react';

const Collab = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-2 py-10 text-center">
        <h3 className="text-2xl font-bold text-gray-900">
          I am proud to have collaborated with some great companies:
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-6 px-6 pb-10 sm:grid-cols-2 md:grid-cols-4">
        {[
          { src: '/naked.png', alt: 'Naked' },
          { src: '/neat.png', alt: 'Neat' },
          { src: '/Rover.png', alt: 'Rover' },
          { src: '/dishout.png', alt: 'DishOut' },
        ].map((logo, idx) => (
          <div key={idx} className="relative h-12 w-full sm:h-14">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 25vw, 50vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { Collab };
