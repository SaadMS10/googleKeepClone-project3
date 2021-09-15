import React, { useState, useEffect } from "react";
import { showAlert } from "../../utils";
import { Card, Row } from "antd";
import "./NotesCard.css";
import { useDispatch } from "react-redux";
import { addTodo, editTodo, ThrashTodo, deleteTodo } from "../../redux/action";
import {
  BgColorsOutlined,
  SaveOutlined,
  PushpinOutlined,
  CaretDownFilled,
  CaretUpOutlined,
  PushpinFilled,
  DeleteOutlined,
  DeleteRowOutlined,
  RestOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

const NotesCard = (props) => {
  const { editstate, editindex, setIsModalVisible } = props;

  const [editNoteState, setEditNoteState] = useState([]);
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
  });

  const [isColorPickerOpen, setColorPickerOpen] = useState(false);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (editstate) {
      setEditNoteState({
        ...editstate,
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
      dispatch(editTodo(editindex, editNoteState));
      setIsModalVisible(false);
    } else {
      dispatch(addTodo(noteState));

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
    if (editstate) {
      setEditNoteState({
        ...editNoteState,
        bg_color: colorValue,
      });
    } else {
      setNoteState({
        ...noteState,
        bg_color: colorValue,
      });
    }
  };

  let titles;
  let title = () => {
    if (editstate) {
      if (editNoteState.isPinned) {
        titles = "UnPin";
        return <PushpinFilled />;
      } else {
        titles = "Pin";
        return <PushpinOutlined />;
      }
    } else {
      if (noteState.isPinned) {
        titles = "UnPin";
        return <PushpinFilled />;
      } else {
        titles = "Pin";
        return <PushpinOutlined />;
      }
    }
  };
  var archives;
  let archive = () => {
    if (editstate) {
      if (editNoteState.isArchieved) {
        archives = "UnArchive";
        return <CaretDownFilled />;
      } else {
        archives = "Archive";
        return <CaretUpOutlined />;
      }
    } else {
      if (noteState.isArchieved) {
        archives = "UnArchive";
        return <CaretDownFilled />;
      } else {
        archives = "Archive";
        return <CaretUpOutlined />;
      }
    }
  };

  archive();
  let val = false;
  if (editstate?.isTrashed) {
    val = false;
  } else {
    val = true;
  }

  return (
    <Card
      className="note-card"
      style={{
        backgroundColor: editstate
          ? editNoteState.bg_color
          : noteState.bg_color,
      }}
    >
      <form autoComplete="off" onSubmit={onSubmitHandler}>
        <div>
          <input
            type="text"
            name="title"
            className="note-input"
            value={
              editstate ? editNoteState?.title || "" : noteState.title || ""
            }
            placeholder="Title"
            onChange={(e) => onChangeHandler(e)}
            required
            style={{
              backgroundColor: editstate
                ? editNoteState.bg_color
                : noteState.bg_color,
            }}
          />
          {!editNoteState?.isTrashed && (
            <button
              className="btn-actions"
              onClick={() => {
                if (editstate) {
                  setEditNoteState({
                    ...editNoteState,
                    isPinned: !editNoteState.isPinned,
                  });
                } else {
                  setNoteState({ ...noteState, isPinned: !noteState.isPinned });
                }
              }}
              type="button"
              title={titles}
            >
              {title()}
            </button>
          )}
        </div>
        <div>
          <input
            type="text"
            name="desc"
            className="note-input"
            value={editstate ? editNoteState.desc || "" : noteState.desc || ""}
            placeholder="Description"
            onChange={(e) => onChangeHandler(e)}
            style={{
              backgroundColor: editstate
                ? editNoteState.bg_color
                : noteState.bg_color,
            }}
            required
          />
        </div>
        {!editstate?.isTrashed ? (
          <Row>
            <button
              className="btn-actions"
              onClick={() => {
                if (editstate) {
                  setEditNoteState({
                    ...editNoteState,
                    isArchieved: !editNoteState.isArchieved,
                  });
                } else {
                  setNoteState({
                    ...noteState,
                    isArchieved: !noteState.isArchieved,
                  });
                }
              }}
              type="button"
              title={archives}
            >
              {archive()}
            </button>

            <div
              className={
                "color-icon-section btn-actions " +
                (isColorPickerOpen ? "active" : "")
              }
              onClick={() => setColorPickerOpen(!isColorPickerOpen)}
            >
              <BgColorsOutlined
                style={{ marginLeft: "9px", marginTop: "7px" }}
              />
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
            {editstate ? (
              <button
                className="btn-actions"
                onClick={() => {
                  dispatch(ThrashTodo(editindex, val));

                  setIsModalVisible(false);
                }}
                type="button"
              >
                <DeleteOutlined />
              </button>
            ) : null}

            <button
              className="btn-actions"
              type="submit"
              style={{ marginLeft: "75%" }}
            >
              <SaveOutlined />
            </button>
          </Row>
        ) : (
          <Row>
            <button
              className="btn-actions"
              onClick={() => {
                dispatch(deleteTodo(editindex));
                setIsModalVisible(false);
                showAlert("Note Deleted ","success")
              }}
              type="button"
              title="Delete Forever"
            >
              <DeleteRowOutlined />
            </button>

            <button
              className="btn-actions"
              onClick={() => {
                dispatch(ThrashTodo(editindex, val));

                setIsModalVisible(false);
              }}
              type="button"
              title="Restore"
            >
              <RestOutlined />
            </button>
          </Row>
        )}
      </form>
    </Card>
  );
};

export default NotesCard;
