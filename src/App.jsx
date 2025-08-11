import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ButtonClicks from "./components/States/ButtonClicks";
import ButtonHide from "./components/States/ButtonHide";
// function App() {
//   // const handleClick = () => {
//   //   alert("Congrats!!");
//   // };
//   const handleClick = (evt) => {
//     console.log(evt);
//   };
//   return (
//     <>
//       <button onClick={handleClick}>first!</button>
//       <button onClick={(evt) => console.log(evt)}>second!</button>
//     </>
//   );
// }

//React дозволяє додавати обробники подій до вашого JSX. Обробники подій - це власні функції, які будуть викликані відповідно до взаємодій, таких як клікання, наведення, фокусування на полях введення форм і таке інше.

// Використання addEventListener() для додавання обробника подій майже ніколи не використовується в React,
// окрім кількох винятків, які ми розглянемо окремо.
// Щоб додати обробник подій до JSX-елементу, потрібно передати йому проп, який описує тип події.
// Значенням пропа повинно бути посилання на функцію зворотного виклику, яка буде викликана при настанні події.

// Ми об'явили функцію handleClick і потім передали її як проп для <button>.

//     Пропи подій визначаються в React та мають ім'я в стилі camelCase, починаючи з префікса on, після чого йде назва події. Наприклад: onClick, onSubmit, onChange, і так далі.
//     Функції обробників подій, такі як handleClick, визначаються всередині компонентів.
//     За конвенцією ім'я обробника подій починається з handle, за яким слідує назва події. Ви часто побачите щось на зразок onClick={handleClick}, onSubmit={handleSubmit}, і так далі.

// Також можна визначити обробник подій безпосередньо всередині JSX як анонімну інлайн-функцію.

// Оскільки обробники подій оголошуються всередині компонента, вони мають доступ до пропсів компонента. Ось приклад компонента кнопки CustomButton, яка, коли на неї натискано, виводить alert зі значенням пропса message:

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// export default App;

// Стан компонента
// Стан компонента
// Стан компонента
// Стан компонента
// Стан компонента
// Стан компонента
// Стан компонента
// Стан компонента

// Компонентам часто потрібно змінювати те, що відображається на екрані внаслідок
// взаємодії з користувачем. Введення даних в форму повинно оновлювати поле вводу,
//  клікання в слайдері зображень повинно змінювати зображення, натискання "купити"
// повинно додавати товар у кошик.

// Компонентам потрібно "запам'ятовувати" різні речі: поточне значення введення,
// поточне зображення, кошик покупок. У React такий вид пам'яті, що специфічний
// для компонента, називається станом (state). Пропси (props) - це дані, які передаються
// компоненту ззовні, а стан (state) - це його внутрішні динамічні дані.

// const App = () => {
//   let clicks = 0;

//   const handleClick = () => {
//     clicks = clicks + 1;
//   };

//   return <button onClick={handleClick}> Clicks:{clicks}</button>;
// };

// Обробник подій handleClick оновлює локальну змінну clicks. Проте дві речі заважають змінам бути видимими:
//     Локальні змінні не зберігаються між рендерами. Коли React рендерить цей компонент вдруге, він рендерить його з нуля — не враховує жодних змін у локальних змінних.
//     Зміни локальних змінних не викликають повторних рендерів. React не усвідомлює необхідності повторного рендерингу компонента з новими даними.

// Для оновлення компонента новими даними потрібно виконати дві речі:
//     Зберегти дані між рендерами.
//     Заставити React рендерити компонент з новими даними (повторний рендеринг).

// Перепишемо код з використанням стану. Щоб додати змінну стану, імпортуйте useState з React угорі файлу компонента.

