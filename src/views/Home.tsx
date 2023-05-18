import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', 'page3', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menuClick = (e: {key:string}) => {
    console.log("Click: ", e.key)
    //? 点击跳转对应路由: 编程式导航 HOOK
    navigateTo(e.key)
  }
  const [openKeys, setOpenkeys] = useState([''])
  const handleOpenChange = (keys: string[]) => {
    //? keys 是一个数组，记录了当前哪一项是展开的（用key来记录）
    //? 展开或回收某项菜单时执行此函数
    //// console.log(keys)
    // todo: 将数组修改为最后一项，只要最后一项是展开的
    //? 不能在useState中设置空数组，类型检查的要求
    setOpenkeys([keys[keys.length-1]])
  }

  //! 选中栏目2再刷新，导航定位的栏目1，右侧页面显示2的内容
  // todo: 需要使用useLocation获取当前pathname，然后放到 defaultSelectedKeys 中
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['/page1']} 
          mode="inline" 
          items={items} 
          onClick={menuClick}
          //? 某项菜单展开和回收的事件
          onOpenChange={handleOpenChange}
          //? 当前菜单展开项的key数组
          openKeys={openKeys}
        />
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
