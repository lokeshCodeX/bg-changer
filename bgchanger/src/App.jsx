import { useState } from 'react';

function App() {
  const [color, setColor] = useState("DodgerBlue");

  const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
    { name: "Orange", value: "orange" },
    { name: "Purple", value: "purple" },
    { name: "DodgerBlue", value: "DodgerBlue" }
  ];

  return (
    <div style={{
      backgroundColor: color,
      height: "100vh",
      margin: 0,
      padding: 0,
      transition: "background-color 0.3s ease",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        padding: "1rem",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)"
      }}>
        {colors.map((c) => (
          <button
            key={c.value}
            onClick={() => setColor(c.value)}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: c.value,
              border: "2px solid white",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "transform 0.2s",
              outline: color === c.value ? "3px solid black" : "none"
            }}
            title={c.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
