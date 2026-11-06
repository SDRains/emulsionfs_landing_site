/**
 * Infinite right-to-left logo strip, sized to each logo's natural width.
 *
 * The track is two identical halves; the shared `animate-marquee` keyframes
 * (globals.css) slide it by -50%, so the loop is seamless. Each half repeats
 * the logo set `repeat` times so it is always wider than the viewport.
 *
 * Logos are drawn greyscale with `mix-blend-multiply` so white-backed JPG/WebP
 * logos melt into the cream. That only works on a light background, which is
 * why the masked strip paints its own cream behind the logos (the mask makes
 * it an isolated layer, so it can't blend with the section behind it).
 *
 * @param {Array<{ src: string, alt: string, height?: number }>} logos
 * @param {number} [seconds=36] Time for one half of the track to scroll by.
 * @param {number} [repeat=2]   Copies of the logo set in each half.
 */
export default function LogoMarquee({ logos = [], seconds = 36, repeat = 2, className = "" }) {
  if (logos.length === 0) return null;

  const half = Array.from({ length: repeat }, () => logos).flat();
  const track = [...half, ...half];
  const mask = "linear-gradient(to right, transparent, black 12%, black 88%, transparent)";

  return (
    <div
      className={`overflow-hidden bg-primary-cream ${className}`}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <ul
        className="animate-marquee flex w-max items-center will-change-transform"
        style={{ animationDuration: `${seconds}s` }}
      >
        {track.map((logo, i) => {
          // Only the first set is announced; the rest are visual repeats.
          const repeatCopy = i >= logos.length;
          return (
            <li
              key={`${logo.src}-${i}`}
              aria-hidden={repeatCopy || undefined}
              className="flex h-16 shrink-0 items-center px-8 sm:px-11"
            >
              <img
                src={logo.src}
                alt={repeatCopy ? "" : logo.alt}
                style={{ height: logo.height ?? 34 }}
                className="w-auto opacity-60 mix-blend-multiply grayscale contrast-125 transition duration-200 hover:opacity-100 hover:grayscale-0 hover:contrast-100"
                draggable={false}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
