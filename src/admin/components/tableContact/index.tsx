import React, { useEffect, useState } from 'react';
import { Button, Switch, Table, message } from 'antd';
import type { TableColumnsType } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import {
    getPage,
    delItems,
    updateItem,
} from '@/service/admin';
import { exportTable } from '@/utils/exportXlsx';
import ModalComponent from '../modal/index';
import { useTable } from '@/admin/hooks/useTable';

interface DataType {
    key: number;
    id: number;
    name: string;
    phone: string;
    email: string;
    description?: string;
    remark?: string;
    contact?: boolean;
    createTime?: number;
}

const TableContent: React.FC = () => {
    const [tableData, setTableData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    // 分页 
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);

    const {
        isModalOpen,
        isEditMode,
        currentRow,
        openDetail,
        openEdit,
        closeModal,
        setIsModalOpen
    } = useTable();

    // 分页获取数据
    const fetchTableData = async (silent = false) => {
        if (!silent) setLoading(true)
        try {
            const res = await getPage({ page, pageSize });
            const list = res.data.data.map((item: any) => ({
                ...item,
                key: item.id,
            }));

            setTableData(list);
            setTotal(res.data.total);
        } catch (e) {
            message.error('数据加载失败');
        } finally {
            if (!silent) setLoading(false)
        }
    };

    useEffect(() => {
        let timer: number
        let cancelled = false

        const loop = async () => {
            if (cancelled) return
            await fetchTableData(true)
            timer = window.setTimeout(loop, 5000)
        }

        loop()

        return () => {
            cancelled = true
            clearTimeout(timer)
        }
    }, [page, pageSize])


    // 删除
    const handleDelete = async (ids: number[]) => {
        setLoading(true);
        try {
            const res = await delItems(ids);
            if (res.code == 200) {
                message.success('删除成功');
                setSelectedRowKeys([]);
                fetchTableData();
            }
        } finally {
            setLoading(false);
        }
    };

    const columns: TableColumnsType<DataType> = [
        { title: '姓名', dataIndex: 'name' },
        { title: '电话', dataIndex: 'phone' },
        { title: '邮箱', dataIndex: 'email' },
        { title: '简介', dataIndex: 'description' },
        { title: '备注', dataIndex: 'remark' },
        {
            title: '时间',
            dataIndex: 'createTime',
            render: (t) => (t ? new Date(t).toLocaleString() : '-'),
            sorter: (a, b) =>
                new Date(a.createTime || 0).getTime() -
                new Date(b.createTime || 0).getTime(),
        },
        {
            title: '是否已联系',
            dataIndex: 'contact',
            width: 120,
            render: (_, record) => (
                <Switch
                    checked={record.contact}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    onChange={() => message.info('请在编辑中修改！')}
                />
            ),
        },
        {
            title: '操作',
            width: 200,
            render: (_, record) => (
                <div style={{ display: 'flex', gap: 8 }}>
                    <Button type="link" onClick={() => openEdit(record)}>
                        编辑
                    </Button>
                    <Button type="link" onClick={() => openDetail(record)}>
                        详情
                    </Button>
                    <Button type="link" danger onClick={() => handleDelete([record.id])}>
                        删除
                    </Button>
                </div>
            ),
        },
    ];
    const handleExport = () => {
        const exportData = tableData
            .filter(item => selectedRowKeys.includes(item.key))
            .map(item => ({
                name: item.name,
                phone: item.phone,
                email: item.email,
                description: item.description,
                contact: item.contact ? '是' : '否',
                createTime: new Date(item.createTime!).toLocaleString(),
                remark: item.remark ?? '',
            }));

        exportTable(exportData, '客户信息.xlsx');
    };

    const handleOk = async (id: number, values?: { remark: string; contact: boolean }) => {
        if (values) {
            await updateItem(id, values)
            message.success('更新成功')
            fetchTableData()
        }
        setIsModalOpen(false)
    }

    return (
        <div className="admin-table-page">
            <div style={{
                marginBottom: 16,
                display: 'flex',
                gap: 8,
            }}>
                <Button
                    disabled={selectedRowKeys.length === 0}
                    onClick={handleExport}>
                    导出
                </Button>
                <Button danger loading={loading}
                    disabled={selectedRowKeys.length === 0}
                    onClick={() =>
                        handleDelete(selectedRowKeys as number[])
                    }>
                    批量删除
                </Button>
            </div>

            <Table<DataType>
                rowSelection={{
                    selectedRowKeys,
                    onChange: setSelectedRowKeys,
                }}
                loading={loading}
                columns={columns}
                dataSource={tableData}
                pagination={{
                    current: page,
                    pageSize,
                    total,
                    onChange: (p, ps) => {
                        setPage(p);
                        setPageSize(ps);
                    },
                }}
            />

            {/* Modal */}
            <ModalComponent
                open={isModalOpen}
                isEditMode={isEditMode}
                data={currentRow}
                onOk={handleOk}
                onCancel={closeModal}
            />
        </div >
    );
};

export default TableContent;
