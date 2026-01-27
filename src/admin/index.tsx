import React, { useState, useEffect } from 'react';
import { SolutionOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import './index.css'
const { Header, Content, Footer, Sider } = Layout;
import logo from '@/assets/svg/b-logo.svg'
import { TableContent } from './components/tableContact';
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
    getItem('咨询客户', '1', <SolutionOutlined />),
    //   getItem('Option 2', '2', <DesktopOutlined />),
    //   getItem('User', 'sub1', <UserOutlined />, [
    //     getItem('Tom', '3'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    //   ]),
    //   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    //   getItem('Files', '9', <FileOutlined />),
];

const AdminPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedKey, setSelectedKey] = useState('1');
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const password = urlParams.get('pwd');

        if (password !== 'qujing2024') {
            window.history.back();
        } else {
            setIsAuthenticated(true);
        }
    }, []);

    if (!isAuthenticated) {
        return null;
    }

    // 根据选中的菜单key渲染不同的内容
    const renderContent = () => {
        switch (selectedKey) {
            case '1':
                return <TableContent />
            // 未来可以添加更多case
            // case '2':
            //     return <OtherComponent />;
            default:
                return <div>请选择菜单项</div>;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="p-4" >
                    <img src={logo} alt="" />
                </div>

                <Menu
                    theme="dark"
                    selectedKeys={[selectedKey]}
                    mode="inline"
                    items={items}
                    onClick={({ key }) => setSelectedKey(key)}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: '#fff' }} className="flex items-center justify-center" >
                    <div className="text-[24px] text-[black]">趋境官网后台管理</div>
                </Header>
                <Content style={{ margin: ' 16px' }}>
                    <div
                        style={{
                            padding: 20,
                            minHeight: 730,
                            background: '#fff',
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {renderContent()}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    更多功能持续开发中... <br /> ©{new Date().getFullYear()} 趋境科技
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminPage;