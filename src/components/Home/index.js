import React from "react";
import { useSelector } from "react-redux";
import NotesCard from "../NotesCard";
import ShowNotesCard from "../ShowNotesCard";
const Home = () => {
  const state = useSelector((state) => state.todo);
  const todo = Object.values(state)[0];

  const RenderPinned = () => {
    const pinned = todo.filter(
      (tod) => tod.isPinned && !tod.isArchieved && !tod.isTrashed
    );
    if (pinned.length) {
      return (
        <div style={{marginTop:"20px"}}>
          <h1>Pinned</h1>
          <div style={{ display: "flex" }}>
            {pinned.map((tod, index) => (
              <ShowNotesCard key={index} show={tod} ind={index} />
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const RenderOthers = () => {
    const others = todo.filter(
      (tod) => !tod.isPinned && !tod.isArchieved && !tod.isTrashed
    );
    if (others.length) {
      return (
        <div style={{marginTop:"20px"}}>
          <h1>Others</h1>
          <div style={{ display: "flex" }}>
            {others.map((tod, index) => (
              <ShowNotesCard key={index} show={tod} ind={index} />
            ))}
          </div>
          </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <NotesCard />
      <RenderPinned />
      <RenderOthers />
    </>
  );
};
export default Home;
