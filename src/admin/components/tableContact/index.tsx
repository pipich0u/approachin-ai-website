import '../../index.css'
import React, { useState } from 'react';
import { Button, Switch, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { TableRowSelection } from 'antd/es/table/interface';
import { useTable } from '@/admin/hooks/useTable';
import ModalComponent from '../modal';

interface DataType {
    key: React.Key;
    name: string;
    phone: string;
    email: string;
    description: string;
    contacted?: boolean;
    time?: number;
    remark?: string;
}

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        phone: '123-456-7890',
        email: 'john.brown@example.com',
        description: 'A regular customer',
        contacted: true,
        time: 1672531199000,
        remark: 'Needs follow-up',
    },
    {
        key: '2',
        name: 'Jim Green',
        phone: '987-654-3210',
        email: 'jim.green@example.com',
        description: 'Interested in new products',
        contacted: false,
        time: 1672531199000,
        remark: 'Needs follow-up',
    },
    {
        key: '3',
        name: 'Joe Black',
        phone: '555-555-5555',
        email: 'joe.black@example.com',
        description: 'New customer',
        contacted: false,
        time: 1672531199000,
        remark: 'Needs follow-up',
    },
    {
        key: '4',
        name: 'Jim Red',
        phone: '111-222-3333',
        email: 'jim.red@example.com',
        description: 'Returning customer',
        contacted: false,
        time: 1672531199000,
        remark: 'Needs follow-up',
    },
];

export const TableContent = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);
    const { showModal, isModalOpen, handleOk, handleCancel, isEditMode } = useTable()
    const clear = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const delFucn = (id: string[]) => {
        console.log('delete ids:', id);
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '电话',
            dataIndex: 'phone',
        }, {
            title: '邮箱',
            dataIndex: 'email',
        }, {
            title: '简介',
            dataIndex: 'description',
        }, {
            title: '备注',
            dataIndex: 'remark',
        }, {
            title: '时间',
            dataIndex: 'time',
            sorter: {
                compare: (a, b) => (a as any).time - (b as any).time,
                multiple: 0,
            },
            render: (time) => {
                const date = new Date(time);
                return date.toLocaleString();
            }
        }, {
            title: '是否已联系',
            dataIndex: 'contacted',
            width: 130,
            sorter: {
                compare: (a, b) => (a as any).contacted - (b as any).contacted,
                multiple: 0,
            },
            render: (contacted) => {
                return <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={contacted}
                />
            },
        }, {
            title: '操作',
            dataIndex: 'action',
            width: 200,
            render: (_, record) => {
                return <div className='flex items-center gap-1'>
                    <Button color="default" variant="text">
                        编辑
                    </Button>
                    <Button color="default" variant="text" onClick={showModal} >
                        详情
                    </Button>
                    <Button color="red" variant="text" onClick={() => delFucn([record.key as string])}>
                        删除
                    </Button>
                </div>
            }
        }
    ];

    return <div className="admin-table-container">
        <div className='admin-table-nav mb-1 gap-2 flex items-center'>
            <Button variant="outlined" disabled={selectedRowKeys.length === 0}>导出</Button>
            <Button color="danger" onClick={clear} variant="outlined" disabled={selectedRowKeys.length === 0} loading={loading}>
                删除
            </Button>
        </div>
        <div className='admin-table-content'>
            <Table<DataType> rowSelection={rowSelection} columns={columns} dataSource={data} onChange={onChange} />
        </div>
        <ModalComponent isModalOpen={isModalOpen} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel} isEditMode={isEditMode} />
    </div>
}