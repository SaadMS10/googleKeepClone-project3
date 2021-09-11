import React, { useState } from "react";
import { Col, Layout, Row,Input,Button,Menu } from "antd";
import Sidebar from "../components/Sidebar";
// import Search from "antd/lib/transfer/search";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import NotesCard from "../components/NotesCard";
import ShowNotesCard from "../components/ShowNotesCard";
import Home from "../components/Home";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Routing from "../routes";
import { Link } from "react-router-dom";




const { Header, Footer, Sider, Content } = Layout;

const AppLayout = () => {
  const dispatch = useDispatch();
  const onSearch = (value) => dispatch(addTodo(value))
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(!collapsed);
  const {Search} = Input;
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor:"white"}}>
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/">abc</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/archive">Menu </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 ,backgroundColor:"white"}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: ()=> toggleCollapsed(),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
          
            padding: 24,
            minHeight: "calc(100vh - 64px)",
    
          
          }}
        >
        <Routing/>
        </Content>
      </Layout>
    </Layout>
  );

  // return (
  //   <>
  //     <Layout>
  //       <Sider  trigger={null} collapsible collapsed={collapsed}>
  //         <Sidebar />
  //       </Sider>
       
  //       <Layout>
  //         <Header> 
  //           <Row align={"middle"} justify="center"
  //           >
  //              <Col span={6} xs={{ order: 1 }}>
  //         <Button
  //           type="primary"
  //           onClick={toggleCollapsed}
  //           style={{ width: 100, backgroundColor: "white", border: "none" }}
  //         >
  //           {collapsed ? (
  //             <MenuUnfoldOutlined style={{ color: "black" }} />
  //           ) : (
  //             <MenuFoldOutlined style={{ color: "black" }} />
  //           )}
  //         </Button>
  //       </Col>

  //             <Col span={12} flex="align-center" >
  //               <Search
  //                 placeholder="input search text"
  //                 enterButton="Search"
  //                 size="large"
  //                 onSearch={onSearch}
  //               />
  //             </Col>
  //           </Row>
  //         </Header>
  //         <Content>
  //           {/* <NotesCard/> */}
          
  //         </Content>
  //         <Footer> <Home/></Footer>
  //       </Layout>
  //     </Layout>
  //   </>
  // );
};

export default AppLayout;
