import React from "react";
import styled from "styled-components";
import { useState } from "react";

const All = () => {
  const [listAll, setListAll] = useState([
    "Do coding challenges",
    "Do coding challenges",
    "Do coding challenges",
  ]);

  const [value, setValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const update = [...listAll, value];
    setListAll(update);
    localStorage.setItem("listAll", value);
  };

  const [selected, setSelected] = useState(0);

  return (
    <SAll>
      <form className="add" onSubmit={handleAdd}>
        <input
          placeholder="add details"
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add</button>
      </form>

      <div className="body">
        {listAll.map((item, index) => {
          return (
            <div className="work" key={index}>
              <input
                type="checkbox"
                name="work1"
                style={{
                  border: "1px solid gainsboro",
                  width: "20px",
                  height: "20px",
                }}
                onClick={() => setSelected(1)}
              />
              <label for="work1" className={selected === 1 ? "done" : ""}>
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </SAll>
  );
};

export default All;

const SAll = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -450px;
  .add {
    display: flex;
    gap: 1rem;
    input {
      width: 440px;
      height: 40px;
      border-radius: 10px;
      font-size: 15px;
      border: 2px solid gainsboro;
      padding-left: 10px;
    }
    button {
      width: 100px;
      border-radius: 10px;
      border: 0;
      font-size: 15px;
      background-color: rgb(60, 60, 251);
      color: white;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;

    label {
      font-size: 22px;
    }
    .done {
      font-size: 22px;
      text-decoration: line-through;
    }
  }
`;
