import React, { useState } from "react";
import { Layout, Input, Menu, Row, Col } from "antd";
import "./Layout.css";
// import Search from "antd/lib/transfer/search";

import logo from "../../src/assets/google-keep-icon.png";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BulbOutlined,
  DeleteOutlined,
  CloseOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import Routing from "../routes";
import { Link, useHistory, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [search,setSearch]=useState("")
  const location = useLocation();
  const { pathname } = location;
  const history = useHistory();
  const toggleCollapsed = () => setCollapsed(!collapsed);
  const onSearch = (value) => {
    history.push({
      pathname: "/search",
      search: `?query=${value}`,
      value: value,
    });
  };
  let arr = ["1"];
  if (pathname === "/archive") {
    arr = ["2"];
  } else if (pathname === "/trash") {
    arr = ["3"];
  }

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: "white" }}
      >
        <div className={"logo " + (collapsed ? "collapsed" : "")}>
          <img src={logo} alt="Google-Keep-Icon" />
          <h1 style={{ display: collapsed ? "none" : "block" }}>KEEP</h1>
        </div>
        <Menu
          theme="light"
          mode="inline"
          style={{ color: "#E9AE0D" }}
          defaultSelectedKeys={arr}
        >
          <Menu.Item
            key="1"
            icon={<BulbOutlined style={{ fontSize: "25px" }} />}
          >
            <Link to="/">Notes</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<ArrowDownOutlined style={{ fontSize: "25px" }} />}
          >
            <Link to="/archive">Archive </Link>
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<DeleteOutlined style={{ fontSize: "25px" }} />}
          >
            <Link to="/trash">Trash </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: "white" }}
        >
          <Row>
            <Col>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => toggleCollapsed(),
                }
              )}
            </Col>
            <Col span="12">
              <Input
                style={{ verticalAlign: "middle", marginLeft: "200px" }}
                placeholder="Search By Title"
                value={search}
                onChange={(event) => {
                  onSearch(event.target.value);
                  setSearch(event.target.value)
                }}
              />
              
            </Col>

            <Col span="4">
              {
                search.length > 0 &&   <button
                className="btn"
                onClick={() => {
                  history.push("/");
                  setSearch("")
                }}
                title="Clear"
              >
                <CloseOutlined />
              </button>
              }
            
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: "calc(100vh - 64px)",

            backgroundColor: "#E9AE0D",
          }}
        >
          <Routing />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
