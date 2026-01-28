import React, { useEffect, forwardRef, useImperativeHandle } from 'react'
import type { FormProps } from 'antd'
import { Button, Form, Input, Switch } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

type FieldType = {
  remark?: string
  contact?: boolean
}

interface FormElementProps {
  data: any
  onSubmit: (values: FieldType) => void
}

const FormElement = forwardRef<any, FormElementProps>(
  ({ data, onSubmit }, ref) => {
    const [form] = Form.useForm<FieldType>()

    useImperativeHandle(ref, () => ({
      submit: () => form.submit(),
    }))

    useEffect(() => {
      if (data) {
        form.setFieldsValue({
          remark: data.remark,
          contact: data.contact,
        })
      }
    }, [data, form])

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
      onSubmit(values)
    }

    return (
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="备注"
          name="remark"
          rules={[{ required: true, message: '请输入备注' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item<FieldType>
          label="是否已联系"
          name="contact"
          valuePropName="checked"
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </Form.Item>

        <Form.Item hidden>
          <Button htmlType="submit" />
        </Form.Item>
      </Form>
    )
  }
)

export default FormElement
