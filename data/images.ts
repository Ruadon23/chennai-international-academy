/**
 * Central image registry.
 *
 * `src: null` renders a neutral placeholder. To use final photography, drop the
 * file in /public/images and set `src` to e.g. "/images/hero.jpg". No component
 * changes are required.
 */
export type ImageAsset = {
  src: string | null;
  alt: string;
  /** Tailwind-compatible CSS aspect ratio, e.g. "4 / 5" */
  aspect: string;
  /** Caption shown on the placeholder only. */
  label: string;
};

export const images = {
  hero: {
    src: null,
    alt: "Students collaborating in a science laboratory on the CIA campus (demo image)",
    aspect: "4 / 5",
    label: "Hero — campus & students",
  },
  principal: {
    src: null,
    alt: "Portrait of the Head of School (demo content)",
    aspect: "4 / 5",
    label: "Head of School portrait",
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
