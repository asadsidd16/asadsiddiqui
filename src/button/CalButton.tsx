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
      }}
    >
      Book a call
    </button>
  );
}
