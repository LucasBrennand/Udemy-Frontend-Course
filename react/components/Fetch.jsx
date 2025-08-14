import { use, useEffect, useState } from "react";
import "../public/Fetch.css";

function Fetch() {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      setApiData(data)
    })
    .catch(error => console.error(error))
  }, [])
  return (
    <div>
      {apiData.map(card => {
        return <div className="card text" key={card.id}>
          <h1>{card.title}</h1>
          <br />
          <h2>{card.userId}</h2>
        </div>
      })}
    </div>
  );
}

export default Fetch;
