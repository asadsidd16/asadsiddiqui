import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const MyWork = () => {
  return (
    <Background color="#FFF">
      <Section yPadding="py-6">
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">neatMon</h3>
            <p className="text-sm text-gray-700">
              Built and maintained internal tools using Vue and TypeScript.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Rover ERP</h3>
            <p className="text-sm text-gray-700">
              Collaborated with design and product teams to revamp user flows.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">OroCarrot</h3>
            <p className="text-sm text-gray-700">
              Collaborated with design and product teams to revamp user flows.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Coastal Viticultural Consultants, Inc.
            </h3>
            <p className="text-sm text-gray-700">
              Collaborated with design and product teams to revamp user flows.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">DishOut</h3>
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
