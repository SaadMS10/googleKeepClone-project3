import React from "react";
import { useLocation } from "react-router-dom";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import { Empty } from "antd";
import { useSelector } from "react-redux";
import ShowNotesCard from "../ShowNotesCard";
const Search = (props) => {
  const notes = useSelector((state) => state.todo);
  const todo = Object.values(notes)[0];
  const location = useLocation();
  const { value } = location;

  let showingnotes;
  if (value) {
    const match = new RegExp(escapeRegExp(value), "i");
    showingnotes = todo.filter((books) => match.test(books.title));
  } else {
    showingnotes = todo;
  }

  showingnotes.sort(sortBy("name"));

  return (
    <div className="test">
      {value?.length && showingnotes?.length ? (
        showingnotes.map((tod, index) => (
          <ShowNotesCard key={index} show={tod} ind={index} />
        ))
      ) : (
        <Empty description="No Result" />
      )}
    </div>
  );
};
export default Search;
