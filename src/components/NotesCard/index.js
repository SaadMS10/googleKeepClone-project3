import React, { useState, useEffect } from "react";

import { Card, Col, Row } from "antd";
import "./NotesCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../../redux/action";
import {
  BgColorsOutlined,
  CheckSquareOutlined,
  SaveOutlined,
  PushpinOutlined,
  CaretDownFilled,
  CaretUpOutlined,
  PushpinFilled,
  DeleteOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import ShowNotesCard from "../ShowNotesCard";
import Home from "../Home";

const NotesCard = (props) => {
      
      const { editstate, editindex ,setIsModalVisible} = props;

  const [editNoteState, setEditNoteState] = useState({});

  useEffect(() => {
    setEditNoteState(editstate);
    
  }, [editstate]);
  const [noteState, setNoteState] = useState({
    id: "",
    title: "",
    isList: false,
    desc: "",
    isPinned: false,
    isArchieved: false,
    bg_color: "",
    isTrashed: false,
    todolistItem: [
      // {id:1, text: "dsad", isChecked: false},
      // {id:1, text: "dsad", isChecked: false},
    ],
  });

  const [isColorPickerOpen, setColorPickerOpen] = useState(false);

  const ReduxState = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(editNoteState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (editstate) {
      console.log("in edit ", name,value);
      setEditNoteState({
        ...editNoteState,
        [name]: value,
      });
    } else {
      setNoteState({
        ...noteState,
        id: uuidv4(),
        [name]: value,
      });
    }
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (editstate) {
      console.log("in edit ", editindex);
      dispatch(editTodo(editindex, editNoteState));
      setIsModalVisible(false);

      Object.values(ReduxState)[0].map((state, index) => {
        if (index === editindex) {
          setEditNoteState({ ...state });
        }
      });
    } else {
      dispatch(addTodo(noteState));
      console.log("in add ");

      setNoteState({
        id: "",
        title: "",
        isList: false,
        desc: "",
        isPinned: false,
        isArchieved: false,
        bg_color: "",
        isTrashed: false,
        todolistItem: [],
      });
    }
  };

  const setBgColor = (colorValue) => {
    if(editstate){
      setEditNoteState({
        ...editNoteState,
        bg_color: colorValue,
      });
    }
    else{
    setNoteState({
      ...noteState,
      bg_color: colorValue,
    });
  };
}

var titles
let title=()=>{

  if(editstate){
    if(editNoteState.isPinned) { titles="UnPin"
    return(
      <PushpinFilled/>
    )
    }
    else{titles="Pin"
    return(
      <PushpinOutlined/>
    )}
  
  }
  else{
    if(noteState.isPinned){titles="UnPin"
      return(
        <PushpinFilled/>
      )
    }
    else{ titles="Pin"
      return(
        <PushpinOutlined/>
      )}
  }


}
title()


  const { todolistItem } = noteState;
 
  return (
    <>
    <Card className="note-card"    style={{ backgroundColor:editstate ?  editNoteState.bg_color : noteState.bg_color }}>
      <form autoComplete="off" onSubmit={onSubmitHandler}>
        <div>
          <input
            type="text"
            name="title"
            className="note-input"
            value={(editstate ? editNoteState?.title || '' : noteState.title || '')}
         
            placeholder="Title"
            onChange={(e) => onChangeHandler(e)}
            required
            style={{ backgroundColor:editstate ?  editNoteState.bg_color : noteState.bg_color }}
          />
          <button
            className="btn-actions"
            onClick={() =>{
              if(editstate){
                setEditNoteState({
                  ...editNoteState,
                  isPinned:!editNoteState.isPinned 
                });
              }
              else{
              setNoteState({ ...noteState, isPinned: !noteState.isPinned })
              }
            }
            }
            type="button"
            title={ titles}
          >
            {title()}
          </button>
        </div>
        <div>
          {noteState.isList ? (
            <>
              {todolistItem.map((item, index) => {
                return (
                  <Row>
                    <Col>
                      <input
                        type="checkbox"
                        name="text"
                        value={todolistItem[index]?.text}
                      />
                    </Col>
                    <Col>
                      <input
                        type="text"
                        name="isChecked"
                        value={todolistItem[index]?.isChecked}
                      />
                    </Col>
                    <Col>Delete</Col>
                  </Row>
                );
              })}
            </>
          ) : (
            <input
              type="text"
              name="desc"
              className="note-input"
              value={editstate ? editNoteState.desc || '' : noteState.desc || ''}
              placeholder="Description"
              onChange={(e) => onChangeHandler(e)}
              style={{ backgroundColor:editstate ?  editNoteState.bg_color : noteState.bg_color }}
              required
            />
          )}
        </div>
        <Row>
          <button
            className="btn-actions"
            onClick={() =>
              (editstate ?    setEditNoteState({ ...editNoteState, isList: !editNoteState.isList }) :  setNoteState({ ...noteState, isList: !noteState.isList }) )
            
            }
            type="button"
          >
            <CheckSquareOutlined />
          </button>
          <button
            className="btn-actions"
            onClick={() =>
              setNoteState({
                ...noteState,
                isArchieved: !noteState.isArchieved,
              })
            }
            type="button"
            title={noteState.isArchieved ? "UnArchive" : "Archive"}
          >
            {noteState.isArchieved ? <CaretDownFilled /> : <CaretUpOutlined />}
          </button>

          <div
            className={
              "color-icon-section btn-actions " +
              (isColorPickerOpen ? "active" : "")
            }
            onClick={() => setColorPickerOpen(!isColorPickerOpen)}
          >
            <BgColorsOutlined style={{ marginLeft: "9px", marginTop: "7px" }} />
            <div className="color-section-overlay">
              <button
                style={{ backgroundColor: "#CCFF90" }}
                onClick={() => setBgColor("#CCFF90")}
                type="button"
                title="Green"
              >
                +
              </button>
              <button
                style={{ backgroundColor: "#91534E" }}
                onClick={() => setBgColor("#91534E")}
                type="button"
                title="Dark Brown"
              >
                +
              </button>
              <button
                style={{ backgroundColor: "#FBBC04" }}
                onClick={() => setBgColor("#FBBC04")}
                title=" Dark Yellow"
                type="button"
              >
                +
              </button>
              <button
                style={{ backgroundColor: "#FFF475" }}
                onClick={() => setBgColor("#FFF475")}
                type="button"
                title="Light Yellow"
              >
                +
              </button>
              <button
                style={{ backgroundColor: "#E8EAED" }}
                onClick={() => setBgColor("#E8EAED")}
                type="button"
                title="Gray"
              >
                +
              </button>
              <button
                style={{ backgroundColor: "#E6C9A8" }}
                onClick={() => setBgColor("#E6C9A8")}
                type="button"
                title="Light Brown"
              >
                +
              </button>
              <button
                style={{ backgroundColor: "#FDCFE8" }}
                onClick={() => setBgColor("#FDCFE8")}
                type="button"
                title="Pink"
              >
                +
              </button>
              <button
                style={{ backgroundColor: "#D7AEFB !important" }}
                onClick={() => setBgColor("#D7AEFB")}
                type="button"
                title="Purple"
              >
                +
              </button>
            </div>
          </div>
          <button
            className="btn-actions"
            type="submit"
            style={{ marginLeft: "72%" }}
          >
            <SaveOutlined />
          </button>
        </Row>
      </form>
    </Card>
  
    </>
  );
};

export default NotesCard;
