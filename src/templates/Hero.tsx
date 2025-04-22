import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Building Fast, Beautiful Interfaces for Modern Businesses\n'}
            {/* <span className="text-primary-500">React developers</span> */}
          </>
        }
        description="Bring Your Designs to Life with Expert Front-End Code"
        button={
          <Link href="/">
            <Button xl>Get Started</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
