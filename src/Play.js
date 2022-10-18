import Speaker from "./Speaker";
import { useState } from "react";
import "./Play.css";

function Play(props) {
  const [isActive, setIsActive] = useState(false);
  function isUrl(set) {
    return set.audio !== "";
  }

  let arr = props.audioSrc.phonetics;
  let urlAudio = arr.find(isUrl);

  if (urlAudio) {
    urlAudio = arr.find(isUrl).audio;
    function handleClick() {
      setIsActive((current) => !current);
      let audio = new Audio(urlAudio);
      audio.play();
    }

    return (
      <span className="Play">
        <button className={isActive ? "on" : "off"} onClick={handleClick}>
          <Speaker />
        </button>
      </span>
    );
  } else {
    return null;
  }
}

export default Play;
