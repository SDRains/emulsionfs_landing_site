import "@/styles/globals.css";
import { Source_Serif_4 } from "next/font/google";

// Source Serif 4 is a variable font, so no explicit weight is needed. We load
// both normal and italic styles (the hero headline uses an italic accent line)
// and expose it as a CSS variable that Tailwind's `font-serif` maps to.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={sourceSerif.variable}>
      <Component {...pageProps} />
    </div>
  );
}
