import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, theme } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];
//! 面向对象写法
// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem('Option 1', '/page1', <PieChartOutlined />),
//     getItem('Option 2', '/page2', <DesktopOutlined />),
//     getItem('User', 'page3', <UserOutlined />, [
//       getItem('Tom', '3'),
//       getItem('Bill', '4'),
//       getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
//   ];
// todo: 登录请求到数据后，就可以跟items这个数组进行匹配
const items: MenuItem[] = [
  {
    label: 'Option 1',
    key: '/page1',
    icon: <PieChartOutlined />
  }, {
    label: 'Option 2',
    key: '/page2',
    icon: <DesktopOutlined />
  }, {
    label: 'Option 3',
    key: 'page3',
    icon: <UserOutlined />,
    children: [
      {
        label: 'Option 301',
        key: '/page3/page301',
      }, {
        label: 'Option 302',
        key: '/page3/page302',
      }, {
        label: 'Option 303',
        key: '/page3/page303',
      }
    ]
  }, {
    label: 'Option 4',
    key: 'page4',
    icon: <TeamOutlined />,
    children: [
      {
        label: 'Option 401',
        key: '/page3/page301',
      }, {
        label: 'Option 402',
        key: '/page3/page302',
      }
    ]
  }, {
    label: 'Option 5',
    key: '/page5',
    icon: <FileOutlined />
  }
]

const Comp: React.FC = () => {
  const navigateTo = useNavigate()
  const currentRoute = useLocation()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menuClick = (e: {key:string}) => {
    //// console.log("Click: ", e.key)
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

  return (
    <Menu 
      theme="dark" 
      defaultSelectedKeys={[currentRoute.pathname]} 
      mode="inline" 
      items={items} 
      onClick={menuClick}
      //? 某项菜单展开和回收的事件
      onOpenChange={handleOpenChange}
      //? 当前菜单展开项的key数组
      openKeys={openKeys}
    />
  )
}

export default Comp
