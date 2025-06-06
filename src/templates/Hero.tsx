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
          title={<>{'Clean, Fast Websites That Get You More Customers'}</>}
          image={`${router.basePath}/collab.webp`}
          description="I design and build websites that turn visitors into paying customers."
          button={<CalButton />}
        />
      </Section>
    </Background>
  );
};

export { Hero };
