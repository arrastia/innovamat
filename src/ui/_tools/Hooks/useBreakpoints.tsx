import { useMedia } from './useMedia';

type Devices = 'phone' | 'tablet' | 'small_desktop' | 'large_desktop' | 'extra_large_desktop';

export const useBreakpoints = () => {
  const breakpoint = useMedia<Devices>(
    ['(max-width: 480px)', '(max-width: 768px)', '(max-width: 1024px)', '(max-width: 1200px)'],
    ['phone', 'tablet', 'small_desktop', 'large_desktop'],
    'large_desktop'
  );

  return { breakpoint, isPhone: breakpoint === 'phone' };
};

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV
