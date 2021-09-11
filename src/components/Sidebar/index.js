import React, { useState } from "react";
import { Menu, Button} from "antd";
import  {DeleteOutlined }  from '@ant-design/icons'
import styled from "styled-components";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Row, Col} from "antd";


const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
 ;

  const toggleCollapsed = () => setCollapsed(!collapsed);

  // const todoState =  useSelector((store)=> store.todo)


  const Header = styled.div`
    width: 100%;
    background-color: white;
    border-bottom: 1px solid rgba(1, 1, 1, 0.6);
  `;

  console.log(collapsed, "collapsed");

  return (
    <>
      <Row
        style={{
          width: "100%",
          backgroundColor: "white",
          borderBottom: "1px solid rgba(1,1,1,0.6)",
          padding: 20,
        }}
      >

        <Col span={6} xs={{ order: 1 }}>
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{ width: 100, backgroundColor: "white", border: "none" }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined style={{ color: "black" }} />
            ) : (
              <MenuFoldOutlined style={{ color: "black" }} />
            )}
          </Button>
        </Col>
      </Row>

      <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
          <DeleteOutlined />
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default Sidebar;
