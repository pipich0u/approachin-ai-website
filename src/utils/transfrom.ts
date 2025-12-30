import { message } from "antd";

export const textCopy = (text: string) => {
  message.success("复制成功");
  // 创建输入框
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  // 隐藏此输入框
  textarea.style.position = "fixed";
  textarea.style.top = "-10000px";
  textarea.style.left = "-10000px";
  textarea.style.clip = "rect(0 0 0 0)";
  // 赋值
  textarea.value = text
  // 选中
  textarea.select();
  // 复制
  document.execCommand("copy", true);
};

export function track(event: string, data?: Record<string, any>) {
  if (!import.meta.env.PROD) return
  if (!(window as any).umami) return

    ; (window as any).umami.track(event, data)
}

export const getCopyrightYear = (startYear: number): string => {
  const currentYear = new Date().getFullYear()
  return startYear === currentYear ? `${startYear}` : `${startYear}-${currentYear}`
}