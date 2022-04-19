import { useEffect, useRef } from 'react';

type Props = {
  fetchMore: () => void;
};
const InfiniteScroll = ({ fetchMore }: Props) => {
  const containerRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        fetchMore();
      }
    }, options);

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [fetchMore]);

  return <div ref={containerRef} />;
};
export default InfiniteScroll;
