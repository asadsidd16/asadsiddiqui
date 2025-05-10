import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

import CalButton from '@/button/CalButton';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ title }: any) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={0}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 hover:text-p1 max-lg:h5 cursor-pointer uppercase transition-colors duration-500 max-lg:my-4"
    >
      {title}
    </LinkScroll>
  );

  return (
    <Background color="#F5F5F5">
      <Section yPadding="py-6">
        {/* Remove */}
        {isOpen ? '' : ''}
        <NavbarTwoColumns
          logo={
            <Image
              src={`${router.basePath}/lion.png`}
              alt="service image"
              width={100}
              height={100}
              sizes="5vw"
              className="h-auto w-full"
            />
          }
        >
          <li>
            <NavLink title="services" />
          </li>
          <li>
            <NavLink title="about" />
          </li>
          <li>
            <NavLink title="mywork" />
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-10 pb-12">
        <HeroOneButton
          title={
            <>{'Building Fast, Beautiful Interfaces for Modern Businesses'}</>
          }
          image={`${router.basePath}/collab.png`}
          description="Bring Your Designs to Life with Expert Front-End Code"
          button={<CalButton />}
        />
      </Section>
    </Background>
  );
};

export { Hero };
