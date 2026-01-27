import { request } from './request';

/**
 * ========================
 * Info 实体
 * ========================
 */
export interface Info {
  id: number;
  name: string;
  company?: string;
  phone: string;
  email: string;
  description?: string;
  remark?: string | null;
  contact: boolean;
  createTime: string;
  updateTime: string;
}

/**
 * ========================
 * 分页数据结构
 * ========================
 */
export interface PageData<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

/**
 * ========================
 * API 接口
 * ========================
 */

/** 分页查询 */
export const getPage = (params: {
  page: number;
  pageSize: number;
}) => {
  return request<PageData<Info>>('/v2/info/page', {
    method: 'GET',
    params,
  });
};

/** 查询全部 */
export const getList = () => {
  return request<Info[]>('/v2/info', {
    method: 'GET',
  });
};

/** 查询单条 */
export const getDetail = (id: number) => {
  return request<Info>(`/v2/info/${id}`, {
    method: 'GET',
  });
};

/** 新增 */
export const createItem = (data: Partial<Info>) => {
  return request<void>('/v2/info', {
    method: 'POST',
    body: data,
  });
};

/** 更新 */
export const updateItem = (id: number, data: Partial<Info>) => {
  return request<void>(`/v2/info/${id}`, {
    method: 'PATCH',
    body: data,
  });
};

/** 删除单条 */
export const delItem = (id: number) => {
  return request<void>(`/v2/info/${id}`, {
    method: 'DELETE',
  });
};

/** 删除（单 / 批） */
export const delItems = (ids: number[]) => {
  return request<void>('/v2/info/remove', {
    method: 'POST',
    body: { ids },
  });
};
