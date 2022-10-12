import Speaker from "./Speaker";

function Play(props) {
  function isUrl(set) {
    return set.audio !== "";
  }

  let arr = props.audioSrc.phonetics;
  let urlAudio = arr.find(isUrl);

  if (urlAudio) {
    urlAudio = arr.find(isUrl).audio;
    function handleClick() {
      let audio = new Audio(urlAudio);
      audio.play();
    }

    return (
      <span className="Play">
        <button onClick={handleClick}>
          <Speaker />
        </button>
      </span>
    );
  } else {
    return null;
  }
}

export default Play;
