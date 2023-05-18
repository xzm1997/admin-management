import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import MainMenu from "@/components/MainMenu"

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const navigateTo = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //! 选中栏目2再刷新，导航定位的栏目1，右侧页面显示2的内容
  // todo: 需要使用useLocation获取当前pathname，然后放到 defaultSelectedKeys 中
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <MainMenu></MainMenu>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ paddingLeft: '16px', background: colorBgContainer }}>
          <Breadcrumb style={{ lineHeight:'64px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '16px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 480, background: colorBgContainer }}>
            {/* 窗口部分 */}
            {/* Outlet为旧版写法，应使用useRoutes进行识别 */}
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', padding:0, lineHeight:'48px' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default View;
