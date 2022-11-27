import {useState} from "react";

export const MovableButton = () => {
  const [buttonPosition, setButtonPosition] = useState()
  const onDrag: React.DragEventHandler<HTMLButtonElement> = (e) => {
    console.log("Dragging")

    console.log(e)
  };

  return <button draggable={true} onDragEnd={onDrag}  className="bg-purple-600"> some text </button>;

};
