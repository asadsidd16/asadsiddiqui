import CalButton from '@/button/CalButton';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title=""
      subtitle="Interested in working together? Let's set up a time to chat. I'll buy the coffee."
      button={<CalButton />}
    />
  </Section>
);

export { Banner };
