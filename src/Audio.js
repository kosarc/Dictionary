function Audio(props) {
  if (props.audioSrc) {
    return <audio controls src={props.audioSrc.audio} />;
  } else {
    return null;
  }
}
export default Audio;
