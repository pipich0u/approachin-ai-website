import { HttpException, HttpStatus } from '@nestjs/common';
import { BUSINESS_CODE } from '../constants/http-status.constant';

/**
 * 业务异常类
 */
export class BusinessException extends HttpException {
  constructor(
    message: string,
    code: number = BUSINESS_CODE.BUSINESS_ERROR,
    httpStatus: HttpStatus = HttpStatus.BAD_REQUEST,
  ) {
    super(
      {
        code,
        message,
      },
      httpStatus,
    );
  }

  /**
   * 参数错误
   */
  static paramError(message = '参数错误'): BusinessException {
    return new BusinessException(message, BUSINESS_CODE.PARAM_ERROR, HttpStatus.BAD_REQUEST);
  }

  /**
   * 资源不存在
   */
  static notFound(message = '资源不存在'): BusinessException {
    return new BusinessException(message, BUSINESS_CODE.RESOURCE_NOT_FOUND, HttpStatus.NOT_FOUND);
  }

  /**
   * 资源已存在
   */
  static alreadyExists(message = '资源已存在'): BusinessException {
    return new BusinessException(message, BUSINESS_CODE.RESOURCE_ALREADY_EXISTS, HttpStatus.CONFLICT);
  }

  /**
   * 未授权
   */
  static unauthorized(message = '请先登录'): BusinessException {
    return new BusinessException(message, BUSINESS_CODE.UNAUTHORIZED, HttpStatus.UNAUTHORIZED);
  }

  /**
   * 无权限
   */
  static forbidden(message = '无权限访问'): BusinessException {
    return new BusinessException(message, BUSINESS_CODE.FORBIDDEN, HttpStatus.FORBIDDEN);
  }

  /**
   * 操作失败
   */
  static operationFailed(message = '操作失败'): BusinessException {
    return new BusinessException(message, BUSINESS_CODE.OPERATION_FAILED, HttpStatus.BAD_REQUEST);
  }
}
