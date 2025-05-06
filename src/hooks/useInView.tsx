import { useState, useEffect, useRef, RefObject } from 'react';

interface UseInViewProps {
  threshold?: number;
  rootMargin?: string;
}

interface UseInViewReturn {
  ref: RefObject<HTMLElement>;
  inView: boolean;
}

export const useInView = ({ threshold = 0.1, rootMargin = '0px' }: UseInViewProps = {}): UseInViewReturn => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, inView };
};