import React, { useState } from "react";
import Play from "./Play";
import Category from "./Category";
import Synonyms from "./Synonyms";

function ApiRespone(props) {
  const [childData, setChildData] = useState(null);
  function pull_data(data) {
    setChildData(data);
  }
  if (props.results && childData === null) {
    return (
      <div className="ApiRespone">
        <div>
          See definitions in:
          <Category data={props.results} func={pull_data} />
          <Play audioSrc={props.results[0]} /> <h2>{props.results[0].word}</h2>
          <div className="phonetic">{props.results[0].phonetic}</div>
          <div className="part-of-speech">
            {props.results[0].meanings[0].partOfSpeech}
          </div>
          <ul>
            <li>{props.results[0].meanings[0].definitions[0].definition}</li>
          </ul>
          <Synonyms words={props.results[0].meanings[0]} func={props.func} />
        </div>
      </div>
    );
  } else {
    if (props.results && childData === "All") {
      return (
        <div className="ApiRespone">
          <div>
            See definitions in:
            <Category data={props.results} func={pull_data} />
          </div>
        </div>
      );
    }
    if (props.results && childData === "Main") {
      return (
        <div className="ApiRespone">
          <div>
            See definitions in:
            <Category data={props.results} func={pull_data} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default ApiRespone;
