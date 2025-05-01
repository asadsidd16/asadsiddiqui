import { useRouter } from 'next/router';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => {
  const router = useRouter();

  return (
    <Section
      title="Hey, I’m Asad 👋"
      description="I’m a front-end engineer who enjoys building smooth, responsive web experiences. This site is a single-page app (SPA) built with React and Next.js—so everything loads fast and feels more like an app than a traditional website.
    "
      secondDescription="
    I care a lot about clean UI, accessibility, and making things work well across devices. Lately, I’ve been playing around with design systems and AI-driven features."
      thirdDescription="Thanks for checking out my work!"
      image={`${router.basePath}/Asad.jpeg`}
    >
      <VerticalFeatureRow
        title="I'm proud to have collaborated with some awesome companies:"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
    </Section>
  );
};

export { VerticalFeatures };
