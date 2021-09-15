import React, { useState } from "react";
import { Card, Modal } from "antd";
import "./ShowNotesCard.css";
import { CloseOutlined } from "@ant-design/icons";
import NotesCard from "../NotesCard";
const ShowNotesCard = (props) => {
  const { show, ind } = props;
  const { Meta } = Card;

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

  return (
    <>
      <div key={ind}>
        <Card
          className="shownotes"
          style={{
            backgroundColor: show?.bg_color,
            borderColor: show?.bg_Color,
          }}
          hoverable={true}
          onClick={() => showModal(show, ind)}
        >
          <Meta title={show?.title} description={show?.desc} />
        </Card>

        <Modal
          visible={isModalVisible}
          closeIcon={<CloseOutlined />}
          className="Modal"
          width="620px"
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          footer={null}
        >
          <NotesCard
            editstate={editstate}
            editindex={editindex}
            setIsModalVisible={setIsModalVisible}
          />
        </Modal>
      </div>
    </>
  );
};
export default ShowNotesCard;
