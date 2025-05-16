import { useRouter } from 'next/router';

import CalButton from '@/button/CalButton';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => {
  const router = useRouter();

  return (
    <Background color="#F5F5F5">
      <Section yPadding="pt-20 pb-12">
        <HeroOneButton
          title={
            <>{'Building Fast, Beautiful Interfaces for Modern Businesses'}</>
          }
          image={`${router.basePath}/collab.webp`}
          description="Bring Your Designs to Life with Expert Front-End Code"
          button={<CalButton />}
        />
      </Section>
    </Background>
  );
};

export { Hero };
