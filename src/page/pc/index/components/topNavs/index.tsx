import React, { useState } from 'react';
import './index.css';
import logo_black from '@/assets/svg/logo-black.svg';
import { useNavigate } from 'react-router-dom';
import { Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { menuHrefListDefault } from '@/page/pc/index/textConfig';
import { IconFont } from '@/utils/antdUtils';
import { trackButtonClick } from '@/utils/umami';

const TopNavs = () => {
  const navigate = useNavigate();

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const onNavigate = (href: string, title?: string) => {
    if (!href) return;
    if (title) {
      trackButtonClick(`顶部导航-${title}`, '页面顶部导航栏', { href, title });
    }

    if (href.startsWith('http://') || href.startsWith('https://')) {
      window.open(href, '_blank');
    } else {
      navigate(`/${href}`);
    }
  };

  const getDropdownMenu = (subItems: Array<{ title: string; href: string; logo?: string; logoWidth?: number; logoOffset?: number }>) => {
    return {
      items: subItems.map((subItem, index) => ({
        key: `${index}`,
        label: (
          <div
            className="dropdown-item"
            onClick={() => {
              if (!subItem.href) {
                message.info('敬请期待');
                return;
              }
              onNavigate(subItem.href, subItem.title);
            }}
          >
            {subItem.logo ? (
              <img src={subItem.logo} alt={subItem.title} className="dropdown-logo" style={{ width: `${subItem.logoWidth || 140}px`, marginLeft: subItem.logoOffset || 0 }} />
            ) : (
              subItem.title
            )}
          </div>
        ),
      })),
    };
  };

  return (
    <nav className="bg-1 navbar">
      <div className="navbar-inner">
        {/* 左侧：Logo + 导航链接 */}
        <div className="navbar-left">
          <div
            className="logo-link"
            onClick={() => {
              trackButtonClick('Logo点击', '页面顶部导航栏', { href: '/' });
              navigate('/');
            }}
          >
            <img src={logo_black} alt="logo" />
          </div>

          <div className="navbar-container">
            {menuHrefListDefault.map((item, index) => {
              if (!item.isSelected) {
                return (
                  <div
                    key={index}
                    className="navbar-item cursor-pointer"
                    onClick={() => {
                      if ((item as any).comingSoon) {
                        message.info('敬请期待');
                        return;
                      }
                      onNavigate(item.href, item.title);
                    }}
                  >
                    {item.title}
                  </div>
                );
              }

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

        {/* 右侧：免费使用按钮 */}
        <div className="navbar-right">
          <button
            className="navbar-cta"
            onClick={() => {
              trackButtonClick('免费使用', '页面顶部导航栏', { href: '/contact' });
              navigate('/contact');
            }}
          >
            免费使用
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavs;
