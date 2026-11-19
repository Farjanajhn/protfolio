// fillFrames.js — makes every case-study image fill its frame edge to edge.
// Each frame gets the colour of its image's corner pixel as its background,
// so letterbox space blends into the image instead of showing a white gap.
import { useEffect } from "react";

const paint = (img) => {
  const frame = img.closest(".cs-fig__frame");
  if (!frame || !img.naturalWidth) return;
  try {
    const c = document.createElement("canvas");
    c.width = 4; c.height = 4;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, 4, 4, 0, 0, 4, 4);
    const [r, g, b, a] = ctx.getImageData(1, 1, 1, 1).data;
    frame.style.background = a < 10 ? "#ffffff" : `rgb(${r}, ${g}, ${b})`;
  } catch {
    /* ignore: frame keeps its default background */
  }
};

export const useFillFrames = () => {
  useEffect(() => {
    const imgs = [...document.querySelectorAll(".cs-fig__frame img")];
    const handlers = imgs.map((img) => {
      const h = () => paint(img);
      if (img.complete) h();
      else img.addEventListener("load", h, { once: true });
      return [img, h];
    });
    return () => handlers.forEach(([img, h]) => img.removeEventListener("load", h));
  }, []);
};
