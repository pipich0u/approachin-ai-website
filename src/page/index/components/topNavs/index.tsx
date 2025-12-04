import React, { useState } from 'react';
import './index.css';
import logo_black from '@/assets/svg/logo-black.svg';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const TopNavs = () => {
  const navigate = useNavigate();

  const [hoverId, setHoverId] = useState<number | null>(null);

  const navItems = [
    { title: '解决方案', id: 0, isSelected: true, path: '/' },
    { title: '开源社区', id: 1, isSelected: true, path: '/' },
    { title: '模型仓库', id: 2, isSelected: false, path: '/' },
    { title: '客户案例', id: 3, isSelected: false, path: '/' },
    { title: '生态合作', id: 4, isSelected: false, path: '/' },
    { title: '趋境咨询', id: 5, isSelected: false, path: '/' },
    { title: '关于我们', id: 6, isSelected: true, path: '/' },
  ];

  const onNavigate = (item: any) => {
    if (!item.isSelected) navigate(item.path + '?id=' + item.id);
  };

  const dropdownMenu = {
    items: [
      {
        key: '1',
        label: (
          <div className="text-[12px]">
            暂无内容
          </div>
        ),
      },
    ],
  };

  return (
    <nav className="bg-1 navbar">
      <div className="app w-full flex justify-between">

        <div className="logo">
          <a href="/">
            <img src={logo_black} alt="" />
          </a>
        </div>

        <div className="navbar-container">
          {navItems.map((item) => {

            // 非下拉 — 点击跳转
            if (!item.isSelected) {
              return (
                <div
                  key={item.id}
                  className="navbar-item cursor-pointer"
                  onClick={() => onNavigate(item)}
                >
                  {item.title}
                </div>
              );
            }

            // 下拉菜单项
            return (
              <Dropdown
                key={item.id}
                trigger={['hover']}
                menu={dropdownMenu}
                placement="bottomLeft"
              >
                <div
                  className="navbar-item cursor-pointer flex items-center"
                  onMouseEnter={() => setHoverId(item.id)}
                  onMouseLeave={() => setHoverId(null)}
                >
                  {item.title}
                  <DownOutlined
                    className={`ml-1 transition-all duration-300 ${
                      hoverId === item.id ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </div>
              </Dropdown>
            );
          })}
        </div>

      </div>
    </nav>
  );
};

export default TopNavs;
