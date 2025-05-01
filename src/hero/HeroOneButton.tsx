import Image from 'next/image';
import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
  image: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="flex justify-center">
      <Image src={props.image} alt="Asad" width={300} height={300} />
    </div>

    <div className="mb-9 mt-4 text-2xl">{props.description}</div>
    <div className="flex justify-center">{props.button}</div>
  </header>
);

export { HeroOneButton };
