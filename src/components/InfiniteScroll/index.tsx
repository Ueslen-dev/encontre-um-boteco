import { useEffect, useRef } from 'react';
import renderHTML from 'html-react-parser';

import { children } from 'types/children';

type Props = {
  fetchMore: () => void;
  loading?: children;
};

const InfiniteScroll = ({ fetchMore, loading }: Props) => {
  const containerRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        fetchMore();
      }
    }, options);

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [fetchMore]);

  return (
    <>
      {typeof loading === 'string' ? renderHTML(loading) : loading}
      <div ref={containerRef} />
    </>
  );
};
export default InfiniteScroll;
