import CalButton from '@/button/CalButton';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Need a unfair advantage?"
      subtitle="Let's make it happen"
      button={<CalButton />}
    />
  </Section>
);

export { Banner };
