import React, { useState } from "react";
import styled from "styled-components";

const Completed = () => {
  const [listCompleted, setList] = useState([
    "Task done",
    "Task done",
    "Task done",
  ]);

  const handleDelete = () => {
    const newList = listCompleted.splice(1, 2);
    setList(newList);
  };

  return (
    <SCompleted>
      <div className="done">
        {listCompleted.map((item, index) => {
          return (
            <div className="work" key={index}>
              <input type="checkbox" name="work1" checked />
              <label for="work1">{item}</label>
              <i class="fa fa-trash-o" onClick={handleDelete}></i>
            </div>
          );
        })}
      </div>

      <button>
        <i class="fa fa-trash-o"></i> Delete all
      </button>
    </SCompleted>
  );
};

export default Completed;

const SCompleted = styled.div`
  margin-top: -450px;
  /* margin-left: -315px; */
  .done {
    display: flex;
    flex-direction: column;
    input {
      border: 1px solid gainsboro;
      width: 20px;
      height: 20px;
    }
    label {
      font-size: 22px;
      text-decoration: line-through;
    }
    i {
      font-size: 20px;
      margin-left: 420px;
    }
  }
  button {
    margin-top: 30px;
    margin-left: 450px;
    width: 120px;
    height: 40px;
    color: white;
    background-color: rgb(247, 64, 64);
    border: 0;
    border-radius: 5px;
  }
`;
