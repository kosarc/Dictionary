import React from "react";
import "./Synonyms.css";

function Synonyms(props) {
  function handleClick(data) {
    props.func(data.target.innerText);
  }

  // eslint-disable-next-line
  if (props.words.synonyms != [].length) {
    return (
      <span className="Synonyms">
        <span className="synonym">Similar: </span>
        {props.words.synonyms.map((value, index) => {
          if (value) {
            return (
              <span key={index}>
                <button onClick={handleClick} className="synonyms-button">
                  {value}
                </button>{" "}
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
