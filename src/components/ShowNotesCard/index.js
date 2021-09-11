import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Modal, Button } from "antd";
import "./ShowNotesCard.css";
import {
  BgColorsOutlined,
  CheckSquareOutlined,
  CaretDownFilled,
  CaretUpOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import NotesCard from "../NotesCard";
const ShowNotesCard = (props) => {
  const {show,ind}=props
  console.log(show)
  const { Meta } = Card;
  const notes = useSelector((state) => state.showo);
  const dispatch = useDispatch();

  const [isColorPickerOpen, setColorPickerOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editstate, setEditState] = useState("");
  const [editindex, setEditIndex] = useState(0);

  const showModal = (editstate, index) => {
    setEditState(editstate);
    setEditIndex(index);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // var showay = new Date();
  // var time = showay.getHours() + ":" + showay.getMinutes() + ":" + showay.getSeconds(); Date
  
  return (
    <>
       
              <div key={ind} >
                
                
                <Card
                  className="shownotes"
                  style={{
                    backgroundColor: show?.bg_color,
                    borderColor: show?.bg_Color,
                  }}
                  hoverable={true}
                >
                  
                
               
                <Meta  onClick={() => showModal(show, ind)}  title={show.title} description={show.desc}/> 
                
                </Card>

                <Modal
                  visible={isModalVisible}
                  
                  closeIcon={<CloseOutlined />}
                  className="Modal"
                  width="620px"
                  onOk={handleOk}
                  onCancel={handleCancel}
                  closable={false}
             
                  footer={
                  null
                  }
                >
                  <NotesCard editstate={editstate} editindex={editindex} setIsModalVisible={setIsModalVisible}/>
                </Modal>
              </div>
     
 
    </>
  );
};
export default ShowNotesCard;
