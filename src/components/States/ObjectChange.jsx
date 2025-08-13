import { useState, useEffect } from "react";
export default function ObjectChange() {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });
  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };
  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  useEffect(() => {
    console.log("First updated: ", values.x);
  }, [values.x]);

  useEffect(() => {
    console.log("Y updated:", values.y);
  }, [values.y]);

  useEffect(() => {
    console.log("X and Y updated:", values.x, values.y);
  }, [values.x, values.y]);
  return (
    <div>
      <p>
        x:{values.x}, y:{values.y}
      </p>
      <div>
        <button onClick={updateX}>Update X</button>
        <button onClick={updateY}>Update Y</button>
      </div>
    </div>
  );
}
