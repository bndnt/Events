import { useState } from "react";
export default function ButtonHide() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam id
          expedita a reprehenderit, vel mollitia eaque pariatur necessitatibus
          ex dolore. Alias quis accusantium eveniet esse ratione totam
          architecto distinctio saepe.
        </p>
      )}
      <button onClick={handleOpen}>{isOpen ? "Hide" : "Show"}</button>{" "}
    </div>
  );
}
