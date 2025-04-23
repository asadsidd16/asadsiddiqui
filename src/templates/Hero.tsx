import Link from 'next/link';

import CalButton from '@/button/CalButton';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
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

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Building Fast, Beautiful Interfaces for Modern Businesses\n'}
            <span className="text-primary-500">Website Development</span>
          </>
        }
        description="Bring Your Designs to Life with Expert Front-End Code"
        button={<CalButton />}
      />
    </Section>
  </Background>
);

export { Hero };
