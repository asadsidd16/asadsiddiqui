import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const MyWork = () => {
  return (
    <Background color="#FFF">
      <Section yPadding="py-6">
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Front-End Engineer</h3>
            <p className="mb-1 text-gray-600">Zumasys • 2023 – 2024</p>
            <p className="text-sm text-gray-700">
              Built and maintained internal tools using Vue and TypeScript.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">UI/UX Developer</h3>
            <p className="mb-1 text-gray-600">Naked Labs • 2022 – 2023</p>
            <p className="text-sm text-gray-700">
              Collaborated with design and product teams to revamp user flows.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">UI/UX Developer</h3>
            <p className="mb-1 text-gray-600">Naked Labs • 2022 – 2023</p>
            <p className="text-sm text-gray-700">
              Collaborated with design and product teams to revamp user flows.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">UI/UX Developer</h3>
            <p className="mb-1 text-gray-600">Naked Labs • 2022 – 2023</p>
            <p className="text-sm text-gray-700">
              Collaborated with design and product teams to revamp user flows.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">UI/UX Developer</h3>
            <p className="mb-1 text-gray-600">Naked Labs • 2022 – 2023</p>
            <p className="text-sm text-gray-700">
              Collaborated with design and product teams to revamp user flows.
            </p>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { MyWork };
