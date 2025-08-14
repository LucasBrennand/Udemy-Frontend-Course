function Map(props) {
  const people = [
    {
      id: 1,
      name: "Lucas",
      age: 22,
      height: 1.85,
    },
    {
      id: 2,
      name: "Adila",
      age: 20,
      height: 1.7,
    },
    {
      id: 3,
      name: "Mauricio",
      age: 55,
      height: 1.83,
    },
    {
      id: 4,
      name: "Luisa",
      age: 53,
      height: 1.68,
    },
  ];

  const cards = people.map((card) => {
    return (
      <div key={card.id} className="card">
        <h1>{card.name}</h1>
        <h2>{card.age}</h2>
        <h3>{card.height}</h3>
      </div>
    );
  }); 

  return <div>{cards}</div>;
}

export default Map;
