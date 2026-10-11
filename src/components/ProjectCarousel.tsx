"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type ProjectCarouselProps = {
  images: string[];
  title: string;
};

export function ProjectCarousel({
  images,
  title,
}: ProjectCarouselProps) {
  const mobileGallery = useRef<HTMLDivElement>(null);
  const showMobileSlide = (index: number) => {
    const gallery = mobileGallery.current;
    if (gallery) gallery.scrollTo({ left: index * gallery.clientWidth, behavior: "auto" });
  };
  const [activeIndex, setActiveIndex] = useState(() => Math.max(0, Math.min(2, images.length - 1)));
  const touchStart = useRef<number | null>(null);
  const suppressClickUntil = useRef(0);

  const total = images.length;

  const getDistance = (index: number) => {
    let distance = index - activeIndex;

    if (distance > total / 2) {
      distance -= total;
    }

    if (distance < -total / 2) {
      distance += total;
    }

    return distance;
  };

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? total - 1 : current - 1,
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === total - 1 ? 0 : current + 1,
    );
  };

  const handleTouchStart = (clientX: number) => {
    touchStart.current = clientX;
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStart.current === null) return;

    const distance = clientX - touchStart.current;

    if (Math.abs(distance) > 50) {
      suppressClickUntil.current = Date.now() + 400;
      if (distance > 0) {
        previous();
      } else {
        next();
      }
    }

    touchStart.current = null;
  };

  if (total === 0) return null;

  return (
    <>
    <div
      className="exhibition-carousel"
      tabIndex={0}
      role="region"
      aria-label={`Галерея ${title}`}
      aria-roledescription="карусель"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          previous();
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          next();
        }
      }}
      onTouchStart={(event) =>
        handleTouchStart(event.touches[0].clientX)
      }
      onTouchEnd={(event) =>
        handleTouchEnd(event.changedTouches[0].clientX)
      }
      onTouchCancel={() => { touchStart.current = null; }}
    >
      <div className="exhibition-track">
        {images.map((src, index) => {
          const distance = getDistance(index);

          return (
            <button
              type="button"
              className="exhibition-card"
              data-distance={distance}
              key={src}
              onClick={() => {
                if (Date.now() < suppressClickUntil.current) return;
                if (index === activeIndex) next();
                else setActiveIndex(index);
              }}
              aria-label={index === activeIndex ? `Наступний скриншот ${title}` : `Показати скриншот ${index + 1}: ${title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <Image
                src={src}
                alt={`${title} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 768px) 64vw, (max-width: 1200px) 36vw, 22vw"
                draggable={false}
                loading={index === activeIndex ? "eager" : "lazy"}
              />
            </button>
          );
        })}
      </div>

      <div className="exhibition-controls">
        <button
          type="button"
          onClick={previous}
          aria-label="Попередній скриншот"
          disabled={total < 2}
        >
          ←
        </button>

        <span aria-live="polite" aria-atomic="true">
          {String(activeIndex + 1).padStart(2, "0")}
          <i aria-hidden="true" />
          <span className="sr-only">з</span>
          {String(total).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={next}
          aria-label="Наступний скриншот"
          disabled={total < 2}
        >
          →
        </button>
      </div>
    </div>
    <div className="mobile-gallery" ref={mobileGallery} role="region" aria-label={`Галерея ${title}`}>
      {images.map((src, index) => (
        <div className="mobile-gallery-slide" key={src}>
          <button type="button" className="mobile-gallery-image" onClick={() => showMobileSlide((index + 1) % total)} aria-label={`Наступний скриншот ${title}`}>
            <Image src={src} alt={`${title}: скриншот ${index + 1}`} fill sizes="76vw" draggable={false} />
          </button>
          <nav className="mobile-gallery-controls" aria-label={`Скриншот ${index + 1} з ${total}`}>
            <button type="button" onClick={() => showMobileSlide((index + total - 1) % total)} aria-label="Попередній скриншот">←</button>
            <span>{index + 1} / {total}</span>
            <button type="button" onClick={() => showMobileSlide((index + 1) % total)} aria-label="Наступний скриншот">→</button>
          </nav>
        </div>
      ))}
    </div>
    </>
  );
}
