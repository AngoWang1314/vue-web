import { get, post } from '@/utils/axios';

export async function getList(args = {}) {
  const url = 'https://cnodejs.org/api/v1/topics';
  const params = { page: 1, pageSize: 10, ...args };
  const res = await get(url, {params: params, headers: {need_check_token: true}});
  return res;
}

export async function postItem(args = {}) {
  const url = 'https://cnodejs.org/api/v1/topics';
  const params = { ...args };
  const res = await post(url, params, {headers: {need_check_token: true}});
  return res;
}
