import { useState } from "react";

const ButtonClicks = () => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return <button onClick={handleClick}> Current: {clicks}</button>;
};
export default ButtonClicks;

// Реактивність

// Давайте розглянемо приклад використання звичайної змінної для відображення кількості кліків по кнопці. Кожне натискання на кнопку повинно змінити значення змінної і відобразити нове значення в інтерфейсі. Проте це не працюватиме, ви можете спробувати!

// const App = () => {
// 	let clicks = 0;

//   const handleClick = () => {
//     clicks = clicks + 1;
//   };

// 	return <button onClick={handleClick}>Current: {clicks}</button>
// };

// Обробник подій handleClick оновлює локальну змінну clicks. Проте дві речі заважають змінам бути видимими:

//     Локальні змінні не зберігаються між рендерами. Коли React рендерить цей компонент вдруге, він рендерить його з нуля — не враховує жодних змін у локальних змінних.
//     Зміни локальних змінних не викликають повторних рендерів. React не усвідомлює необхідності повторного рендерингу компонента з новими даними.

// Для оновлення компонента новими даними потрібно виконати дві речі:

//     Зберегти дані між рендерами.
//     Заставити React рендерити компонент з новими даними (повторний рендеринг).

// Перепишемо код з використанням стану. Щоб додати змінну стану, імпортуйте useState з React угорі файлу компонента.

// import { useState } from 'react';

// const App = () => {
// 	let clicks = 0;

//   const handleClick = () => {
//     clicks = clicks + 1;
//   };

// 	return <button onClick={handleClick}>Current: {clicks}</button>
// };

// Далі замінимо локальну змінну clicks.

// import { useState } from 'react';

// const App = () => {
// 	// let clicks = 0;
// 	const [ clicks, setClicks ] = useState(0);

//   const handleClick = () => {
//     clicks = clicks + 1;
//   };

// 	return <button onClick={handleClick}>Current: {clicks}</button>
// };

// Тут синтаксис [ clicks, setClicks ] - це деструктуризація масиву. Масив, який повертає useState, завжди має точно два елементи: перший (clicks) - це змінна стану, а другий (setClicks) - це функція для її встановлення.

// У handleClick використовуємо setClicks для зміни стану clicks.

// import { useState } from 'react';

// const App = () => {
// 	const [ clicks, setClicks ] = useState(0);

//   const handleClick = () => {
//     // clicks = clicks + 1;
// 		setClicks(clicks + 1);
//   };

// 	return <button onClick={handleClick}>Current: {clicks}</button>
// };

// Тепер, при кліку на кнопку, стан в змінній clicks буде змінюватися, що змусить компонент оновлюватися і повторно рендерити JSX з оновленими значеннями.
