"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CornerTicks } from "./PhotoFrame";
import { useDictionary } from "./DictionaryProvider";
import { formatMessage } from "@/app/lib/format-message";
import type { ProjectGalleryItem } from "@/app/lib/projects";

function GalleryPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center border border-grid-line bg-ink/[0.03] p-5">
      <CornerTicks />
      <div className="flex flex-col items-center gap-3 text-center">
        <ImageIcon
          aria-hidden="true"
          strokeWidth={1.5}
          className="h-7 w-7 text-slate/70"
        />
        <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function ProjectGallery({
  items,
}: {
  items: ProjectGalleryItem[];
}) {
  const { dict } = useDictionary();
  const gallery = dict.gallery;
  const photos = items.filter((item): item is ProjectGalleryItem & { src: string } =>
    Boolean(item.src),
  );
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);

  const photoCount = photos.length;
  const current = photos[index];

  const goTo = useCallback(
    (nextIndex: number) => {
      if (!photoCount) return;
      setIndex((nextIndex + photoCount) % photoCount);
    },
    [photoCount],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, goPrev, goNext]);

  function onTouchStart(clientX: number) {
    touchStartX.current = clientX;
  }

  function onTouchEnd(clientX: number) {
    if (touchStartX.current === null) return;
    const delta = clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    didSwipe.current = true;
    if (delta > 0) goPrev();
    else goNext();
  }

  if (!photoCount && items.length === 0) return null;

  if (!photoCount) {
    return (
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <figure key={item.label}>
            <GalleryPlaceholder label={item.label} />
            <figcaption className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-slate">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="mt-6 min-w-0 w-full max-w-full">
        <div className="relative w-full max-w-full overflow-hidden border border-grid-line bg-ink/[0.04]">
          <CornerTicks />
          <button
            type="button"
            onClick={() => {
              if (didSwipe.current) {
                didSwipe.current = false;
                return;
              }
              setLightboxOpen(true);
            }}
            className="group relative block h-[min(56vw,280px)] w-full overflow-hidden text-left sm:h-[320px] sm:max-h-[360px] wide:h-[380px] wide:max-h-[400px]"
            aria-label={formatMessage(gallery.viewFullSize, { label: current.label })}
            onTouchStart={(event) =>
              onTouchStart(event.touches[0]?.clientX ?? 0)
            }
            onTouchEnd={(event) =>
              onTouchEnd(event.changedTouches[0]?.clientX ?? 0)
            }
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 900px) calc(100vw - 48px), 680px"
              className="object-cover transition-opacity duration-300"
            />
            <span className="absolute bottom-4 right-4 bg-paper/90 px-3 py-1.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-ink opacity-100 shadow-[0_8px_24px_rgb(16_20_24/0.07)] transition-opacity duration-150 sm:opacity-0 sm:group-hover:opacity-100">
              {gallery.tapToEnlarge}
            </span>
          </button>

          {photoCount > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label={gallery.previousPhoto}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-paper/30 bg-ink/75 text-paper backdrop-blur-sm transition-colors duration-150 hover:border-paper"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label={gallery.nextPhoto}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-paper/30 bg-ink/75 text-paper backdrop-blur-sm transition-colors duration-150 hover:border-paper"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-display text-[1.05rem] font-bold text-ink">
              {current.label}
            </p>
            <p className="mt-1 max-w-[52ch] text-[0.875rem] leading-[1.6] text-slate">
              {current.alt}
            </p>
          </div>
          <p className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.08em] text-slate">
            {index + 1} / {photoCount}
          </p>
        </div>

        {photoCount > 1 ? (
          <div
            className="mt-5 flex min-w-0 gap-3 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]"
            role="tablist"
            aria-label={gallery.projectPhotos}
          >
            {photos.map((photo, photoIndex) => (
              <button
                key={photo.src}
                type="button"
                role="tab"
                aria-selected={photoIndex === index}
                aria-label={formatMessage(gallery.showPhoto, { label: photo.label })}
                onClick={() => setIndex(photoIndex)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden border transition-all duration-150 ${
                  photoIndex === index
                    ? "border-ink ring-2 ring-accent-yellow ring-offset-2 ring-offset-paper"
                    : "border-grid-line opacity-70 hover:border-ink hover:opacity-100"
                }`}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {lightboxOpen && current ? (
        <div
          role="presentation"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/88 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLightboxOpen(false);
          }}
          onTouchStart={(event) =>
            onTouchStart(event.touches[0]?.clientX ?? 0)
          }
          onTouchEnd={(event) =>
            onTouchEnd(event.changedTouches[0]?.clientX ?? 0)
          }
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={formatMessage(gallery.photoOf, {
              label: current.label,
              index: index + 1,
              total: photoCount,
            })}
            className="relative w-full max-w-[1100px]"
          >
            <button
              type="button"
              aria-label={gallery.closeGallery}
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center border border-paper/30 bg-ink text-paper transition-colors duration-150 hover:border-paper"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>

            {photoCount > 1 ? (
              <>
                <button
                  type="button"
                  aria-label={gallery.previousPhoto}
                  onClick={goPrev}
                  className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/30 bg-ink/80 text-paper backdrop-blur-sm transition-colors duration-150 hover:border-paper sm:-left-14"
                >
                  <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label={gallery.nextPhoto}
                  onClick={goNext}
                  className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/30 bg-ink/80 text-paper backdrop-blur-sm transition-colors duration-150 hover:border-paper sm:-right-14"
                >
                  <ChevronRight aria-hidden="true" className="h-5 w-5" />
                </button>
              </>
            ) : null}

            <div className="relative aspect-[4/3] max-h-[78vh] border border-paper/25 bg-ink">
              <Image
                key={`lightbox-${current.src}`}
                src={current.src}
                alt={current.alt}
                fill
                sizes="min(1100px, 100vw)"
                className="object-contain"
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-paper/75">
                {current.label}
              </p>
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-paper/55">
                {index + 1} / {photoCount}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
