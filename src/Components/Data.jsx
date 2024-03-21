import React, { useState } from "react";

const initialData =
  `In the heart of the ancient city nestled towering skyscrapers and bustling markets lies a hidden oasis of tranquility Here time seems to slow down and the chaos of the outside world fades into the background The air is filled with the scent of exotic spices and fragrant flowers and the sound of flowing water from ornate fountains soothes the soul Narrow cobblestone streets wind their way through colorful buildings adorned with intricate carvings and vibrant murals each telling a story of centuries past Locals and tourists alike meander through the labyrinthine alleys discovering hidden cafes artisan workshops and quaint boutiques tucked away in every corner It a place where history and modernity blend seamlessly where the past whispers its secrets to those who care to listen and where every turn reveals a new adventure waiting to be explored`
    .split(" ")
    .sort(() => (Math.random() > 0.5 ? 1 : -1));

function Data() {
  const [data] = useState(initialData);
  const [activeWordIndex, setActiveWordIndex] = useState(null);
  const [userInput, setUserInput] = useState("");

  const handleRestart = () => {
    location.reload();
  };

  const checkValue = (value) => {
    setUserInput(value.trim());
    if (value.endsWith(" ")) {
      setActiveWordIndex((index) => (index === null ? 0 : index + 1));
      setUserInput("");
    } else {
        setUserInput(value);
    }
  };

  return (
    <>
      <center className="mt-[8%]">
        <p className="text-[#646669] w-[72%] h-auto text-start text-2xl border-2 p-9 rounded-2xl font-mono border-black hover:border-4">
          {data.map((item, index) => {
            if (index === activeWordIndex) {
              return (
                <b className="text-white" key={index}>
                  {item}{" "}
                </b>
              );
            }

            return <span key={index}>{item} </span>;
          })}

          <span>
            <input
              type="text"
              placeholder="To start typing, tap here."
              className="w-full h-full bg-[#323437] placeholder-text-white mt-5 border-2 border-[#646669] rounded-xl text-center outline-none text-white placeholder:text-white"
              value={userInput}
              onChange={(e) => checkValue(e.target.value)}
            />
          </span>
        </p>

        <button
          className="m-10 w-10 h-10 hover:border-2 p-1 border-gray-500"
          onClick={handleRestart}
        >
          <img src="./src/assets/sync-alt.svg" alt="icon" />
        </button>
      </center>
    </>
  );
}

export default Data;
