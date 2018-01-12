import request from '@/utils/request'

export function loginIn(data) {
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'post',
    params: { token },
    data: {}
  })
}

