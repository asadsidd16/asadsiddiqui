import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-primary-100 p-2 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-center" style={{ fontSize: 14 }}>
        <div className="text-primary-500">{props.subtitle}</div>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
        {props.button}
      </div>
    </div>
  </div>
);

export { CTABanner };
