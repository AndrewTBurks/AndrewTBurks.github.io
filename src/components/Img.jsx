import React from 'react';

import { unstable_createResource } from "react-cache";

const ImageResource = unstable_createResource(
  source =>
    new Promise(resolve => {
      const img = new Image();
      img.src = source;
      img.onload = resolve;
    })
);

export default function Img({ src, alt, ...props }) {
  ImageResource.read(src);

  return <img src={src} alt={alt} {...props} />;
};
