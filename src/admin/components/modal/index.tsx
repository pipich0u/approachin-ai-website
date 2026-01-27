import { Modal } from 'antd';

interface ModalComponentProps {
  open: boolean;
  isEditMode: boolean;
  data: any;
  onOk: () => void;
  onCancel: () => void;
}

const ModalComponent = ({
  open,
  isEditMode,
  data,
  onOk,
  onCancel,
}: ModalComponentProps) => {
  return (
    <Modal
      title={isEditMode ? '编辑备注' : '详细信息'}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      {isEditMode ? (
        <div>
          <p>编辑模式</p>
          <p>当前备注：{data?.remark ?? '-'}</p>
          {/* 这里后面可以直接放 Form */}
        </div>
      ) : (
        <div>
          <p><b>姓名：</b>{data?.name}</p>
          <p><b>电话：</b>{data?.phone}</p>
          <p><b>邮箱：</b>{data?.email}</p>
          <p><b>简介：</b>{data?.description}</p>
          <p><b>备注：</b>{data?.remark}</p>
        </div>
      )}
    </Modal>
  );
};

export default ModalComponent;
