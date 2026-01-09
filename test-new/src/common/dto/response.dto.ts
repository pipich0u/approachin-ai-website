/**
 * 统一响应格式
 */
export class ResponseDto<T = any> {
  /**
   * 状态码
   */
  code: number;

  /**
   * 响应消息
   */
  message: string;

  /**
   * 响应数据
   */
  data: T | undefined;

  /**
   * 时间戳
   */
  timestamp: number;

  /**
   * 请求路径
   */
  path?: string;

  constructor(code: number, message: string, data?: T, path?: string) {
    this.code = code;
    this.message = message;
    this.data = data;
    this.timestamp = Date.now();
    this.path = path;
  }

  /**
   * 成功响应
   */
  static success<T>(data?: T, message = '操作成功'): ResponseDto<T> {
    return new ResponseDto(200, message, data);
  }

  /**
   * 失败响应
   */
  static error(message = '操作失败', code = 500, data?: any): ResponseDto {
    return new ResponseDto(code, message, data);
  }
}
