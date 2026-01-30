import { textCopy } from '@/utils/transfrom'
import { CopyOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import { useRef } from 'react'
import FormElement from './form'

interface ModalComponentProps {
  open: boolean
  isEditMode: boolean
  data: any
  onOk: (id: number, values?: any) => void
  onCancel: () => void
}

const ModalComponent = ({
  open,
  isEditMode,
  data,
  onOk,
  onCancel,
}: ModalComponentProps) => {
  const formRef = useRef<any>(null)

  return (
    <Modal
      title={isEditMode ? '编辑备注' : '详细信息'}
      open={open}
      onOk={() => {
        if (isEditMode) {
          formRef.current?.submit()
        } else {
          onOk(data.id)
        }
      }}
      onCancel={onCancel}
      destroyOnClose
    >
      {isEditMode ? (
        <div className='pt-5'>
          <p className='mb-2.5'><b>姓名：</b>{data?.name}</p>
          <FormElement
            ref={formRef}
            data={data}
            onSubmit={(values) => {
              onOk(data.id, values)
            }}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p><b>姓名：</b>{data?.name}</p>
          <p>
            <b>电话：</b>{data?.phone}
            <CopyOutlined
              className="cursor-pointer ml-2"
              onClick={() => textCopy(data?.phone)}
            />
          </p>
          <p>
            <b>邮箱：</b>{data?.email}
            <CopyOutlined
              className="cursor-pointer ml-2"
              onClick={() => textCopy(data?.email)}
            />
          </p>
          <p><b>是否已联系：</b>{data?.contact ? '已联系' : '未联系'}</p>
          <p><b>简介：</b>{data?.description}</p>
          <p><b>备注：</b>{data?.remark}</p>
        </div>
      )}
    </Modal>
  )
}

export default ModalComponent
