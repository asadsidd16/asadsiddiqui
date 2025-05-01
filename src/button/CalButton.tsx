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
      style={{
        background: 'black',
        color: '#FFF',
        paddingLeft: '1rem',
        paddingTop: '0.5rem',
        paddingRight: '1rem',
        paddingBottom: '0.5rem',
        borderRadius: 10,
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem', // spacing between text and icon
      }}
    >
      Book a call
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        style={{ height: '1rem', width: '1rem' }}
      >
        <path d="m4.922 6.752-1.067.534a7.52 7.52 0 0 0 4.859 4.86l.534-1.068a1 1 0 0 1 1.046-.542l2.858.44a1 1 0 0 1 .848.988V13a1 1 0 0 1-1 1h-2c-.709 0-1.4-.082-2.062-.238a9.012 9.012 0 0 1-6.7-6.7A9.024 9.024 0 0 1 2 5V3a1 1 0 0 1 1-1h1.036a1 1 0 0 1 .988.848l.44 2.858a1 1 0 0 1-.542 1.046Z" />
        <path d="M9.22 5.72a.75.75 0 0 0 1.06 1.06l2.22-2.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L9.22 5.72Z" />
      </svg>
    </button>
  );
}
