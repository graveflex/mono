import { useGetCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

export function useCookieValue(cookieName: string, pollInterval = 100) {
  const getCookieValue = useGetCookie();
  const [cookieValue, setCookieValue] = useState(() =>
    getCookieValue(cookieName)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newValue = getCookieValue(cookieName);
      // Update state only if the cookie value has changed
      if (newValue !== cookieValue) {
        setCookieValue(newValue);
      }
    }, pollInterval);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [cookieName, pollInterval, cookieValue, getCookieValue]);

  return cookieValue;
}
