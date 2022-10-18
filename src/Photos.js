import { useState, useEffect } from "react";
import { createClient } from "pexels";
import "./Photos.css";
import Gallery from "./Gallery";

function Photos(props) {
  const [pexelPhotos, setPexelPhotos] = useState(null);
  useEffect(() => {
    apiControl();
    // eslint-disable-next-line
  }, [props.word]);

  function handleRespone(respone) {
    setPexelPhotos(respone.photos);
  }

  function apiControl() {
    const client = createClient(
      "563492ad6f91700001000001ce7ebb164f3d41a6b7fbabc52482f9ff"
    );
    const query = props.word;
    client.photos.search({ query, per_page: 9 }).then(handleRespone);
  }

  if (pexelPhotos === null) {
    apiControl();
    return null;
  } else {
    return (
      <div className="Photos">
        <Gallery images={pexelPhotos} galleryID="my-test-gallery" />
      </div>
    );
  }
}

export default Photos;
