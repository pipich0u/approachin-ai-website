import React, { useState } from 'react';
import './index.css';
import logo_black from '@/assets/svg/logo-black.svg';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { menuHrefListDefault } from '@/page/textConfig';
import { IconFont } from '@/utils/antdUtils';
const TopNavs = () => {
  const navigate = useNavigate();

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const onNavigate = (href: string) => {
    // 根据 href 进行路由跳转或锚点定位
    navigate(`/${href}`);
  };

  // 根据菜单项的 subItems 生成下拉菜单
  const getDropdownMenu = (subItems: Array<{ title: string; href: string }>) => {
    return {
      items: subItems.map((subItem, index) => ({
        key: `${index}`,
        label: (
          <div
            className="text-[14px] flex items-center justify-center"
            onClick={() => onNavigate(subItem.href)}
          >
            {subItem.title}
          </div>
        ),
      })),
    };
  };

  return (
    <nav className="bg-1 navbar">
      <div className="app w-full flex justify-between">

        <div className="logo flex items-center justify-between w-full">
          <img src={logo_black} alt="" className=' cursor-pointer ' onClick={() => navigate('/')} />
          <div className="navbar-container ml-[100px]">
            {menuHrefListDefault.map((item, index) => {

              // 非下拉 — 点击跳转
              if (!item.isSelected) {
                return (
                  <div
                    key={index}
                    className="navbar-item cursor-pointer"
                    onClick={() => onNavigate(item.href)}
                  >
                    {item.title}
                  </div>
                );
              }

              // 下拉菜单项
              return (
                <Dropdown
                  key={index}
                  trigger={['hover']}
                  menu={getDropdownMenu(item.subItems || [])}
                  placement="bottomCenter"
                >
                  <div
                    className="navbar-item cursor-pointer flex items-center"
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    {item.title}
                    <IconFont type='icon-down-s'
                      className={`ml-1 transition-all duration-800 text-[20px]!
                       ${hoverIndex === index ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>
                </Dropdown>
              );
            })}
          </div>
        </div>
        {/* <Button className='navbar-btn' type='primary'>免费下载</Button> */}
      </div>
    </nav>
  );
};

export default TopNavs;
