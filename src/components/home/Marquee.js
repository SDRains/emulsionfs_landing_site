'use client';

import Image from 'next/image';

/**
 * Seamless right-to-left image marquee.
 *
 * @param {Object}   props
 * @param {Array<{ src: string, alt?: string }>} props.images
 * @param {number}   [props.perView=4]         How many images are visible across the container at once.
 * @param {number}   [props.gap=24]            Space between images, in pixels.
 * @param {number}   [props.secondsPerImage=3] Seconds each image takes to travel one slot — keeps speed constant no matter the array length.
 * @param {string}   [props.aspect]            Tailwind aspect-ratio class for each slide.
 * @param {boolean}  [props.pauseOnHover=true]
 * @param {boolean}  [props.fadeEdges=true]    Fade the left/right edges so images enter and exit softly.
 * @param {string}   [props.className]
 */
export default function ImageMarquee({
                                         images = [],
                                         perView = 4,
                                         gap = 24,
                                         secondsPerImage = 3,
                                         aspect = 'aspect-[4/3]',
                                         pauseOnHover = true,
                                         fadeEdges = true,
                                         className = '',
                                     }) {
    if (images.length === 0) return null;

    // The track holds two identical passes. When the first pass has scrolled
    // exactly off-screen, the second pass is sitting in its old position, so
    // resetting to 0 is invisible.
    const track = [...images, ...images];

    const trackStyle = {
        width: `${(track.length / perView) * 100}%`,
        animationDuration: `${images.length * secondsPerImage}s`,
    };

    const slideStyle = {
        width: `${100 / track.length}%`,
        paddingRight: `${gap}px`,
    };

    const maskStyle = fadeEdges
        ? {
            maskImage:
                'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
            WebkitMaskImage:
                'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }
        : undefined;

    return (
        <div
            className={`group relative w-full ${className}`}
            style={maskStyle}
        >
            <div
                style={trackStyle}
                className={`flex animate-marquee will-change-transform motion-reduce:animate-none ${
                    pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
                }`}
            >
                {track.map((image, i) => (
                    <div
                        key={`${image.src}-${i}`}
                        style={slideStyle}
                        aria-hidden={i >= images.length}
                        className="box-border shrink-0"
                    >
                        <div className="relative w-full flex items-center justify-center">
                            <img
                                src={image.src}
                                alt={image.alt ?? ''}
                                className="w-32 max-h-12 object-contain"
                                draggable={false}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Scoped so the component stays drop-in. Move to globals.css or the
          Tailwind config if you'd rather define it once for the whole app. */}
            <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
        </div>
    );
}