import { useState } from 'react';

export interface TableRowData {
  id: number;
  name?: string;
  phone?: string;
  email?: string;
  description?: string;
  remark?: string;
  contacted?: boolean;
  createTime?: number;
}

export const useTable = () => {
  /** Modal 状态 */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  /** 当前行数据 */
  const [currentRow, setCurrentRow] = useState<TableRowData | null>(null);

  /** 打开查看 */
  const openDetail = (row: TableRowData) => {
    setCurrentRow(row);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  /** 打开编辑 */
  const openEdit = (row: TableRowData) => {
    setCurrentRow(row);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  /** 关闭 */
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentRow(null);
  };

  return {
    /** state */
    isModalOpen,
    isEditMode,
    currentRow,

    /** actions */
    openDetail,
    openEdit,
    closeModal,
    setIsModalOpen
  };
};
