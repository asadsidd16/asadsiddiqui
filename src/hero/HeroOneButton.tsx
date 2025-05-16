import Image from 'next/image';
import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
  image: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="space-y-6 text-center">
    <h1
      className="whitespace-pre-line text-4xl font-bold leading-hero text-gray-900"
      data-aos="fade-down"
    >
      {props.title}
    </h1>

    <div
      className="flex justify-center"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <Image
        src={props.image}
        alt="hero picture"
        width={300}
        height={300}
        priority
      />
    </div>

    <div
      className="mb-9 mt-4 text-2xl text-gray-700"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {props.description}
    </div>

    <div className="flex justify-center">{props.button}</div>
  </header>
);

export { HeroOneButton };
