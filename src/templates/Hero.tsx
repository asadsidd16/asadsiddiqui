import Link from 'next/link';
import { useRouter } from 'next/router';

import CalButton from '@/button/CalButton';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const router = useRouter();
  return (
    <Background color="#FFF">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Testimonial</Link>
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
        />{' '}
        <div className="flex justify-center"></div>
      </Section>
    </Background>
  );
};

export { Hero };
