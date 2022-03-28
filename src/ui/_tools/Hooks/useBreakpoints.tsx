import { useMedia } from './useMedia';

type Devices = 'phone' | 'tablet' | 'desktop';

export const useBreakpoints = () => {
  const breakpoint = useMedia<Devices>(['(max-width: 480px)', '(max-width: 768px)'], ['phone', 'tablet', 'desktop'], 'desktop');

  return { breakpoint, isPhone: breakpoint === 'phone', isTablet: breakpoint === 'tablet', isDesktop: breakpoint === 'desktop' };
};
