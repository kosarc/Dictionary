function ApiRespone(props) {
  if (props.results) {
    return (
      <div className="ApiRespone">
        <div>
          {props.results.map((value, index) => {
            return (
              <div key={index}>
                <h2>{value.word}</h2>
                <div className="phonetic">
                  <audio controls src={value.phonetics[0].audio} />
                  {value.phonetic}
                </div>
                {value.meanings.map((meaning, index) => {
                  return (
                    <div key={index}>
                      <div className="part-of-speech">
                        {meaning.partOfSpeech}
                      </div>
                      <ul>
                        {meaning.definitions.map((definition, index) => {
                          return <li key={index}>{definition.definition}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default ApiRespone;
