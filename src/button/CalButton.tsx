import 'animate.css';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="asadsiddiqui/30min"
      data-cal-config='{"layout":"month_view"}'
      className="animate__animated animate__fadeInUp hover:animate__heartBeat flex items-center gap-2 rounded-full bg-black px-4 py-2
             uppercase text-white transition duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-md "
    >
      Book a call
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path d="m4.922 6.752-1.067.534a7.52 7.52 0 0 0 4.859 4.86l.534-1.068a1 1 0 0 1 1.046-.542l2.858.44a1 1 0 0 1 .848.988V13a1 1 0 0 1-1 1h-2c-.709 0-1.4-.082-2.062-.238a9.012 9.012 0 0 1-6.7-6.7A9.024 9.024 0 0 1 2 5V3a1 1 0 0 1 1-1h1.036a1 1 0 0 1 .988.848l.44 2.858a1 1 0 0 1-.542 1.046Z" />
        <path d="M9.22 5.72a.75.75 0 0 0 1.06 1.06l2.22-2.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L9.22 5.72Z" />
      </svg>
    </button>
  );
}
