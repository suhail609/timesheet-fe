import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    // Ensure the scroll happens after the component has mounted
    if (router.isReady) {
      window.scrollTo(0, 0);
    }
  }, [router.pathname, router.isReady]);
};
