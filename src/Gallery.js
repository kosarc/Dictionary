import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

function Gallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row pswp-gallery" id={props.galleryID}>
      {props.images.map((image, index) => (
        <div className="col-4" key={index}>
          <a
            href={image.src.landscape}
            key={props.galleryID + "-" + index}
            data-pswp-width={"1200"}
            data-pswp-height={"627"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image.src.landscape} alt="" className="img-fluid" />
          </a>
        </div>
      ))}
    </div>
  );
}
export default Gallery;
