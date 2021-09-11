import React from "react";
import { useSelector } from "react-redux";
import ShowNotesCard from "../ShowNotesCard";
const Archive = () => {
  const state = useSelector((state) => state.todo);
  const todo = Object.values(state)[0];
  const archieve = todo.filter((tod) => tod.isArchieved && !tod.isTrashed);
  console.log(archieve);
  return (
    <>
      <h1>Archive</h1>
      {archieve.map((tod, index) => {
        return (
          <div key={index}>
            <h1>{tod.title}</h1>
            <ShowNotesCard show={tod} ind={index} />
          </div>
        );
      })}
    </>
  );
};
export default Archive;
