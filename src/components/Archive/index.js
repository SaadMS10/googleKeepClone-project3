import React from "react";
import { useSelector } from "react-redux";
import ShowNotesCard from "../ShowNotesCard";
const Archive = () => {
  const state = useSelector((state) => state.todo);
  const todo = Object.values(state)[0];
  return (
    <>
      <h1>Archive</h1>
      <div className="test">
        {todo.map((tod, index) => {
          if (tod.isArchieved && !tod.isTrashed) {
            return <ShowNotesCard key={index} show={tod} ind={index} />;
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};
export default Archive;