const ClickCounter = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};
const App = () => {
  const [clickSecond, setClickSecond] = useState(0);

  const handleClicksSecond = () => {
    setClickSecond(clickSecond + 1);
  };
  return (
    // <div>
    //   <ButtonClicks />
    //   <ButtonHide>
    //     <p>Это грустный блок без котика</p>
    //   </ButtonHide>
    //   <ButtonHide>
    //     <h3>Это веселый блок с котиком :)</h3>
    //     <img
    //       src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHEAjQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcBAgj/xAA/EAACAQMCAwUFBAgEBwAAAAABAgMABBEFIRIxQQYTUWFxByIyQoEUobHBFSMzNHKR0fBSc4LxJDWissLS4f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EABwRAQEAAwEBAQEAAAAAAAAAAAABAhEhMQNRE//aAAwDAQACEQMRAD8Aw2iiigKKK6KDlFSa6Bqj2iXaWM7QMvEGC8x41GkYOCCPWksqdWOUUUUQKKK6oycUEr2a0G97RamljYKOIjid2+GNfE021jT5tJ1O60+5/a28pjYjkcciPIjBrc/ZpoC6B2UFzMmLy9HeOSNwuPdWsp9pxU9tL/HPEXFv17tarMt1e46iq0UUVZQUUUUBRRRQFFFFAVI9nrVL3XNPtZd45biNHHipYZ+6o6pTsvMlv2i02WTZFuY8nOMb86i+Jnra7ROKYRgDAGwHTyFVb2gdkVnjN7YQ8N0uSyoMd6PTx8PH+VWhZPs8oyN222OKk5BFcWhGPexnZsmskuuxsuO5qvnAg5rmKvGvdnbW6vJZrdu4dT+tjC+6T/iH5ivNt2a01rdW4ZpmKk8XHjOOmPHyrR/SaZr8stqXHG8jBI1Z2JwFUZJq3djuzTXWs2kd6pVi4dkPyoCNz5nlUrp0Nvp4kaxtRwcfC0uOIj6/0qQ0bMOpySxPwyK4Rw45jOxFVzztnF8fnJetXdR3aIuAqDAA8qwj2pWqJ2tu5RxJxEcRdcA+6OXjtW52lx3sUeCjYUFvHPT8qxH2saXcWfamW6u5Xkhuh3kGOg5FfLB+7FPnep+s4pJKD4QT5n+lJnzpQtH8sX1ZiaTY5PID0rszuUUUUBRRRQFFFFAV6XY5G1eaWtYJLqdIIULySMFUAZ3NBtel3D6hotjeKQJvsyGYsNi2Of1OaS/TjL+pEk0wB4WaNQAD4ffTeYt2f7P29jKrHEScRBHMf/c0/wBD+yx2CzrgSSnOCMcQ9DtWGXdr0LeQ0n0uKSNZ5pN3OQFHvZ86aXFqsVnJboWAaMuOAZ5HY58R0FTcwBV3zxcIJyBt6Co1ZEu3lti75kUgEc09POrSqZQ60fS4pM2uQGkiXIHxDpnzG+/rS8eki1vo7cKBMQxE3MgDh93fmDk1Idi2LRrHqUTLdWzsocjmMDcHz8KtQs4p5eF1AYjZh1q21dIDR7+CW0MrnDQuI5ejI/D942qve1ixN/oK3iLxiHfiHSpjtpNp/ZSyZ5InluL64LCFSBkqMFif8I2+pFJ6W51jQJBfQI6zIT3MQJyhA3wfXpUzc6i9mnz23OuVIa9Zrp+sXdonwRSFV8x0+6o+tLLRRRRQFFFFAV3FOLGyuL6cQ2sTSOd8Dp5nwq4aR2TtYOA6j/xM5P7KNvcH161XLOY+rY4XLxVNJ0m+1e6W3sLd5ZCcbDYetbN2K9nf6CVL2/ZZL0jYAbIP61ZuyekRabYoEt44uLfCKBgVPTNhaz5/S5TTRh85jdqP2jt2N1EGQEBdjjrmouUSGVEQ8QQYNWvXY+8QSY+HaqPe3TQzEWymSXB3J2XNcsXXL9SiTxIjRzEgYyVA6VS9W1nVV1YQ2s4s+IjgSPHUDmTUxpT/AKLm+13AMzts5kOSo8BnlSN52ctdUuO+s5kkQ7BXkMTjHynYg48dtq64al65Z7s4n+x+vTXoSC/4PtBUvE4Hxjkc+YP41fdPucyxhicis0sOzGpwX9pdK0EfcHCRxsSFXrv1q9QMQytywc1F1viZNzqC9tGkXF7daTfW0gHBG644WJByDkYB/vFNuyq31oLeS4V0ENqLaBHHC8u4Jcr8o22zWk2givLZQ/vlPhPUVG6jpdrpltd6vJJI3cI0h8QAOlXu7yK8l6+ePaHDKna3UTIEB7wDCkbbAb1WakNUuptY1W5ve7PHPIXKqvKmZj4PjYZ8Acmu88Z76Torp8q5UoFFFFBo2nWkum2Zito1jVubrzY9M+NO7e4u7Ru9h7s8/eZQcGnQ4u9YLGytts6EDG/Pp1pG4V3j4lIcciV6Gsdu23xadE7XShhHqLJvsCOVW37Yk8QdTkEZFY9h45BgcueOlTOh61PYkR57yL5kJ/CosF01B+MFflxUELW3id2K4LHIOKk0mS6thPbvxRnmMYKmkXReLhlGQdwfCqLIG7jhlCoInyvVPyrunWDPOOJCqkgcTYy30FTU8GF4kIJ8aQtpTDLxNk46VeK1ZI1SOJUUchUZq11+j4O+4Xb3gvujOM9aXjmDQK45tnGWxSXHKZeFRleu22PWpRKW7K609xcRi3IeNhzB86s3aiGO97O6hbTBWSS3bKs3CDtsCfCq1Y28VvqLXdvGqIsZMjA7A88/yqvdpe3tvq1vcaTpZDFwys00eVkA+JQvXb+fSumEp988crLJpmOqWt3CWQxrGq7svcB/qd2IHrj0qFlkeWPge9iZc54eFhj/AKamJJC6t9hDDuT79iXPeQ4+aNvmXy3x4daZvcfaz+s7q8/zMRSj69fvruxol1VcAOGPXAP50nT+4s4wSYRKCBlo2HvKPTqPMUxOOlSOUUUUGv2l1bD9WzMzjOx4mUHlueVdGGdpQiiRyE91tue5+6kIZSfejiRIBtxscfy8SKcXItSAWLZkGRw4rG2m88QIw6cD9MjA9aYyRlHXA22xTxgwROHMgb4UO5IPl05V6YIfc4SW+ZWGMelEJTs5fm3mw28TbOp/GrhNaKFDrhopN1IrOlPdMvdnrnc1bNH7SR26RWd8C0L5CyEbLUWbNpA2p4xj4fCnVtpiS4MkfPmKdm34QGX3kJyGG+xqSskyB1zSTqLTeHRbVhkx7nqDVQ7c65Y9n76G04HlHDxuFf4Rtz+laFPJHaW7yvsiKWPoK+bPaTrk2qa3JKQoUgqNhlfLI5jGK7447crlYe6/7RbzU7JrO0UWloSQwX43HgTVL+1vDOsltIVKSCRCOhpoTmgV1kkcrbUxrDh5oNStgYRIAw4T8B8j5EMPRRSLtBqS8fCIrsD3wg2l8wPHxA9fT1byd9pJtmO+XKY8Vwfvzj6VFqSrAg7jrUoOFaWNQFfiQbjDcj5eFcLpPnj4UkPzYwG9fCukrc+82Fl8ej/0NIEFScgg+FB2RGRsMMGvFe+8PDwtgr0HhXig2GW2adiyHhQH9mgxgeP9+dOrO3gLo0qltiAueZ8ajftaxRXHeNwjBbfqemfXelbm57r3Wz3kfJUGzN4msem3Z5MgabhC4JwBj5T0/CkHjWORTxcS8OAxXBz6/SuRcVxK0aOCh3RulOJlZgIYZQVK8LgDOQDz/pUBnLbu4MtugKDc8J6elNr0FokdPjDA8JPOpW0tUE/AZWyo4fe5H6Vy90iKZzLbMFnAGVXYGp2jS79gr4X+kLbzAd5B+rYHy5VYorfu2JXl5VlGgzX2izyTISNxxoxwDWj6VqlxcRK8hjaNhzjPKrzSllhDt5fGx7L3kvugsnACdufPevmjVZe/KS5yJRnOfmHj+H0rcva3qEZ0EWolCs5ZscWDgA/7/SsF3aOS2k+NTxL69R9a7YuORoaBRXKuocJOYjCyEZjBJ88mvFwgjkZV+HmvmDypKlW9+EeKbfT+80CeaU7ziGJPeA5HqKSooPTYzsdq80UUGiHlL/En5VJXv/l/60UVkazqz+K49E/7qVtP3Z/4mooqKmPUX75/rH4U8m/aw/xj8KKKJh5c84v8pvwFTPZH/lf1rlFTPVclF9svxR/6PzrLn/eIf4I/yoorTj4zZemsn7RvWvNFFWVFKpyb+E12igSrlFFAUUUUH//Z"
    //       alt="котик"
    //     />
    //   </ButtonHide>
    // </div>

    <>
      <ClickCounter value={clickSecond} onUpdate={handleClicksSecond} />
      <ClickCounter value={clickSecond} onUpdate={handleClicksSecond} />
    </>
  );
};
export default App;
