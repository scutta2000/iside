import { useState } from "react";
import { Rnd } from "react-rnd";
import lotusScreen from "../assets/lotus-home.png";

const Home = () => {
  const [count, setCount] = useState(0);
  const [draggableButtons, setDraggableButtons] = useState<
    {
      x: number;
      y: number;
      href: string;
    }[]
  >([]);

  return (
    <div className="bg-black w-screen h-screen">
      <img
        src={lotusScreen}
        className="z-0 absolute top-0 left-1/2 translate -translate-x-1/2"
      />
      <div
        className="bg-black z-0 fixed w-screen h-screen top-0 left-0"
        style={{ zIndex: -1 }}
      />
      <div className="z-10 relative">
        {draggableButtons.map(({ href }, i) => (
          <Rnd
            default={{
              x: 100,
              y: 0,
              width: 320,
              height: 320,
            }}
            key={`draggableButton-${i}`}
          >
            <div className="box-border border-t-8 border-opacity-60 white  w-full h-full">
              <a
                href={href}
                className="box-border block border-red-500 border-2 border-dotted w-full h-full"
              />
            </div>
          </Rnd>
        ))}
      </div>
      <AddButtonOverlay setDraggableButtons={setDraggableButtons} />
    </div>
  );
};

const AddButtonOverlay = ({
  setDraggableButtons,
}: {
  setDraggableButtons: React.Dispatch<
    React.SetStateAction<
      {
        x: number;
        y: number;
        href: string;
      }[]
    >
  >;
}) => {
  const [inputField, setInputField] = useState("");

  const addButton = () => {
    setDraggableButtons((oldButtonsList) => [
      ...oldButtonsList,
      { x: 0, y: 0, href: inputField },
    ]);
    setInputField("");
  };

  return (
    <div className="bg-blue-400 fixed" style={{ bottom: 20, left: 20}}>
      <button
        className="m-3 bg-white text-black rounded px-2 py-1"
        onClick={addButton}
      >
        Add new button
      </button>
      <input
        autoComplete="off"
        type="text"
        className="m-2"
        onChange={(e) => {
          setInputField(e.target.value);
        }}
        value={inputField}
        onKeyDown={(e) => {
          if (e.key === "Enter") addButton();
        }}
      />
    </div>
  );
};

export default Home;
