import React, { useEffect, useState } from "react";

export default function Lift() {
  const floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const floorHeight = 43; // each floor height in px
  const [currentFloor, setCurrentFloor] = useState(1);
  
  const handleLift = (e) =>{
    const targetFloor = Number(e.target.value);
    const direction = targetFloor > currentFloor ? 1 : -1;
    let delay = 0;
    for(let i= currentFloor; i != (targetFloor + direction); i += direction){
        setTimeout(()=>{
            setCurrentFloor(i);
        }, delay* 1000)
        delay++;
    }
  }

  return (
    <div>
      <h2>Lift Game</h2>

      <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
        {/* Floor Buttons */}
        <div style={{ display: "flex", flexDirection: "column-reverse" }}>
          {floors.map((floor) => (
            <button
              key={floor}
              style={{
                margin: "5px 0",
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                cursor: "pointer",
                background: "white",
              }}
              value={floor}
              onClick={handleLift}
            >
              Floor {floor}
            </button>
          ))}
        </div>

        {/* Building Box */}
        <div
          style={{
            height: floorHeight * floors.length + "px",
            width: "200px",
            border: "2px solid black",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          {floors.map((floor) => (
            <div
              key={floor}
              style={{
                height: floorHeight + "px",
                borderTop: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                background: floor == currentFloor ? 'green' : "white"
              }}
            >
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


