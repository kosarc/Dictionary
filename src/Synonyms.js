import React from "react";

function Synonyms(props) {
  function handleClick(data) {
    props.func(data.target.innerText);
  }

  // eslint-disable-next-line
  if (props.words.synonyms != [].length) {
    return (
      <span>
        Synonyms:{" "}
        {props.words.synonyms.map((value, index) => {
          if (value) {
            return (
              <span key={index}>
                <button onClick={handleClick}>{value}</button>{" "}
              </span>
            );
          } else {
            return null;
          }
        })}
      </span>
    );
  } else {
    return null;
  }
}
export default Synonyms;
