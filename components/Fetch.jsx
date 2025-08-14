import { use, useEffect, useState } from "react";
import "../public/Fetch.css";

function Fetch() {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  const [cards, setCards] = useState([]);
  //   fetch(URL)
  //     .then((response => response.json()))
  //     .then((data) => {
  //       const cards = data.map((card) => {
  //         return (
  //           <div key={card.id}>
  //             <h1>User ID: {card.id}</h1>
  //             <h1>{card.title}</h1>
  //           </div>
  //         );
  //       });
  //       return cards
  //     })
  //     .then((error) => console.error(error));

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Fetching error", error);
      }
    };
    fetchCards()
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      <div className="container">{cards}</div>
    </div>
  );
}

export default Fetch;
