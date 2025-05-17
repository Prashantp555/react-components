import React, { useState } from "react";
import '../styles/TagStyles.css'
function ChipsInput() {
  const [data, setData] = useState('');
  const [chip, setChip] = useState([]);
  const [uniqueId, setUniqueId] = useState(0);

  function handleChange(event){
    setData(event.target.value);
  }

  function handleSubmit(event) {
    if (event.key === 'Enter' && data.trim() !== "")
    {
      const newChip = {
        id: uniqueId,
        label: data.trim(),
      };
      setChip([...chip, newChip]);
      setUniqueId(uniqueId + 1);
      setData("")
    }
  }
  function handleDelete(deleteId) {
    setChip(chip.filter((chip)=> chip.id !== deleteId))
  }

  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input 
        type="text" 
        value={data}
        onChange={handleChange}
        onKeyDown={handleSubmit}
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
      />
      <div style={{
        margin: "20px",
        display: "flex",
        flexWrap: "wrap",
        alignItems:"center"
      }}>
        {chip.map((item) => (
          <div key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "5px",
              backgroundColor: "lightgray",
              borderRadius: "20px",
              padding: "5px 10px",
            }}
          >
            <span>{item.label}</span>
            <button onClick={() => handleDelete(item.id)}
              style={{
                background: "transparent",
                border: "none",
                marginLeft: "8px",
                cursor: "pointer",
                color: "red",
              }}>X</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ChipsInput;