import React from "react";
import { useSelector } from "react-redux";
import NotesCard from "../NotesCard";
import ShowNotesCard from "../ShowNotesCard";
import "./Home.css";
const Home = () => {
  const state = useSelector((state) => state.todo);
  const todo = Object.values(state)[0];
  const lenpinned = todo.filter(
    (tod) => tod.isPinned && !tod.isArchieved && !tod.isTrashed
  );
  const lenothers = todo.filter(
    (tod) => !tod.isPinned && !tod.isArchieved && !tod.isTrashed
  );

  const RenderPinned = () =>
    todo.map((tod, index) => {
      if (tod.isPinned && !tod.isArchieved && !tod.isTrashed) {
        return <ShowNotesCard key={index} show={tod} ind={index} />;
      } else {
        return null;
      }
    });

  const RenderOthers = () =>
    todo.map((tod, index) => {
      if (!tod.isPinned && !tod.isArchieved && !tod.isTrashed) {
        return <ShowNotesCard key={index} show={tod} ind={index} />;
      } else {
        return null;
      }
    });

  return (
    <>
      <NotesCard />

      {lenpinned.length > 0 && <h1 style={{ marginTop: "20px" }}>Pinned</h1>}
      <div className="test">
        <RenderPinned />
      </div>
      {lenothers.length > 0 && <h1 style={{ marginTop: "20px" }}>Others</h1>}
      <div className="test">
        <RenderOthers />
      </div>
    </>
  );
};
export default Home;
