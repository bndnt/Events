import { useState } from "react";
export default function ButtonHide({ children }) {
  //     children — это не совсем «зарезервированное слово» в синтаксисе JavaScript, но это специальное свойство (prop), которое React автоматически передаёт любому компоненту.

  // Всё, что ты пишешь между открывающим и закрывающим тегом компонента, React положит в этот children.
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && <div>{children}</div>}
      <button onClick={handleOpen}>{isOpen ? "Hide" : "Show"}</button>{" "}
    </div>
  );
}
