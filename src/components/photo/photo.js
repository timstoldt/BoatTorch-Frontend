// photo.js
// Serves a WebP image with a JPG fallback from /img.
// Pass `small` to also offer a 1200px version for phones.

import React from "react";

const Photo = ({ name, alt, small = false, eager = false, className, style }) => {
  const base = `/img/${name}`;
  const srcSet = (ext) =>
    small ? `${base}-1200.${ext} 1200w, ${base}.${ext} 2400w` : `${base}.${ext}`;

  return (
    <picture>
      <source type="image/webp" srcSet={srcSet("webp")} sizes="100vw" />
      <img
        src={`${base}.jpg`}
        srcSet={small ? srcSet("jpg") : undefined}
        sizes={small ? "100vw" : undefined}
        alt={alt}
        className={className}
        style={style}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
};

export default Photo;
