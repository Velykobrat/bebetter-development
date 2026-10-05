"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectCarouselProps = {
  images: string[];
  title: string;
};

export function ProjectCarousel({
  images,
  title,
}: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [touchStart, setTouchStart] = useState<number | null>(null);

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
    setTouchStart(clientX);
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStart === null) return;

    const distance = clientX - touchStart;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        previous();
      } else {
        next();
      }
    }

    setTouchStart(null);
  };

  return (
    <div
      className="exhibition-carousel"
      tabIndex={0}
      role="region"
      aria-label={`${title} gallery`}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          previous();
        }

        if (event.key === "ArrowRight") {
          next();
        }
      }}
      onTouchStart={(event) =>
        handleTouchStart(event.touches[0].clientX)
      }
      onTouchEnd={(event) =>
        handleTouchEnd(event.changedTouches[0].clientX)
      }
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
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${title} screenshot ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <Image
                src={src}
                alt={`${title} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 768px) 64vw, (max-width: 1200px) 36vw, 22vw"
                draggable={false}
              />
            </button>
          );
        })}
      </div>

      <div className="exhibition-controls">
        <button
          type="button"
          onClick={previous}
          aria-label="Previous screenshot"
        >
          ←
        </button>

        <span>
          {String(activeIndex + 1).padStart(2, "0")}
          <i />
          {String(total).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={next}
          aria-label="Next screenshot"
        >
          →
        </button>
      </div>
    </div>
  );
}