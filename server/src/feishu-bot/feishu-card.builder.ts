import { CreateInfoDto } from '../info/dto/create-info.dto';
type FeishuMarkdown = {
  tag: 'markdown';
  content: string;
  text_size: 'normal';
  margin?: string;
};

const markdown = (content: string, margin = '0px 0px 0px 0px'): FeishuMarkdown => ({
  tag: 'markdown',
  content,
  text_size: 'normal',
  margin,
});

const column = (elements: FeishuMarkdown[]) => ({
  tag: 'column',
  width: 'weighted',
  weight: 1,
  elements,
  vertical_spacing: '4px',
  horizontal_align: 'left',
  vertical_align: 'top',
});

const columnSet = (columns: any[]) => ({
  tag: 'column_set',
  flex_mode: 'stretch',
  horizontal_spacing: '12px',
  horizontal_align: 'left',
  columns,
  margin: '0px 0px 0px 0px',
});

export function buildFormSubmitCard(dto: CreateInfoDto) {
  return {
    schema: '2.0',
    config: {
      update_multi: true,
    },
    header: {
      title: {
        tag: 'plain_text',
        content: '表单提交内容',
      },
      subtitle: {
        tag: 'plain_text',
        content: '',
      },
      template: 'blue',
      padding: '12px 8px 12px 8px',
    },
    body: {
      direction: 'vertical',
      elements: [
        columnSet([
          column([
            markdown("**<font color='blue'>姓名</font>**"),
            markdown(dto.name),
          ]),
          column([
            markdown("**<font color='violet'>电话</font>**"),
            markdown(dto.phone),
          ]),
        ]),
        columnSet([
          column([
            markdown("**<font color='purple'>邮箱</font>**"),
            markdown(dto.email),
          ]),
          column([
            markdown("**<font color='blue'>公司</font>**"),
            markdown(dto.company ?? '无'),
          ]),
        ]),
        markdown("**<font color='violet'>内容</font>**"),
        markdown(dto.description ?? '无'),
      ],
    },
  };
}