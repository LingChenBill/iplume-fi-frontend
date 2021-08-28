import service from '@/utils/request'

// 登录方法.
export function login(username, password) {
  const data = {
    username,
    password,
  }
  return service({
    url: '/apis/login',
    method: 'post',
    data: data
  })
}

// 获取csrf token.
export function csrfToken() {
  return service({
    url: '/apis/csrfToken',
    method: 'get',
  })
}
