import {emojis} from '../../src/emojis.js'

function Cards(params) {
  const cards = emojis.map((card) => {
    return (
      <div
        key={card.id}
        className="flex flex-col items-center justify-items-start bg-red-600 text-white p-4"
      >
        <h1 className="text-6xl p-36">{card.emoji}</h1>
        <p>{card.name}</p>
        <p>{card.desc}</p>
      </div>
    );
  });
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {cards}
    </div>
  );
}

export default Cards;
