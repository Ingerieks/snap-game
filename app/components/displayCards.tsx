"use client";

export default function DisplayCards({ cards }) {
  return (
    <div className="flex flex-col w-[50vw]">
      {cards.length > 1 && (
        <div className="flex flex-row justify-between">
          {cards.map((card, index) => (
            <div key={index} className="border-3 border-black p-2">
              <img
                className="shadow-xl"
                src={`${card.image}`}
                alt="card"
                width="350px"
              ></img>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
