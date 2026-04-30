import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export function PreviewEmbedSection({
  src,
  title,
  minHeight = 720,
  sectionRef = null,
  className = '',
  allowPointerEvents = false,
  onCtaClick = null
}) {
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const heightRef = useRef(minHeight);
  const [height, setHeight] = useState(minHeight);
  const inView = useInView(containerRef, { once: true, amount: 0.14 });

  const setSectionRefs = (node) => {
    containerRef.current = node;
    if (sectionRef && typeof sectionRef === 'object') {
      sectionRef.current = node;
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return undefined;

    let resizeObserver;
    let rafId;
    let iframeClickCleanup;

    const syncHeight = () => {
      try {
        const doc = iframe.contentDocument;
        if (!doc) return;

        const previewNav = doc.querySelector('div.fixed.bottom-4');
        if (previewNav) previewNav.style.display = 'none';

        doc.documentElement.style.overflowX = 'hidden';
        doc.body.style.margin = '0';
        doc.body.style.overflowX = 'hidden';

        if (onCtaClick) {
          doc.querySelectorAll('button, a').forEach((node) => {
            node.style.cursor = 'pointer';
          });
        }

        const nextHeight = Math.max(
          minHeight,
          doc.documentElement.scrollHeight || 0,
          doc.body.scrollHeight || 0,
          doc.documentElement.offsetHeight || 0,
          doc.body.offsetHeight || 0
        );

        if (Math.abs(nextHeight - heightRef.current) > 2) {
          heightRef.current = nextHeight;
          setHeight(nextHeight);
        }
      } catch {
        // same-origin local previews should allow access; ignore if not ready yet
      }
    };

    const handleLoad = () => {
      rafId = window.requestAnimationFrame(() => {
        syncHeight();
      });

      try {
        const doc = iframe.contentDocument;
        if (doc?.body && 'ResizeObserver' in window) {
          resizeObserver = new ResizeObserver(() => syncHeight());
          resizeObserver.observe(doc.body);
          resizeObserver.observe(doc.documentElement);
        }
      } catch {
        // ignore
      }

      const handleIframeClick = (event) => {
        if (!onCtaClick) return;
        const target = event.target?.closest?.('button, a');
        if (!target) return;

        event.preventDefault();
        onCtaClick(target.textContent?.trim() ?? '');
      };

      try {
        iframe.contentDocument?.addEventListener('click', handleIframeClick);
        iframeClickCleanup = () => {
          iframe.contentDocument?.removeEventListener('click', handleIframeClick);
        };
      } catch {
        // ignore
      }

      window.addEventListener('resize', syncHeight);
    };

    iframe.addEventListener('load', handleLoad);

    if (iframe.contentDocument?.readyState === 'complete') {
      handleLoad();
    }

    return () => {
      iframe.removeEventListener('load', handleLoad);
      if (resizeObserver) resizeObserver.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
      if (iframeClickCleanup) iframeClickCleanup();
      window.removeEventListener('resize', syncHeight);
    };
  }, [src, minHeight, onCtaClick]);

  return (
    <motion.section
      ref={setSectionRefs}
      className={`bg-[#05070D] ${className}`.trim()}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
    >
      <iframe
        ref={iframeRef}
        title={title}
        src={src}
        scrolling="no"
        className="block w-full border-0 bg-transparent"
        style={{ height: `${height}px`, pointerEvents: allowPointerEvents ? 'auto' : 'none' }}
      />
    </motion.section>
  );
}
